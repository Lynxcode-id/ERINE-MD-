// Fitur : Search Tiktok + button 

let handler = async (m, { text, conn, usedPrefix, command }) => {
  try {
    await m.react('✨')

    if (!text) {
      return m.reply(`Contoh:\n${usedPrefix + command} ryo yamada edit`)
    }

    let search = await (
      await fetch(`https://www.tikwm.com/api/feed/search?keywords=${encodeURIComponent(text)}&count=10&cursor=0&web=1`)
    ).json()

    let videos = search?.data?.videos
    if (!videos?.length) return m.reply(`❌ Tidak ditemukan "${text}"`)

    let pick = videos[Math.floor(Math.random() * videos.length)]

    let res = await (
      await fetch(`https://www.tikwm.com/api/?url=https://www.tiktok.com/@${pick.author.unique_id}/video/${pick.video_id}&hd=1`)
    ).json()

    let data = res.data

    let caption = `🎌 *TIKTOK SEARCH*

> *Query*: ${text}
> *Judul*: ${data.title || '-'}
> *Uploader*: ${data.author.nickname || data.author.unique_id}
> *Durasi*: ${formatDuration(data.duration)}
> *Views*: ${formatNumber(data.play_count)}`

    await conn.sendMessage(
      m.chat,
      {
        video: { url: data.play },
        caption,
        footer: 'Elaina - MD',
        buttons: [
          {
            buttonId: `${usedPrefix + command} ${text}`,
            buttonText: { displayText: '✨ Cari Lagi' },
            type: 1
          }
        ],
        headerType: 4
      },
      { quoted: m }
    )

  } catch (e) {
    console.error(e)
    m.reply('❌ Terjadi kesalahan.')
  }
}

handler.help = ['ttsearch2', 'tiktoksearch2']
handler.tags = ['search']
handler.command = /^(ttsearch2|tiktoksearch2)$/i
handler.limit = true

export default handler

function formatNumber(num = 0) {
  return num.toLocaleString()
}

function formatDuration(sec = 0) {
  const m = Math.floor(sec / 60).toString().padStart(2, '0')
  const s = Math.floor(sec % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}