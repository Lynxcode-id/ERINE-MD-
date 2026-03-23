/*

FITUR : TOURL PAKET LENGKAP ANJAY
KANG KONVERT : LYNX
SALURAN : https://whatsapp.com/channel/0029Vb1CcDWDp2Q5YT4FZn1k

Jangan di hapus yeh walaupun saya bukan pembuat fiturnya tpi hargai saya yang mengubah fitur case ini menjadi esm dengan cara manual 🗿😭
*/

import fs from 'fs'
import axios from 'axios'
import FormData from 'form-data'
import { fileTypeFromBuffer } from 'file-type'

let handler = async (m, { conn, quoted }) => {
  const q = quoted || m.quoted
  if (!q) return m.reply('Reply media yang mau diupload, cuy.')
  
  // 1. INJEKSI GLOBAL (Agar simple.js tidak crash)
  if (typeof global.FileType === 'undefined') {
    global.FileType = { fromBuffer: fileTypeFromBuffer }
  }

  // Validasi tipe media
  if (!/image|video|audio|sticker|document/.test(q.mtype || q.msg?.mimetype)) 
    return m.reply('Media tidak didukung.')

  await m.reply('Sabar ya, lagi di-upload ke banyak server...')

  let mediaPath = ''
  try {
    const buffer = await q.download()
    const { ext, mime } = await conn.getFile(buffer)
    const fileName = `${Date.now()}.${ext}`
    mediaPath = `./tmp/${fileName}`
    
    if (!fs.existsSync('./tmp')) fs.mkdirSync('./tmp')
    fs.writeFileSync(mediaPath, buffer)

    const termaiKey = 'AIzaBj7z2z3xBjsk' 
    const termaiDomain = 'https://c.termai.cc'

    // ========= UPLOAD FUNCTIONS ========= //
    const uploadTermai = async (buf) => {
        try {
            const form = new FormData()
            form.append('file', buf, { filename: fileName, contentType: mime })
            const res = await axios.post(`${termaiDomain}/api/upload?key=${termaiKey}`, form, { headers: form.getHeaders() })
            return res.data?.path || null
        } catch { return null }
    }

    const uploadCatbox = async (buf) => {
        try {
            const form = new FormData()
            form.append('fileToUpload', buf, { filename: fileName, contentType: mime })
            form.append('reqtype', 'fileupload')
            const res = await axios.post('https://catbox.moe/user/api.php', form, { headers: form.getHeaders() })
            return res.data || null
        } catch { return null }
    }

    const uploadQuax = async (p) => {
        try {
            const form = new FormData()
            form.append('files[]', fs.createReadStream(p))
            const res = await axios.post('https://qu.ax/upload.php', form, { headers: form.getHeaders() })
            return res.data?.files?.[0]?.url || null
        } catch { return null }
    }

    const uploadYpnk = async (buf) => {
        try {
            const form = new FormData()
            form.append('files', buf, { filename: fileName, contentType: mime })
            const res = await axios.post('https://cdn.ypnk.biz.id/upload', form, { 
                headers: { ...form.getHeaders(), 'User-Agent': 'Mozilla/5.0' } 
            })
            return res.data?.files?.[0] ? `https://cdn.ypnk.biz.id${res.data.files[0].url}` : null
        } catch { return null }
    }

    // ========= EXECUTION ========= //
    const results = await Promise.allSettled([
      uploadQuax(mediaPath),
      uploadCatbox(buffer),
      uploadYpnk(buffer),
      uploadTermai(buffer)
    ])

    const [quax, catbox, ypnk, termai] = results.map(v => v.status === 'fulfilled' ? v.value : null)
    if (!quax && !catbox && !ypnk && !termai) throw 'Semua uploader gagal!'

    const ok = (v) => v ? v : '❌ Gagal'

    const caption = `╭─ 「 **UPLOAD SUCCESS** 」
🌍 **Qu.ax:** ${ok(quax)}
🌍 **Catbox:** ${ok(catbox)}
🌍 **YPNK:** ${ok(ypnk)}
🌍 **Termai:** ${ok(termai)}
╰───────────────`

    // 2. KIRIM RESPON (Gunakan format adReply yang kamu minta)
    await conn.sendMessage(m.chat, { 
        text: caption,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: false,
            forwardedNewsletterMessageInfo: {
                newsletterName: `「 🐣 ᴇʀɪɴᴇ-ᴍᴅ ɪɴғᴏʀᴍᴀᴛɪᴏɴ 🐣 」`,
                newsletterJid: "120363400411310874@newsletter"
            },
            externalAdReply: {
                title: `ᴇʀɪɴᴇ ᴘʀᴏᴊᴇᴄᴛ - ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ`,
                body: `Selesai Mengupload Media!`, // Mengganti momentGreeting agar tidak error variabel
                previewType: "PHOTO",
                thumbnailUrl: 'https://c.termai.cc/i174/WqP0sWo.jpg',
                sourceUrl: quax || catbox || '',
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })

  } catch (err) {
    console.error(err)
    m.reply(`❌ **Error:** ${err.message || err}`)
  } finally {
    if (mediaPath && fs.existsSync(mediaPath)) fs.unlinkSync(mediaPath)
  }
}

handler.help = ['tourl2']
handler.tags = ['tools']
handler.command = /^tourl2$/i

export default handler
