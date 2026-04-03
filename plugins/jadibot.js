import { startJadibot, isActive } from '../lib/jadibot.js'

let handler = async (m, { conn, usedPrefix, text }) => {
    const userJid = m.sender

    if (isActive(userJid)) {
        return m.reply(
            `⚠️ Jadibot sudah aktif!\n\n` +
            `Ketik *${usedPrefix}stopjadibot* untuk menghentikan`
        )
    }

    await m.reply('⏳ Memproses jadibot...')

    try {
        const number = text.replace(/[^0-9]/g, '') || userJid.replace(/@.+/, '')
        const jid = number + '@s.whatsapp.net'

        await startJadibot(conn, m, jid)

    } catch (e) {
        m.reply('❌ ' + e)
    }
}

handler.help = ['jadibot']
handler.tags = ['premium']
handler.command = ['jadibot', 'jbot']
handler.premium = true

export default handler