import fetch from "node-fetch"

let handler = async (m, { conn, args }) => {
  await m.react('🕕')

  const url = args[0]
  if (!url) {
    return conn.reply(m.chat, `Contoh: .ytmp3 https://youtube.com/watch?v=xxx`, m)
  }

  if (!/^https?:\/\/(www\.)?(youtube\.com|youtu\.be)\//.test(url)) {
    return conn.reply(m.chat, '❌ URL harus YouTube', m)
  }

  try {
    // pakai parameter quality 128kbps
    const res = await fetch(`https://api.nexray.web.id/downloader/ytmp3?url=${encodeURIComponent(url)}&quality=128`)
    const json = await res.json()

    const result = json.result
    if (!result?.url) throw new Error("Link tidak ditemukan")

    await conn.sendMessage(m.chat, {
      audio: { url: result.url },
      mimetype: 'audio/mpeg',
      fileName: (result?.title || 'audio') + '_128kbps.mp3',
      ptt: false
    }, { quoted: m })

    await m.react('✅')

  } catch (err) {
    console.error('[YTMP3]', err)
    await m.react('❌')
    conn.reply(m.chat, '❌ Gagal mengunduh audio.', m)
  }
}

handler.help = ['ytmp3 <url>', 'ytaudio <url>']
handler.tags = ['downloader']
handler.command = /^(ytmp3|youtubemp3|ytaudio)$/i
handler.limit = true

export default handler