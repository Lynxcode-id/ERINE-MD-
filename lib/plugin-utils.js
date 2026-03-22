import fs from 'fs'
import path from 'path'
import axios from 'axios'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export async function checkVersionUpdate() {
  try {
    const pkgPath = path.join(__dirname, '..', 'package.json')
    const localPkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))

    const botName = global.namebot || localPkg.name || 'Unknown Bot'
    const localVersion = global.version || localPkg.version

    console.log(`🤖 Bot Kamu : ${botName}`)
    console.log(`📦 Versi Script : v${localVersion}`)
    console.log('🔍 Checking update...\n')

    const url = 'https://raw.githubusercontent.com/Lynxcode-id/ERINE-MD-/main/package.json'
    const { data: remotePkg } = await axios.get(url)

    const remoteVersion = remotePkg.version

    if (remoteVersion !== localVersion) {
      console.log(`\x1b[33m[UPDATE TERSEDIA]\x1b[0m`)
      console.log(`Versi terbaru script erine : v${remoteVersion}`)
      console.log(`Gabung ke sini untuk update:`)
      console.log(`https://chat.whatsapp.com/CSMhBRB2DoICQwyy61txr0`)
    } else {
      console.log(`\x1b[32m[UP TO DATE]\x1b[0m Bot sudah versi terbaru`)
    }

  } catch (err) {
    console.log(`\x1b[31m[ERROR]\x1b[0m Gagal cek update: ${err.message}`)
  }
}
