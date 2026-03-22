let handler = async (m, { conn }) => {
  try {
    const teks = `*OFFICIAL GROUP BOT*

Join grup resmi untuk info, update, dan support bot

*Link Group:*
${global.sgc || 'Belum diatur'}`

    const buttonMessage = {
      text: teks,
      footer: 'Pilih tombol di bawah',
      buttons: [
        { buttonId: '.linkgc', buttonText: { displayText: 'Link Group' }, type: 1 },
        { buttonId: '.mediafire https://www.mediafire.com/file/zl3jlujto8wmp38/ERINE-MD.zip/file', buttonText: { displayText: 'Unduh SC Erine MD - Lynx V10' }, type: 1 },
        { buttonId: '.owner', buttonText: { displayText: 'Developer' }, type: 1 }
      ],
      headerType: 1
    }

    await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
  } catch (error) {
    console.error('Kesalahan saat mengirim pesan tombol:', error)
    m.reply('Terjadi kesalahan. Silakan coba lagi.')
  }
}

handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

export default handler