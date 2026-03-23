import axios from 'axios'
import FormData from 'form-data'
import fs from 'fs'
import { join } from 'path'

let handler = async (m, { conn, usedPrefix, command }) => {
    // 1. Validasi Input (Cek reply/kirim gambar)
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    
    if (!/image\/(jpe?g|png)/.test(mime)) {
        return m.reply(`📸 *• [ ɪɴꜰᴏ ]* Kirim atau reply gambar dengan caption *${usedPrefix + command}* untuk meningkatkan kualitas.`)
    }

    // 2. Reaction Awal
    await conn.sendMessage(m.chat, { react: { text: '🔥', key: m.key } })

    // Tentukan path temporary
    let mediaPath = join(process.cwd(), `./temp/${Date.now()}.${mime.split('/')[1]}`)

    try {
        // 3. Download & Simpan Media ke Local (Temp)
        let imgBuffer = await q.download()
        await fs.promises.writeFile(mediaPath, imgBuffer)

        // 4. Upload ke Catbox (Hosting Gambar)
        let form = new FormData()
        form.append('reqtype', 'fileupload')
        form.append('fileToUpload', fs.createReadStream(mediaPath))

        let upload = await axios.post('https://catbox.moe/user/api.php', form, {
            headers: form.getHeaders()
        })

        let fileUrl = upload.data
        if (typeof fileUrl !== 'string' || !fileUrl.includes("https://")) {
            if (fs.existsSync(mediaPath)) fs.unlinkSync(mediaPath)
            return m.reply("❌ *Upload gambar gagal!* Silakan coba lagi nanti.")
        }

        // 5. Eksekusi API Upscale (Resolusi 16x)
        let apiUrl = `https://api.nexray.web.id/tools/upscale?url=${encodeURIComponent(fileUrl)}&resolusi=16`

        let res = await axios.get(apiUrl, {
            responseType: "arraybuffer"
        })

        // 6. Kirim Hasil UHD
        await conn.sendMessage(
            m.chat,
            {
                image: Buffer.from(res.data),
                caption: `✅ *ᴜʜᴅ ʙᴇʀʜᴀsɪʟ!*\nʀᴇsᴏʟᴜsɪ ɢᴀᴍʙᴀʀ ᴍᴇɴɪɴɢᴋᴀᴛ 16x ʟᴇʙɪʜ ᴊᴇʀɴɪʜ.`
            },
            { quoted: m }
        )

        // 7. Bersihkan file sampah di folder temp
        if (fs.existsSync(mediaPath)) fs.unlinkSync(mediaPath)

    } catch (err) {
        console.error(err)
        // Hapus file jika terjadi error di tengah jalan
        if (fs.existsSync(mediaPath)) fs.unlinkSync(mediaPath)
        m.reply('❌ *Terjadi kesalahan saat memproses gambar UHD!*')
    }
}

handler.help = ['uhd']
handler.tags = ['tools']
handler.command = /^uhd$/i
handler.limit = true // Fitur berat, disarankan pakai limit

export default handler