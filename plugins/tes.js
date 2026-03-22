let handler = async (m, { conn }) => {
  let rine = `
*「 🐣 Halo nyariin erine? 」*

Yasudah, kalau kamu *beneran* butuh, ketik aja *.menu* ✨  
Tapi spam yah ntar owner bot narik erine keluar dari gc kalian... 🙄
`

  await conn.sendMessage(
    m.chat,
    {
      text: rine,
      contextInfo: global.adReply.contextInfo
    },
    {
      quoted: global.fstatus
    }
  )
}

handler.customPrefix = /^(tes|bot|rine|test)$/i
handler.command = new RegExp

export default handler