/**
 * YouTube play 
 * -----------------------------
 * Type   : Plugins ESM
 * creator : Hilman
 * Channel : https://whatsapp.com/channel/0029VbAYjQgKrWQulDTYcg2K
 * API : https://api.nexray.web.id
 */
import axios from 'axios'
import yts from 'yt-search'

function formatNumber(num) {
  return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

async function getFileSizeMB(url) {
  try {
    const res = await axios.head(url)
    const bytes = parseInt(res.headers['content-length'] || 0)
    return bytes / (1024 * 1024)
  } catch {
    return 0
  }
}

let handler = async (m, { conn, text, usedPrefix, command }) => {

  if (!text) throw `Contoh:\n${usedPrefix + command} swim chase atlantic`

  await m.react('⚡')

  try {

    const search = await yts(text)
    const v = search.videos[0]
    if (!v) throw 'Lagu tidak ditemukan'

    let caption = `
✦━━━━━「 YouTube Play 」━━━━━✦
🎧 Title   : ${v.title}
🎤 Channel : ${v.author.name}

💿 Duration: ${v.timestamp}
👁️ Views   : ${formatNumber(v.views)}
📅 Upload  : ${v.ago}
✦━━━━━━━━━━━━━━━━━━━━✦
`.trim()

    await conn.sendMessage(m.chat,{
      text: caption,
      contextInfo:{
        externalAdReply:{
          title: v.title,
          body: v.author.name,
          thumbnailUrl: v.thumbnail,
          sourceUrl: v.url,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    },{ quoted:m })

    const api = `https://api.nexray.web.id/downloader/ytmp3?url=${encodeURIComponent(v.url)}`
    const { data } = await axios.get(api)

    if (!data.status) throw 'Audio tidak ditemukan'

    const audio = data.result.url
    const sizeMB = await getFileSizeMB(audio)

    if (sizeMB > 50) {

      await conn.sendMessage(m.chat,{
        document: { url: audio },
        mimetype: 'audio/mpeg',
        fileName: data.result.title + '.mp3'
      },{ quoted:m })

    } else {

      await conn.sendMessage(m.chat,{
        audio: { url: audio },
        mimetype: 'audio/mpeg',
        fileName: data.result.title + '.mp3'
      },{ quoted:m })

    }

    await m.react('✅')

  } catch(e) {
    console.error(e)
    await m.react('❌')
    m.reply('❌ Gagal mengambil audio')
  }
}

handler.help = ['play']
handler.tags = ['downloader']
handler.command = /^play$/i
handler.limit = true

export default handler