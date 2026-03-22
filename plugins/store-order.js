import moment from 'moment-timezone'

let handler = async (m, { text }) => {
  if (!text) return m.reply('❗ Contoh: .order nokos indo')

  if (!global.db.data.store) global.db.data.store = {}
  if (!global.db.data.store.orders) global.db.data.store.orders = []

  const waktu = moment().tz('Asia/Makassar').format('DD/MM/YYYY HH:mm:ss')

  global.db.data.store.orders.push({
    from: m.sender,
    barang: text,
    time: waktu
  })

  const caption = `
🛒 *ORDER DITERIMA*

• *Barang:* ${text}
• *Waktu:* ${waktu} WIB

Silakan tunggu admin memproses pesanan kamu 🙏
Ketik *.pay* untuk info pembayaran 💳
`.trim()

  m.reply(caption)
}

handler.help = ['order <barang>']
handler.tags = ['store']
handler.command = /^order$/i

export default handler