/**

 * Base By Siputzx
 * Created On 22/2/2024
 * Contact Me on wa.me/6288292024190
 * Web AI rusak, ganti aja yg baru
 
 • Fixxed by Dgf ziyo {
 - Database
 - Pairing code
 - message.js
 - index.js
 - lib/lowdb
 }
 
• Moumantai.. Terrier Asistant using this base !

• Vee... Headshot, Veemon Bot using this base !

**/

const fs = require('fs')
const { color } = require('./lib/myfunc')

global.owner = ['6287826292008']
global.ownername = 'ᴅɪᴄʜxᴘʟᴏɪᴛ'
global.nomerowner = ["6287826292008"]
global.botname = 'ᴢᴀʀxɪᴏ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ'//'ᴢᴀʀxɪᴏ'
global.packname = 'Di Buat Oleh'
global.wm = 'By zarxio'
global.author = 'ᴢᴀʀxɪᴏ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ'
global.urldb = ''; // kosongin aja
global.saluran = 'https://whatsapp.com/channel/0029VaclEQBGehEMNAfSU61j'
global.idch = '120363310531380313@newsletter'
global.group = 'https://chat.whatsapp.com/ExzMFs7idqD1shmn6fU2fk'
global.youtube = 'https://www.youtube.com/@Dichcreator'
global.ppyo = 'https://files.catbox.moe/qrrmon.jpg'

//seting 
global.anticall = true
global.anti92 = true
global.autoTyping = false
global.autorecordtype = false
global.autoRecording = false
global.autoread = false
global.autobio = false 
//======================== CPANEL FITUR ===========================\\
global.domain = 'https://ptero-yassxofc.vcloudx.my.id' // Isi Domain Lu jangan kasih tanda / di akhir link
global.apikey = 'ptla_i9qEm15Auxn67mXPI3cp83bdxvypgpYGWr6YhqYsoMI' // Isi Apikey Plta Lu
global.capikey = 'ptlc_SrvQiGEuxa9DExPls7BXGdTh3gbjKg9DnGlcL3dAmqJ' // Isi Apikey Pltc Lu
//=========================================================//
//panel 
global.eggsnya2 = '15' // id eggs yang dipakai
global.location2 = '1' // id location
//seting message
global.mess = {
    group: 'Khusus Group 🕊️',
    done: '`SUCCES TUAN ✨`',
    premium: '`Khusus User Premium`',
    wait: `⬜ ◽◻️▫️
 _*[ ⏲️ ] Loading...*_`,
    error: '`Maaf Kak Fitur Sedang Error, Silahkan hubungi/lapor .owner`',
    bugrespon: 'Succes tuan',
    notregist: '> `Untuk Melanjutkan Bermain Bot, Tolong Register Terlebih Dulu Penggunan`\n◦ *Manual:* .daftar namakamu.umurkamu',
    owner: '`Khusus Owner Kak`',
	endLimit: 'limit anda telah habis limit akan di reset pukul 00.00'
    }
global.multiplier = 2
//apikey
global.skizo = 'woxxzAsia'
global.API= {
    ELXYZ: 'KC-6d6535ed694cfaa7',
	XTREM: 'Bell409',/*'AIzaAcWNEZSZep6rdvgv',*/
    XYZ: 'woxxzhereo',
    SKIZO: 'woxxzAsia',
	MAULANA: 'tjsAUTA7'
    }

global.limitawal = {
    vip: 500,
    premium: 100,
    free: 300
    }


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
