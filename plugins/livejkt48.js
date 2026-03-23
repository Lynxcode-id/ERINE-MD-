import axios from "axios";
import nodemailer from "nodemailer";
import { GROUP_IDS, CHANNEL_IDS } from "../config.js";

const debugLog = (message, data = null, isError = false) => {
    if (isError || message.includes('activated') || message.includes('deactivated')) {
        console.log(`[${isError ? 'ERROR' : 'INFO'}] ${message}`);
        if (data && isError) console.error(data);
    }
};

let isCheckingLive = false;
let checkInterval;
const sentEvents = new Set();
const EMAIL_COOLDOWN = 300000;
const lastEmailSent = new Map();
let lastErrorTime = 0;
const ERROR_COOLDOWN = 60000;

// 🔥 Gabungan ID dari config
const CHAT_IDS = [...GROUP_IDS, ...CHANNEL_IDS];

const getStreamingUrl = (live) => {
    try {
        const { type, streaming_url_list } = live;

        if (!streaming_url_list?.length) return null;

        if (type === 'showroom') {
            return streaming_url_list.sort((a, b) => (b.quality || 0) - (a.quality || 0))[0].url;
        }

        return streaming_url_list[0].url;
    } catch (error) {
        const now = Date.now();
        if (now - lastErrorTime > ERROR_COOLDOWN) {
            debugLog('Error getStreamingUrl:', error, true);
            lastErrorTime = now;
        }
        return null;
    }
};

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "jkt48connect@gmail.com",
        pass: "yffkdsunrxpoigvb",
    }
});

const sendEmailNotification = async (eventName, type, url) => {
    const now = Date.now();
    const lastSent = lastEmailSent.get(eventName) || 0;
    if (now - lastSent < EMAIL_COOLDOWN) return;

    try {
        await transporter.sendMail({
            from: "jkt48connect@gmail.com",
            to: "omahjamuku89@gmail.com",
            subject: `Live: ${eventName}`,
            text: `${eventName} live di ${type}\n${url}`
        });

        lastEmailSent.set(eventName, now);
    } catch (err) {
        debugLog("Email error:", err, true);
    }
};

const getFormattedDateTimeWIB = (dateString) => {
    const date = new Date(dateString);
    const utc = date.getTime() + date.getTimezoneOffset() * 60000;
    const wib = new Date(utc + 7 * 3600000);

    return {
        date: wib.toLocaleDateString("id-ID"),
        time: wib.toLocaleTimeString("id-ID") + " WIB"
    };
};

const formatMessage = (live, time) => {
    const platform = live.type === "showroom" ? "SHOWROOM" : "IDN Live";

    return `🎉 *${live.name}* Live di ${platform}!\n\n` +
           `🗓️ ${time.date}\n` +
           `🕒 ${time.time}\n\n` +
           `🔗 `;
};

const checkAndSendMessage = async (conn) => {
    if (!isCheckingLive) return;

    try {
        const { data } = await axios.get("https://api.crstlnz.my.id/api/now_live?group=jkt48");

        const currentLive = new Set();

        for (const live of data || []) {
            if (!live.name || !live.started_at) continue;

            currentLive.add(live.name);
            if (sentEvents.has(live.name)) continue;

            const url = getStreamingUrl(live);
            if (!url) continue;

            const time = getFormattedDateTimeWIB(live.started_at);
            const text = formatMessage(live, time) + url;

            const message = {
                text,
                contextInfo: {
                    externalAdReply: {
                        title: `${live.name} Live`,
                        body: "Jangan lewatkan!",
                        thumbnailUrl: live.img,
                        mediaUrl: url,
                        sourceUrl: url
                    }
                }
            };

            for (const id of CHAT_IDS) {
                await conn.sendMessage(id, message).catch(() => {});
            }

            sentEvents.add(live.name);
            await sendEmailNotification(live.name, live.type, url);
        }

        for (const name of sentEvents) {
            if (!currentLive.has(name)) sentEvents.delete(name);
        }

    } catch (err) {
        debugLog("API error:", err, true);
    }
};

const handler = async (m, { conn, command, isOwner }) => {
    if (!isOwner) return m.reply("Khusus owner.");

    if (command === "startlive") {
        if (isCheckingLive) return m.reply("Sudah aktif.");

        isCheckingLive = true;
        checkInterval = setInterval(() => checkAndSendMessage(conn), 30000);

        debugLog("Live check activated");
        return m.reply("Live checker aktif ✅");
    }

    if (command === "stoplive") {
        if (!isCheckingLive) return m.reply("Belum aktif.");

        isCheckingLive = false;
        clearInterval(checkInterval);

        debugLog("Live check deactivated");
        return m.reply("Live checker dimatikan ❌");
    }
};

handler.command = /^(startlive|stoplive)$/i;
handler.help = ["startlive", "stoplive"];
handler.tags = ["jkt48"];

export default handler;