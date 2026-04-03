import { stopJadibot, isActive } from '../lib/jadibot.js'

function format(ms) {
    let s = Math.floor(ms / 1000)
    let m = Math.floor(s / 60)
    let h = Math.floor(m / 60)

    if (h) return `${h}h ${m % 60}m ${s % 60}s`
    if (m) return `${m}m ${s % 60}s`
    return `${s}s`
}

let handler = async (m, { conn, usedPrefix }) => {
    const userJid = m.sender
    const id = userJid.replace(/@.+/, '')

    const sessions = global.jadibotSessionjadibots || new Map()

    if (!isActive(userJid)) {
        return m.reply(
            `❌ Tidak ada jadibot aktif\n\n` +
            `Ketik *${usedPrefix}jadibot* untuk mulai`
        )
    }

    const sessionjadibot = sessionjadibots.get(id)
    const uptime = session?.startedAt
        ? format(Date.now() - sessionjadibot.startedAt)
        : '-'

    await m.react?.('🕕')

    try {
        await stopJadibot(userJid)

        await m.react?.('✅')

        await conn.sendMessage(m.chat, {
            text:
                `🛑 Jadibot dihentikan\n\n` +
                `📱 Nomor: @${id}\n` +
                `⏱️ Uptime: ${uptime}`,
            mentions: [userJid]
        }, { quoted: m })

    } catch (e) {
        await m.react?.('❌')
        m.reply('❌ ' + e)
    }
}

handler.help = ['stopjadibot']
handler.tags = ['premium']
handler.command = ['stopjadibot', 'stopjbot']
handler.premium = true

export default handler