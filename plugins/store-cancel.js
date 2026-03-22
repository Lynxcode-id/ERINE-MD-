import moment from 'moment-timezone'

function ucapan() {
  const jam = moment().tz('Asia/Makassar').hour()
  if (jam >= 4 && jam < 10) return "Selamat pagi"
  if (jam >= 10 && jam < 15) return "Selamat siang"
  if (jam >= 15 && jam < 18) return "Selamat sore"
  return "Selamat malam"
}

let handler = async (m, { text, conn }) => {
  if (!text || !text.includes(',')) {
    return m.reply('❗ Format salah!\nContoh: .cancel WDP,stok habis')
  }

  const [barang, alasan] = text.split(',').map(v => v.trim())

  if (!barang || !alasan) {
    return m.reply('❗ Format tidak lengkap!\nContoh: .cancel barang,alasan')
  }

  const waktu = moment().tz('Asia/Makassar')
  const tampilTanggal = waktu.format('dddd, DD MMMM YYYY')
  const tampilWaktu = waktu.format('HH:mm:ss')

  const caption = `
${ucapan()} 👋

*—·· Pesanan Dibatalkan ··—*

• *Layanan:* ${barang}
• *Alasan:* ${alasan}
• *Tanggal:* ${tampilTanggal}
• *Waktu:* ${tampilWaktu} WIB

Mohon maaf atas ketidaknyamanannya 🙏  
Silakan order kembali di lain waktu ya.
`.trim()

  await conn.sendMessage(m.chat, { text: caption }, { quoted: m })
}

handler.help = ['cancel <barang,alasan>']
handler.tags = ['store']
handler.command = /^cancel$/i
handler.owner = true

export default handler