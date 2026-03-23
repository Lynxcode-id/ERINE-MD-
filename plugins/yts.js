import yts from "yt-search"
import {
import { generateWAMessageFromContent } from '@adiwajshing/baileys';
import { format } from 'util';

let handler = async (m, {
    conn,
    text
}) => {
    if (!text) throw "🔎 ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ɪɴɢɪɴᴋᴀɴ - ᴄᴀʀɪ ᴅɪ ʏᴏᴜᴛᴜʙᴇ ?"
    let results = await yts(text)
    let tes = results.all
    let teks = results.all.map(v => {
        switch (v.type) {
            case "video":
                return `
📹 *ᴛʏᴘᴇ:* ${v.type}
🆔 *ᴠɪᴅᴇᴏ ᴏʟᴅ:* ${v.videoId}
🔗 *ᴜʀʟ:* ${v.url}
📺 *ᴛɪᴛʟᴇ:* ${v.title}
📝 *ᴅᴇsᴄʀɪᴘᴛɪᴏɴ:* ${v.description}
🖼️ *ɪᴍᴀɢᴡ:* ${v.image}
🖼️ *ᴛʜᴜᴍʙɴᴀɪʟ:* ${v.thumbnail}
⏱️ *sᴇᴄᴏɴᴅs:* ${v.seconds}
⏰ *ᴛɪᴍᴇ sᴛᴀᴍᴘ:* ${v.timestamp}
⏲️ *ᴅᴜʀᴀᴛɪᴏɴ ᴛɪᴍᴇsᴛᴀᴍᴘ:* ${v.duration.timestamp}
⌛ *ᴅᴜʀᴀᴛɪᴏɴ sᴇᴄᴏɴᴅs:* ${v.duration.seconds}
⌚ *ᴀɢᴏ:* ${v.ago}
👀 *ᴠɪᴇᴡs:* ${formatNumber(v.views)}
👤 *ᴀᴜᴛʜᴏʀ ɴᴀᴍᴡ:* ${v.author.name}
🔗 *ᴀᴜᴛʜᴏʀ ᴜʀʟ:* ${v.author.url}

📥 ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ʙʏ ᴇʀɪɴᴇ ᴘʀᴏᴊᴇᴄᴛ | ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ
   `.trim()
            case "canal":
                return `
🔖 *${v.name}* (${v.url})
⚡ ${v.subCountLabel} (${v.subCount}) sᴜʙsᴄʀɪʙᴇ
📽️ ${v.videoCount} ᴠɪᴅᴇᴏ
`.trim()
        }
    }).filter(v => v).join("\n\n________________________\n\n")
    
        let ytthumb = await (await conn.getFile(tes[0].thumbnail)).data
        let msg = await generateWAMessageFromContent(m.chat, {
            extendedTextMessage: {
                text: teks,
                jpegThumbnail: ytthumb,
                contextInfo: {
                    mentionedJid: [m.sender],
                    
                }
            }
        }, {
            quoted: m
        })
        await conn.relayMessage(m.chat, msg.message, {})
}
handler.help = ["", "earch"].map(v => "yts" + v + " <pencarian>")
handler.tags = ["tools"]
handler.command = /^y(outubesearch|ts(earch)?)$/i
handler.register = true
handler.limit = true

export default handler

function formatNumber(num) {
  const suffixes = ['', 'k', 'M', 'B', 'T'];
  const numString = Math.abs(num).toString();
  const numDigits = numString.length;

  if (numDigits <= 3) {
    return numString;
  }

  const suffixIndex = Math.floor((numDigits - 1) / 3);
  let formattedNum = (num / Math.pow(1000, suffixIndex)).toFixed(1);
  
  // Menghapus desimal jika angka sudah bulat
  if (formattedNum.endsWith('.0')) {
    formattedNum = formattedNum.slice(0, -2);
  }

  return formattedNum + suffixes[suffixIndex];
}