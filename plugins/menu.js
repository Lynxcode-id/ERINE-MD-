/**
 * Ini sc free jangan di jual ya
 * Base Nao ESM 
 * Info script di CH https://whatsapp.com/channel/0029VbAYjQgKrWQulDTYcg2K
 **/

import moment from 'moment-timezone'
import fetch from 'node-fetch'
import fs from 'fs'

moment.locale('id')

const THUMB = global.menuThumb
const MENU_SOUND = global.menuAudio
const VIDEO_GIF = global.videothumb 

const mapFrom = 'abcdefghijklmnopqrstuvwxyz1234567890'
const mapTo = [
  'ᴀ','ʙ','ᴄ','ᴅ','ᴇ','ꜰ','ɢ','ʜ','ɪ','ᴊ','ᴋ','ʟ','ᴍ',
  'ɴ','ᴏ','ᴘ','q','ʀ','ꜱ','ᴛ','ᴜ','ᴠ','ᴡ','x','ʏ','ᴢ',
  '1','2','3','4','5','6','7','8','9','0'
]

function toSmallCaps(text = '') {
  return text
    .toLowerCase()
    .split('')
    .map(c => {
      const i = mapFrom.indexOf(c)
      return i !== -1 ? mapTo[i] : c
    })
    .join('')
}

