import moment from 'moment-timezone'

let handler = async (m, { conn }) => {

  let who = m.mentionedJid?.[0] || m.quoted?.sender || m.sender
  let user = global.db.data.users[who]
  if (!user) return m.reply('Yahh datanya gak ketemu 🥺')

  const botNumber = conn.decodeJid(conn.user.id)
  const ownerList = (global.owner || []).map(v =>
    (Array.isArray(v) ? v[0] : v).replace(/[^0-9]/g, '') + '@s.whatsapp.net'
  )

  const isOwner = m.fromMe || ownerList.includes(who) || who === botNumber
  const isPrems = isOwner || (user.premiumTime && new Date() - user.premiumTime < 0)

  let name = user.registered ? user.name : await conn.getName(who)

  user.atm = user.atm || 0
  user.bank = user.bank || 0
  user.fullatm = user.fullatm || 1000
  user.money = user.money || 0
  user.chip = user.chip || 0
  user.robo = user.robo || 0

  let week = moment().tz('Asia/Makassar').format('dddd')
  let date = moment().tz('Asia/Makassar').format('DD MMMM YYYY')
  let time = moment().tz('Asia/Makassar').format('HH:mm:ss')

  let status = isOwner ? '👑 OWNER'
    : isPrems ? '💎 PREMIUM'
    : '🌱 FREE USER'

  let caption = `
⏰ ${time}
(｡•̀ᴗ-)✧ *Konnichiwa~* 🌸

╭───〔 🏦 BANK STATUS 〕───
│ 👤 Nama   : ${name}
│ 💠 Status : ${status}
│ 📝 Reg    : ${user.registered ? '✔️ Sudah' : '❌ Belum'}
│
│ 💳 ATM    : ${user.atm > 0 ? 'Lv ' + toRupiah(user.atm) : '❌'}
│ 🏛️ Bank   : ${toRupiah(user.bank)} / ${toRupiah(user.fullatm)}
│ 💰 Money  : ${toRupiah(user.money)}
│ 🎰 Chip   : ${toRupiah(user.chip)}
│ ⚙️ Robo   : ${user.robo > 0 ? 'Lv ' + user.robo : '❌'}
╰────────────────────

📆 ${week}, ${date}
`.trim()

  const THUMB = 'https://files.catbox.moe/c67nx0.jpg'

  await conn.sendMessage(m.chat, {
    image: { url: THUMB },
    caption,
    mentions: [who]
  }, { quoted: m })
}

handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank)$/i
handler.register = true
handler.group = true
handler.rpg = true

export default handler

const toRupiah = number => parseInt(number || 0).toLocaleString().replace(/,/g, ".")