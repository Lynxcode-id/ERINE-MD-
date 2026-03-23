import axios from 'axios'
import FormData from 'form-data'

let handler = async (m, { conn, usedPrefix, command }) => {
    // 1. Validasi Input (Cek apakah ada gambar yang di-reply atau dikirim)
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    
    if (!/image\/(jpe?g|png)/.test(mime)) {
        return m.reply(`*• [ ɪɴꜰᴏ ]* Kirim atau reply gambar dengan caption *${usedPrefix + command}* untuk menghapus background.`)
    }

    // 2. Reaction Awal
    await conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })

    try {
        // 3. Download Gambar
        let imgBuffer = await q.download()
        
        // 4. Upload ke Tmpfiles (Sebagai hosting sementara)
        const form = new FormData()
        form.append("file", imgBuffer, {
            filename: "removebg.jpg",
            contentType: mime
        })

        let upload = await axios.post("https://tmpfiles.org/api/v1/upload", form, {
            headers: form.getHeaders()
        })

        // Ubah URL agar bisa diakses langsung (direct link)
        let fileUrl = upload.data.data.url.replace("tmpfiles.org/", "tmpfiles.org/dl/")

        // 5. Eksekusi API Remove Background
        let apiUrl = `https://api.nexray.web.id/tools/removebg?url=${encodeURIComponent(fileUrl)}`
        
        // Ambil hasil dalam bentuk buffer (arraybuffer)
        let response = await axios.get(apiUrl, { responseType: "arraybuffer" })

        // 6. Kirim Hasil
        await conn.sendMessage(
            m.chat,
            {
                image: Buffer.from(response.data),
                caption: "✨ *ʙᴀᴄᴋɢʀᴏᴜɴᴅ ʙᴇʀʜᴀsɪʟ ᴅɪʜᴀᴘᴜs!*"
            },
            { quoted: m }
        )

        // 7. Reaction Berhasil
        await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } })

    } catch (err) {
        console.error(err)
        // 8. Reaction Gagal
        await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } })
        m.reply("⚠️ *Terjadi kesalahan:* Gagal memproses gambar. Pastikan API sedang aktif atau coba gambar lain.")
    }
}

handler.help = ['removebg', 'nobg']
handler.tags = ['tools']
handler.command = /^(removebg|nobg|hapusbackground)$/i
handler.limit = true // Menggunakan limit agar lebih balance

export default handler
