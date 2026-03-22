import axios from 'axios'
import { sticker } from '../lib/sticker.js'
import { StickerTypes } from 'wa-sticker-formatter'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  await m.react('✨')

  if (!text) {
    return conn.reply(
      m.chat,
      `*Example :* ${usedPrefix + command} Erine`,
      m
    )
  }

  try {
    const { data } = await axios.get(
      `${global.APIs.faa}/faa/stickerly?q=${encodeURIComponent(text)}`
    )

    const results = data?.results?.slice(0, 5)
    if (!results?.length) return

    for (const i of results) {
      try {
        let img = await axios.get(i.url, { responseType: 'arraybuffer' })
        let buffer = Buffer.from(img.data)

        const stiker = await sticker(
          buffer,
          false,
          i.title || 'ᴇʀɪɴᴇ-ᴍᴅ',
          i.creator || 'ʟʏɴx ᴅᴇᴄᴏᴅᴇ',
          { type: StickerTypes.FULL, animated: true }
        )

        if (stiker) {
          await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, { asSticker: true })
        }
      } catch {}
    }
  } catch {}
}

handler.help = ['tenor']
handler.tags = ['sticker']
handler.command = /^tenor$/i
handler.limit = true

export default handler