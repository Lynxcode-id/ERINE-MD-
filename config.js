/**
 * 100% FREE source code.
 * Not for sale under any circumstances.
 * Based on Nao ESM
 * Pengembang¹ :Hlman Ryo
 * Pengembang² : Lynx code
 * Ikuti saluran kami untuk info update project ini
 * https://whatsapp.com/channel/0029Vb1CcDWDp2Q5YT4FZn1k
 **/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

/*============= SET WAKTU =============*/

let wibh = moment.tz('Asia/Makassar').format('HH')
let wibm = moment.tz('Asia/Makassar').format('mm')
let wibs = moment.tz('Asia/Makassar').format('ss')
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
let wktugeneral = `${wibh}:${wibm}:${wibs}`

let d = new Date(new Date + 3600000)
let locale = 'id'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
})
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

/*============= MAIN INFO =============*/

global.owner = [['6288258041396', 'ʟʏɴx ᴅᴇᴄᴏᴅᴇ', true]] // Ganti ini yah
global.mods = []
global.prems = []
global.nomorbot = '6285185681661' // pake no bot kalian
global.nomorown = '6288258041396'// pake no utama kalian
global.nameown = 'ʟʏɴx ᴅᴇᴄᴏᴅᴇ' // nama owner
global.version = '10.0.2' // Versi sc ( ini beta version )
global.autotyping = false // default mati
global.autorecording = false // default mati

/*============= WATERMARK =============*/

global.readMore = readMore
global.author = 'ᴇʀɪɴᴇ ᴘʀᴏᴊᴇᴄᴛ'
global.namebot = 'ᴇʀɪɴᴇ-ᴍᴅ ~ ᴇʀɪɴᴇ ᴘᴇᴏᴊᴇᴄᴛ'
global.wm = 'ᴇʀɪɴᴇ-ᴍᴅ ʙʏ ʟʏɴx ᴅᴇᴄᴏᴅᴇ'
global.watermark = wm
global.botdate = `⫹⫺ DATE: ${week} ${date}\n⫹⫺ 𝗧𝗶𝗺𝗲: ${wktuwib}`
global.bottime = `T I M E : ${wktuwib}`
global.stickpack = `ᴇʀɪɴᴇ ᴘʀᴏᴊᴇᴄᴛ ✦\nPowered by ${namebot}\nwa.me/${nomorbot}`
global.stickauth = `© ᴇʀɪɴᴇ-ᴍᴅ`
global.week = `${week} ${date}`
global.wibb = `${wktuwib}`

/*============= SOSMED =============*/

global.sig = 'https://www.instagram.com/lynnnx_35fps'
global.sgh = '-'
global.sgc = 'https://chat.whatsapp.com/D0i9bk7QHc67iLd3HZGNJs'
global.sgw = '_'
global.sdc = '-'
global.sfb = ''
global.snh = ''

/*================= Untuk Cpanel ========================*/

global.egg = "15" // gausah di ubah
global.nestid = "5" // gausah diubah
global.loc = "1" // gausah diubah
global.domain = "-" // ini ubah ama domain / web panel lu
global.apikey = "-" // apikey / plta lu
global.capikey = "-" // capikey / pltc lu

/*============= DONASI =============*/

global.qris = 'https://c.termai.cc/i119/hZR1g.jpg' // Qrismu 
global.psaweria = 'https://saweria.co/LynxPreset' // Saweriamu

/* ===== MENU MEDIA ===== */

global.menuThumb = 'https://c.termai.cc/i174/WqP0sWo.jpg'
global.menuAudio = 'https://c.termai.cc/a130/YYZnl.mp3'
global.videothumb = 'https://c.termai.cc/v188/CHBtAz.mp4'

// KETERANGAN
// menuThumb : untuk thumbnail utama bot
// menuAudio : untuk musik all menu - menu
// videothumb : untuk vidio gif all menu 

/*============ Update Notif Idn =========*/

export const GROUP_IDS = [
    "120363166736262014@g.us",
    "120363161553336082@g.us",
    "120363395548328688@g.us",
    "120363426323468560@g.us"
];
export const CHANNEL_IDS = [
    "120363251106848970@newsletter",
    "120363296632130473@newsletter",
    "120363400411310874@newsletter"
];

// KETERANGAN
// channel_ids : isi dengan idch kamu
// group_ids : isi dengan idgc kamu

/*============= CHANNEL =============*/

global.chId = '120363400411310874@newsletter' // id chmu
global.newsletterName = '「 🐣 ᴇʀɪɴᴇ-ᴍᴅ ɪɴғᴏʀᴍᴀᴛɪᴏɴ 」' // nama chmu

