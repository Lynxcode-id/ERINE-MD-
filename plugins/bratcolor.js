/**
 * Feature : Brat Color 
 * Type.   :  Plugin ESM 
 * API    : https://brat.siputzx.my.id
 * source : https://whatsapp.com/channel/0029VbAYjQgKrWQulDTYcg2K
 * Author : lynx 
 **/

import axios from 'axios'
import { Sticker, StickerTypes } from 'wa-sticker-formatter'

const colorMap = {
  putih: '#ffffff',
  hitam: '#000000',
  merah: '#ff0000',
  hijau: '#00ff00',
  biru: '#0000ff',
  kuning: '#ffff00',
  ungu: '#800080',
  pink: '#ff69b4',
  abu: '#808080',
  orange: '#ffa500'
}

let hilman = async (m, { conn, text }) => {
  if (!text) {
    let warnaList = Object.keys(colorMap).map(v => `- ${v}`).join('\n')
    return m.reply(`⚠️ Contoh penggunaan:\n.bratcolor halo lynx | merah | biru\n\n🎨 List warna yg bisa dipakai:\n${warnaList}`)
  }

  let [teks, background, color] = text.split('|').map(v => v.trim())
  if (!teks) return m.reply('⚠️ Masukkan teks!')

  background = colorMap[background?.toLowerCase()] || background || '#ffffff'
  color = colorMap[color?.toLowerCase()] || color || '#000000'

  try {
    let url = `https://brat.siputzx.my.id/image?text=${encodeURIComponent(teks)}&background=${encodeURIComponent(background)}&color=${encodeURIComponent(color)}&emojiStyle=apple`

    let { data } = await axios.get(url, { responseType: 'arraybuffer' })
    let stiker = new Sticker(data, {
      pack: 'ᴇʀɪɴᴇ-ᴍᴅ',
      author: 'ʙʏ ʟʏɴx ᴅᴇᴄᴏᴅᴇ',
      type: StickerTypes.FULL,
      quality: 80
    })

    await conn.sendFile(m.chat, await stiker.build(), 'brat.webp', '', m)
  } catch (e) {
    console.error(e)
    m.reply('❌ Gagal generate brat color!')
  }
}

hilman.help = ['bratcolor <teks | background | color>']
hilman.tags = ['sticker', 'tools']
hilman.command = /^bratcolor$/i
hilman.limit = true

export default hilman