let handler = async (m, { conn }) => {
  let text = `
 *SUPPORT BOT ERINE-MD* 🤍

Jika bot ini bermanfaat untukmu,
kamu bisa memberikan dukungan lewat donasi ✨
agar fitur bot bertambah dan lebih bwrkembang lagi 🐣

https://saweria.co/LynxPreset
`

  await conn.sendMessage(m.chat, {
  image: { url: 'https://c.termai.cc/i184/00G.jpg' },
  caption: text
}, { quoted: m })
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^donasi$/i

export default handler