function formatTag(tag) {
  return tag.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

function randomSquare() {
  const squares = ['▧', '▢', '▣', '▤', '▥', '▦', '▧', '▨', '▩']
  return squares[Math.floor(Math.random() * squares.length)]
}

let handler = async (m, { conn, usedPrefix, command, text }) => {
  try {
    const who = m.sender
    let user = global.db.data.users[who]

    const isOwner = Array.isArray(global.owner)
      ? global.owner.some(v => (Array.isArray(v) ? v[0] : v) === who.split('@')[0])
      : false

    let botname = global.namebot || conn.user?.name || 'ᴇʀɪɴᴇ-ᴍᴅ | ᴘʀᴏᴊᴇᴄᴛ'
    let owner = global.nameown || 'Owner'
    let version = global.version || '1.0.0'

    const fkontak = { 
        key: { participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, 
        message: { 'contactMessage': { 'displayName': owner, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${owner},;;;\nFN:${owner}\nitem1.TEL;waid=${who.split('@')[0]}:${who.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': THUMB, thumbnail: THUMB, sendEphemeral: true } }
    }

    let limit = (isOwner || user.premiumTime >= 1) ? '∞ ᴜɴʟɪᴍɪᴛᴇᴅ' : user.limit
    let role = isOwner ? 'ᴏᴡɴᴇʀ' : (user.role || 'ɴᴇᴡʙɪᴇ')
    let totalexp = user.totalexp || user.exp || 0

    let plugins = Object.values(global.plugins || {}).filter(p => !p.disabled)
    let categories = {}

    for (let p of plugins) {
      let helps = Array.isArray(p.help) ? p.help : [p.help]
      let tags = Array.isArray(p.tags) ? p.tags : [p.tags]
      for (let tag of tags) {
        if (!tag) continue
        tag = tag.toLowerCase().trim()
        if (!categories[tag]) categories[tag] = []
        categories[tag].push({ helps, limit: p.limit, premium: p.premium, owner: p.owner, admin: p.admin, prefix: !p.customPrefix })
      }
    }

    let menuType = (text || '').toLowerCase().trim()
    let arrayMenu = Object.keys(categories).sort()

    // --- HEADER MENU ---
    let headerCaption = `
${global.htjava} *${toSmallCaps('ᴅᴀsʜʙᴏᴀʀᴅ ᴇʀɪɴᴇ')}*

${toSmallCaps('ʜᴀɪ')}, @${who.split('@')[0]}
${toSmallCaps('ꜱɪᴀᴘ ʙᴀɴᴛᴜ ᴋᴀᴍᴜ ʜᴀʀɪ ɪɴɪ — ᴘɪʟɪʜ ᴍᴇɴᴜ ʏᴀɴɢ ᴋᴀᴍᴜ ʙᴜᴛᴜʜɪɴ.')}

┌  • *${toSmallCaps('ʙᴏᴛ ɪɴꜰᴏ')}*
│  ◦  ${toSmallCaps('ɴᴀᴍᴇ')} : ${toSmallCaps(botname)}
│  ◦  ${toSmallCaps('ᴏᴡɴᴇʀ')} : ${toSmallCaps(owner)}
│  ◦  ${toSmallCaps('ᴠᴇʀ')}   : ${version}
└  ◦  ${toSmallCaps('ᴅᴀᴛᴇ')}  : ${moment.tz('Asia/Makassar').format('DD/MM/YY')}

┌  • *${toSmallCaps('ᴜsᴇʀ ɪɴꜰᴏ')}*
│  ◦  ${toSmallCaps('ʟɪᴍɪᴛ')} : ${limit}
│  ◦  ${toSmallCaps('ʀᴏʟᴇ')}  : ${toSmallCaps(role)}
└  ◦  ${toSmallCaps('ᴇxᴘ')}   : ${totalexp}

┌  • *${toSmallCaps('ᴋᴇᴛᴇʀᴀɴɢᴀɴ')}*
│  ◦  Ⓟ = ${toSmallCaps('ᴘʀᴇᴍɪᴜᴍ')}
│  ◦  Ⓛ = ${toSmallCaps('ʟɪᴍɪᴛ')}
│  ◦  Ⓞ = ${toSmallCaps('ᴏᴡɴᴇʀ')}
└  ◦  Ⓐ = ${toSmallCaps('ᴀᴅᴍɪɴ')}

${toSmallCaps('ᴋᴇᴛɪᴋ')} *.help <nama_kategori>*
${toSmallCaps('ᴜɴᴛᴜᴋ ᴍᴇʟɪʜᴀᴛ ᴅᴀꜰᴛᴀʀ ᴘᴇʀ ᴋᴀᴛᴇɢᴏʀɪ.')}

ᴋᴇᴛɪᴋ .ᴍᴇɴᴜ ᴀʟʟ ᴀᴛᴀᴜ .ʜᴇʟᴘ ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ sᴇᴍᴜᴀ
ᴍᴇɴᴜ ɢᴜɴᴀᴋᴀɴ ʙᴏᴛ ɪɴɪ ᴅᴇɴɢᴀɴ ʙɪᴊᴀᴋ
ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴇʀɪɴᴇ-ᴍᴅ : ʟʏɴɴ - 𝟹𝟻ƒᴘѕ
`.trim()

    // --- TAMPILAN JIKA TIDAK PILIH KATEGORI ---
    if (!menuType || (!categories[menuType] && menuType !== 'all')) {
      await conn.sendMessage(m.chat, {
          video: { url: VIDEO_GIF },
          gifPlayback: true,
          caption: headerCaption,
          mentions: [who],
          contextInfo: {
              forwardingScore: 999,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                  newsletterName: `「 🐣 ᴇʀɪɴᴇ-ᴍᴅ ɪɴғᴏʀᴍᴀᴛɪᴏɴ 🐣 」`,
                  newsletterJid: "120363400411310874@newsletter"
              },
              externalAdReply: {
                  title: `Ｅ Ｒ Ｉ Ｎ Ｅ  -  Ｍ Ｄ  Ｖ${version}`,
                  body: `Active Period: ${moment.tz('Asia/Makassar').format('HH:mm:ss')}`,
                  thumbnailUrl: THUMB,
                  sourceUrl: 'https://github.com/Lynxcode-id',
                  mediaType: 1,
                  renderLargerThumbnail: true
              }
          }
      }, { quoted: fkontak })

      if (MENU_SOUND) await sendMenuSound(conn, m)
      return
    }

    // --- MENU LIST (LOGIKA BARU) ---
    let menuText = [`${toSmallCaps('ᴍᴇɴᴜ ʟɪsᴛ')} - ${menuType.toUpperCase()}\n`]
    let targets = menuType === 'all' ? arrayMenu : [menuType]

    for (const tag of targets) {
      menuText.push(`┌──  ${randomSquare()} *${toSmallCaps(formatTag(tag))}*`)

      for (const item of categories[tag]) {
        for (const cmd of item.helps) {
          const prefix = item.prefix ? usedPrefix : ''
          let info = ''
          if (item.premium) info += ' Ⓟ'
          if (item.limit) info += ' Ⓛ'
          if (item.owner) info += ' Ⓞ'
          if (item.admin) info += ' Ⓐ'

          menuText.push(`│ ◦ ${prefix}${toSmallCaps(cmd)}${info}`)
        }
      }
      menuText.push(`└───────────────\n`)
    }

    await conn.sendMessage(m.chat, {
        video: { url: VIDEO_GIF },
        gifPlayback: true,
        caption: menuText.join('\n').trim(),
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: `「 🐣 ᴇʀɪɴᴇ-ᴍᴅ ɪɴғᴏʀᴍᴀᴛɪᴏɴ 🐣 」`,
                newsletterJid: "120363400411310874@newsletter"
            },
            externalAdReply: {
                title: botname,
                body: `Category: ${menuType}`,
                thumbnailUrl: THUMB,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: fkontak })

    if (MENU_SOUND) await sendMenuSound(conn, m)

  } catch (e) {
    console.error(e)
    m.reply('Menu error: ' + e.message)
  }
}

handler.command = /^(menu)$/i
handler.tags = ['main']
handler.help = ['menu']

export default handler

async function sendMenuSound(conn, m) {
  try {
    await conn.sendFile(m.chat, MENU_SOUND, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true })
  } catch (e) {
    console.error(e)
  }
}
