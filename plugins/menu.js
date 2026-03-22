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
const VIDEO_GIF = global.videothumb // Pastikan ini link video/mp4 di config.js

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
  return Array.isArray(global.hsquere)
    ? global.hsquere[Math.floor(Math.random() * global.hsquere.length)]
    : ''
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

    // Definisi fkontak agar tidak undefined
    const fkontak = { 
        key: { 
            participant: `0@s.whatsapp.net`, 
            ...(m.chat ? { remoteJid: `status@broadcast` } : {}) 
        }, 
        message: { 
            'contactMessage': { 
                'displayName': owner, 
                'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${owner},;;;\nFN:${owner}\nitem1.TEL;waid=${who.split('@')[0]}:${who.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 
                'jpegThumbnail': THUMB, 
                thumbnail: THUMB, 
                sendEphemeral: true
            }
        }
    }

    let limit = (isOwner || user.premiumTime >= 1) ? '∞ Unlimited' : user.limit
    let role = isOwner ? 'Owner' : (user.role || 'Newbie')
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

    // Logika Tampilan Menu
    let headerCaption = `
${toSmallCaps('Hai, aku')} *${toSmallCaps('ᴇʀɪɴᴇ-ᴍᴅ')}*,
${toSmallCaps('siap bantu kamu hari ini — pilih menu yang kamu butuhin ya.')}

${global.dashmenu} ${global.htjava}

${global.dmenut} *${toSmallCaps('BOT INFO')}*
${global.dmenub2} ${toSmallCaps('Bot')}     : ${toSmallCaps(botname)}
${global.dmenub2} ${toSmallCaps('Owner')}   : ${toSmallCaps(owner)}
${global.dmenub2} ${toSmallCaps('Version')} : ${version}
${global.dmenuf}

${global.dmenut} *${toSmallCaps('USER INFO')}*
${global.dmenub2} ${toSmallCaps('Limit')} : ${limit}
${global.dmenub2} ${toSmallCaps('Role')}  : ${toSmallCaps(role)}
${global.dmenub2} XP    : ${totalexp}
${global.dmenuf}
`.trim()

    if (!menuType || (!categories[menuType] && menuType !== 'all')) {
      // MENU UTAMA DENGAN GIF VIDEO
      await conn.sendMessage(m.chat, {
          video: { url: VIDEO_GIF },
          gifPlayback: true,
          caption: headerCaption,
          contextInfo: {
              forwardingScore: 999,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                  newsletterName: `「 🐣 ᴇʀɪɴᴇ-ᴍᴅ ɪɴғᴏʀᴍᴀᴛɪᴏɴ 🐣 」`,
                  newsletterJid: "120363400411310874@newsletter"
              },
              externalAdReply: {
                  title: botname,
                  body: owner,
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

    // MENU LIST (Kategori Spesifik / ALL)
    let menuText = []
    let targets = menuType === 'all' ? arrayMenu : [menuType]

    for (let tag of targets) {
      menuText.push(`${global.cmenut}${randomSquare()} ${toSmallCaps(formatTag(tag))} ${randomSquare()}${global.cmenuh}`)
      for (let item of categories[tag]) {
        for (let cmd of item.helps) {
          let flag = (item.premium ? ` ${global.lopr}` : '') + (item.limit ? ` ${global.lolm}` : '') + (item.owner ? ' Ⓞ' : '') + (item.admin ? ' Ⓐ' : '')
          let prefix = item.prefix ? usedPrefix : ''
          menuText.push(`${global.cmenub}${prefix}${toSmallCaps(cmd)}${flag}`)
        }
      }
      menuText.push(global.cmenuf)
    }

    await conn.sendMessage(m.chat, {
        video: { url: VIDEO_GIF },
        gifPlayback: true,
        caption: menuText.join('\n'),
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: `「 🐣 ᴇʀɪɴᴇ-ᴍᴅ ɪɴғᴏʀᴍᴀᴛɪᴏɴ 🐣 」`,
                newsletterJid: "120363400411310874@newsletter"
            },
            externalAdReply: {
                title: botname,
                body: owner,
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
