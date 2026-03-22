/**
 * Fitur  : Anya Brat Sticker 
 * API    : https://api-faa.my.id
 * Author : lynx
 */

import axios from 'axios'
import { Sticker } from 'wa-sticker-formatter'

let handler = async (m, { conn, text }) => {
  if (!text) return m.reply('❌ Masukkan teks.\nContoh: .anyabrat halo lynx')

  try {
    const url = 'https://api-faa.my.id/faa/anyabrat-vid?text=' + encodeURIComponent(text)

    const res = await axios.get(url, {
      responseType: 'arraybuffer'
    })

    const sticker = new Sticker(res.data, {
      pack: 'Sticker',
      author: 'ᴇʀɪɴᴇ-ᴍᴅ',
      type: 'full',
      quality: 100
    })

    await conn.sendMessage(
      m.chat,
      { sticker: await sticker.toBuffer() },
      { quoted: m }
    )

  } catch (e) {
    console.error(e)
    m.reply('❌ Gagal membuat stiker.')
  }
}

handler.help = ['anyabrat <teks>']
handler.tags = ['sticker']
handler.command = /^anyabrat$/i
handler.limit = true

export default handler