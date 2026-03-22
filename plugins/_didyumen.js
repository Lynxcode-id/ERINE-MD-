import didyoumean from 'didyoumean'
import similarity from 'similarity'
import fetch from 'node-fetch'

let handler = m => m

handler.before = async function (m, { match, usedPrefix }) {
  if (!m.text) return
  if ((usedPrefix = (match[0] || '')[0])) {
    let noPrefix = m.text.slice(1).trim()
    if (!noPrefix) return

    let alias = Object.values(global.plugins)
      .filter(v => v.help && !v.disabled)
      .flatMap(v => v.help)

    if (!alias.length) return

    let mean = didyoumean(noPrefix, alias)
    if (!mean) return

    let sim = similarity(noPrefix.toLowerCase(), mean.toLowerCase())
    let similarityPercentage = Math.round(sim * 100)

    if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {

      // Ambil gambar thumbnail baru
      let thumb = await fetch("https://c.termai.cc/i170/9Mu0.jpg")
      let thumbnail = Buffer.from(await thumb.arrayBuffer())

      let text = `❓ *Sepertinya kamu nyari command ini?*\n\n` +
                 `✨ commandnya - cmd : *${usedPrefix + mean}*\n` +
                 `📊 akurasi kemiripan : *${similarityPercentage}%*`

      await this.sendMessage(m.chat, {
        text,
        footer: '🍭 ᴇ ʀ ɪ ɴ ᴇ - ᴍ ᴅ',
        headerType: 1,
        contextInfo: {
          externalAdReply: {
            title: "ᴇʀɪɴᴇ ᴘʀᴏᴊᴇᴄᴛ - ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ",
            body: "✨ ᴇʀɪɴᴇ-ᴍᴅ ᴀᴜᴛᴏ ᴄᴏʀʀᴇᴄᴛ ᴄᴏᴍᴍᴀɴᴅ",
            mediaType: 1,
            renderLargerThumbnail: false,
            thumbnail, // Foto baru
            // sourceUrl: ""
          }
        }
      }, { quoted: m })
    }
  }
}

export default handler