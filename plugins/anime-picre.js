// Image Picre random
// API : https://rynekoo-api.hf.space/
// Author : lynx 

let handler = async (m, { conn }) => {
  try {

    await m.react('✨')

    const res = await fetch('https://rynekoo-api.hf.space/random/pic-re')

    if (!res.ok) throw new Error('Fetch gagal')

    const buffer = Buffer.from(await res.arrayBuffer())

    await conn.sendMessage(m.chat, {
      image: buffer,
      caption: '_Nih hehe_',
      footer: 'ᴇʀɪɴᴇ-ᴍᴅ',
      buttons: [
        {
          buttonId: '.picre',
          buttonText: { displayText: '🔁 Lagi' },
          type: 1
        }
      ],
      headerType: 4
    }, { quoted: m })

  } catch (e) {
    console.error(e)
    await m.react('❌')
    m.reply('❌ Error mengambil gambar.')
  }
}

handler.help = ['picre']
handler.tags = ['anime']
handler.command = /^picre$/i
handler.limit = true
handler.group = false

export default handler