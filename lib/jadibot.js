import path from 'path'
import fs from 'fs'
import pino from 'pino'
import { makeWASocket } from '../lib/simple.js'
import {
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore,
  useMultiFileAuthState,
  DisconnectReason
} from '@adiwajshing/baileys'

const delay = ms => new Promise(res => setTimeout(res, ms))

const ROOT = path.join(process.cwd(), 'session', 'jadibot')
const sessions = global.jadibotSessions ??= new Map()
const reconnect = new Map()

if (!fs.existsSync(ROOT)) fs.mkdirSync(ROOT, { recursive: true })

function getPath(jid) {
  return path.join(ROOT, jid.replace(/@.+/, ''))
}

function isActive(jid) {
  return sessions.has(jid.replace(/@.+/, ''))
}

async function startJadibot(conn, m, jid, isReconnect = false) {
  const id = jid.replace(/@.+/, '')

  if (sessions.has(id) && !isReconnect) throw 'Jadibot sudah aktif!'

  const sessionPath = getPath(jid)
  if (!fs.existsSync(sessionPath)) fs.mkdirSync(sessionPath, { recursive: true })

  const { state, saveCreds } = await useMultiFileAuthState(sessionPath)
  const { version } = await fetchLatestBaileysVersion()

  const child = makeWASocket({
    version,
    logger: pino({ level: 'silent' }),
    printQRInTerminal: false,
    browser: [ 'Mac OS', 'Safari', '10.15.7' ],
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, pino())
    }
  })

  child.ev.on('creds.update', saveCreds)

  if (!state.creds.registered && child.requestPairingCode && !isReconnect) {
    await delay(3000)
    const code = await child.requestPairingCode(id)
    const pairing = code?.match(/.{1,4}/g)?.join('-') || code

    await conn.sendMessage(m.chat, {
      text:
        `🔗 *PAIRING CODE JADIBOT*\n\n` +
        `📱 Linked Devices → Link Device\n\n` +
        `\`${pairing}\`\n\n` +
        `⚠️ Jangan bagikan ke siapapun`
    }, { quoted: m })
  }

  // 🔥 CONNECTION
  child.ev.on('connection.update', async ({ connection, lastDisconnect }) => {

    if (connection === 'open') {
    sessions.set(id, child)

    const botNumber = child.user.id.split(':')[0] + '@s.whatsapp.net'
    await conn.sendMessage(m.chat, {
        text: `✅ Jadibot aktif @${id}`,
        mentions: [jid]
    }, { quoted: m })

    const ownerNumber = '6288258041396@s.whatsapp.net'

    await child.sendMessage(ownerNumber, {
        text:
            `👋 Halo kak!\n\n` +
            `🤖 Erine MD sukses teraktifasi\n\n` +
            `📱 User: @${id}\n` +
            `🔗 Bot: @${botNumber.split('@')[0]}\n\n` +
            `🚀 Status: Online & siap digunakan`
    }, {
        mentions: [jid, botNumber]
    })
}

    if (connection === 'close') {
      sessions.delete(id)

      const reason = lastDisconnect?.error?.output?.statusCode
      const attempt = reconnect.get(id) || 0

      if (reason === DisconnectReason.loggedOut) {
        fs.rmSync(sessionPath, { recursive: true, force: true })
        reconnect.delete(id)
        return
      }

      if (attempt < 3) {
        reconnect.set(id, attempt + 1)

        setTimeout(() => {
          startJadibot(conn, m, jid, true)
        }, 5000)
      } else {
        reconnect.delete(id)
      }
    }
  })

  child.ev.on('messages.upsert', async ({ messages, type }) => {
    if (type !== 'notify') return

    for (let msg of messages) {
      if (!msg.message) continue

      try {
        const { handler } = await import('../handler.js')
        await handler.call(child, { messages: [msg], type: 'notify' })
      } catch {}
    }
  })
}

async function stopJadibot(jid, deleteSession = false) {
  const id = jid.replace(/@.+/, '')
  const session = sessions.get(id)

  if (session) {
    session.sock.ws.close()
    sessions.delete(id)

    if (deleteSession) {
      fs.rmSync(session.path, { recursive: true, force: true })
    }
  }
}

async function restoreJadibot(conn) {
  const dirs = fs.readdirSync(ROOT)

  for (let dir of dirs) {
    const jid = dir + '@s.whatsapp.net'

    const fakeMsg = {
      sender: jid,
      chat: jid
    }

    startJadibot(conn, fakeMsg, jid, true)
  }
}

export {
  startJadibot,
  stopJadibot,
  isActive,
  restoreJadibot
}