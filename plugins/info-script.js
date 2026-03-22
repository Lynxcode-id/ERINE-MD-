let handler = async (m, { conn }) => {
  await conn.sendMessage(m.chat, {
    image: { url: 'https://c.termai.cc/i140/snh8Knp.jpg' },
    caption:
      '🐣 *ᴇ ʀ ɪ ɴ ᴇ - ᴍ ᴅ* 🐣\n\n' +
      'Open Source Project\n' +
      'Join Channel for Updates\n' +
      '⭐ Star the Repo\n\n',
      
    interactiveButtons: [
      {
        name: 'cta_url',
        buttonParamsJson: JSON.stringify({
          display_text: '🔥 ᴍʏ ᴛᴇʟᴇɢʀᴀᴍ',
          url: 't.me/lynxmanuelz4',
          merchant_url: 't.me/lynxmanuelz4'
        })
      },
      {
        name: 'cta_url',
        buttonParamsJson: JSON.stringify({
          display_text: '🐣 INFO UPDATE BOT',
          url: 'https://whatsapp.com/channel/0029Vb1CcDWDp2Q5YT4FZn1k',
          merchant_url: 'https://whatsapp.com/channel/0029Vb1CcDWDp2Q5YT4FZn1k'
        })
      }
    ],
    hasMediaAttachment: true
  })
}

handler.help = ['script', 'sc']
handler.tags = ['info']
handler.command = /^(script|sc)$/i
handler.limit = false

export default handler