/*============= TAMPILAN =============*/

global.dmenut = '𖠌 ┈┈┈〈' //top
global.dmenub = '┊↬' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗╌╌╌╌╌╌╌┈╼' //footer
global.dashmenu = '┄┄┄⪩ *DASHBOARD* ⪨┈┈┈'
global.cmenut = '❏––––––『' //top
global.cmenuh = '』––––––' //header
global.cmenub = '┊𖤐 ' //body
global.cmenuf = '┗━━━━━━━╾\n' //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '
global.pmenus = '𖤐'
global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = ''    //hiasan Doang :v
global.hsquere = ['✿', '❀', '✮']

/* ===== WELCOME & GOODBYE BACKGROUND ===== */

global.welcomeBg = 'https://c.termai.cc/i140/snh8Knp.jpg'
global.goodbyeBg = 'https://files.catbox.moe/73uy2u.jpg'

/*============= RESPON =============*/

global.wait = '✨ ᴛᴜɴɢɢᴜ ʙᴇɴᴛᴀʀ ᴇʀɪɴᴇ ᴍᴀᴋᴀɴ...'
global.eror = '🐣 ʏᴀʜ ᴇʀʀᴏʀ ɴɪʜ ᴜʟᴀɴɢ ʟᴀɢɪ ɴᴀɴᴛɪ ʏᴀ!'

global.APIs = {
    ryzen: 'https://api.ryzendesu.vip',
    faa: 'https://api-faa.my.id',
    lol: 'https://api.lolhuman.xyz',
    deline: 'https://api.deline.web.id'
}

global.APIKeys = {
    'https://api.lolhuman.xyz': 'ISI_APIKEY_KAMU'
}

global.flaaa2 = [
    "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
    "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
    "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
    "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
    "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text="
]
global.fla = [
    "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
    "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
    "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
    "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
    "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text="
]
/*============== EMOJI ==============*/
global.rpg = {
	emoticon(string) {
		string = string.toLowerCase()
		let emot = {
			level: '🧬',
			limit: '🌌',
			health: '❤️',
			exp: '✉️',
			money: '💵',
			potion: '🥤',
			diamond: '💎',
			common: '📦',
			uncommon: '🎁',
			mythic: '🗳️',
			legendary: '🗃️',
			pet: '🎁',
			trash: '🗑',
			armor: '🥼',
			sword: '⚔️',
			pickaxe: '⛏️',
			fishingrod: '🎣',
			bow: '🏹',
			wood: '🪵',
			rock: '🪨',
			string: '🕸️',
			horse: '🐎',
			cat: '🐈',
			dog: '🐕',
			fox: '🦊',
			wolf: '🐺',
			centaur: '🐎',
			phoenix: '🦜',
			dragon: '🐉',
			petfood: '🍖',
			iron: '⛓️',
			gold: '👑',
			emerald: '💚',
			bibitmangga: '🌾',
			bibitanggur: '🌾',
			bibitjeruk: '🌾',
			bibitpisang: '🌾',
			bibitapel: '🌾',
			mangga: '🥭',
			anggur: '🍇',
			jeruk: '🍊',
			pisang: '🍌',
			apel: '🍎',
			ayam: '🐔',
			kambing: '🐐',
			sapi: '🐄',
			kerbau: '🐃',
			babi: '🐖',
			harimau: '🐅',
			banteng: '🐂',
			monyet: '🐒',
			babihutan: '🐗',
			panda: '🐼',
			gajah: '🐘',
			buaya: '🐊',
			orca: '🐋',
			paus: '🐳',
			lumba: '🐬',
			hiu: '🦈',
			ikan: '🐟',
			lele: '🐟',
			bawal: '🐡',
			nila: '🐠',
			kepiting: '🦀',
			lobster: '🦞',
			gurita: '🐙',
			cumi: '🦑',
			udang: '🦐',
			steak: '🍝',
			sate: '🍢',
			rendang: '🍜',
			kornet: '🥣',
			nugget: '🍱',
			bluefin: '🍲',
			seafood: '🍛',
			sushi: '🍣',
			moluska: '🥘',
			squidprawm: '🍤',
			rumahsakit: '🏥',
			restoran: '🏭',
			pabrik: '🏯',
			tambang: '⚒️',
			pelabuhan: '🛳️'
		}
		let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
		if (!results.length) return ''
		else return emot[results[0][0]]
	}
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
    unwatchFile(file)
    console.log(chalk.redBright("Update 'config.js'"))
    import(`${file}?update=${Date.now()}`)
})
