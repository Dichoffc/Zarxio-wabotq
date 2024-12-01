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
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, makeInMemoryStore, jidDecode, proto, getContentType, downloadContentFromMessage, fetchLatestWaWebVersion } = require("@whiskeysockets/baileys");
const fs = require("fs");
const pino = require("pino");
const lolcatjs = require('lolcatjs')
const path = require('path')
const NodeCache = require("node-cache");
const msgRetryCounterCache = new NodeCache();
const fetch = require("node-fetch")
const FileType = require('file-type')
const _ = require('lodash')
const { Boom } = require("@hapi/boom");
const PhoneNumber = require("awesome-phonenumber");
const readline = require("readline");
const { smsg, color, getBuffer } = require("./lib/myfunc")
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { toAudio, toPTT, toVideo } = require('./lib/converter')
const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }) });
const chalk = require('chalk')

const low = require('./lib/lowdb');
const yargs = require('yargs/yargs');
const { Low, JSONFile } = low;
const mongoDB = require('./lib/mongoDB');

const opts = yargs(process.argv.slice(2)).exitProcess(false).parse();
const dbPath = './lib/database.json';

let db;
if (urldb !== '') {
db = new mongoDB(urldb);
lolcatjs.fromString("[Berhasil tersambung ke database MongoDB]");
} else {
db = new JSONFile(dbPath);
lolcatjs.fromString("[Berhasil tersambung ke database Lokal]");
}

global.db = new Low(db);
global.DATABASE = global.db;

global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000));
if (global.db.data !== null) return;

global.db.READ = true;
await global.db.read();
global.db.READ = false;

global.db.data = {
users: {},
chats: {},
database: {},
game: {},
settings: {},
others: {},
sticker: {},
...(global.db.data || {})
};

global.db.chain = _.chain(global.db.data);
};

global.loadDatabase();

process.on('uncaughtException', console.error);

if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)



function createTmpFolder() {
const folderName = "tmp";
const folderPath = path.join(__dirname, folderName);
if (!fs.existsSync(folderPath)) {
fs.mkdirSync(folderPath);
lolcatjs.fromString(`Folder '${folderName}' berhasil dibuat.`);
} else {
lolcatjs.fromString(`Folder '${folderName}' sudah ada.`);
}
}
createTmpFolder();

const usePairingCode = true
const question = (text) => {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
return new Promise((resolve) => {
rl.question(text, resolve)
})
};

//*tempel di index.js*

/*const verifyKey = async () => {
                const key = await askQuestion("Please enter your key: ")

                if (key !== validKey) {
                    console.log(chalk.bgRed("Invalid key!"))
                    rl.close()
                    return verifyKey()  
                } else {
                    console.log(chalk.bgGreen("Key is correct!"))
                }
            }*/

/**buat file baru key.js trus paste aja ini*

module.exports = {
    validKey: "key mu" 
};*/
async function startBotz() {
const { state, saveCreds } = await useMultiFileAuthState("session")
const ptz = makeWASocket({
logger: pino({ level: "silent" }),
printQRInTerminal: !usePairingCode,
auth: state,
msgRetryCounterCache,
connectTimeoutMs: 60000,
defaultQueryTimeoutMs: 0,
keepAliveIntervalMs: 10000,
emitOwnEvents: true,
fireInitQueries: true,
generateHighQualityLinkPreview: true,
syncFullHistory: true,
markOnlineOnConnect: true,
browser: ["Ubuntu", "Chrome", "20.0.04"],
});
if(usePairingCode && !ptz.authState.creds.registered) {
const verifyKey = async () => {
                const key = await askQuestion("Please enter your key: ")

                if (key !== validKey) {
                    console.log(chalk.bgRed("Invalid key!"))
                    rl.close()
                    return verifyKey()  
                } else {
                    console.log(chalk.bgGreen("Key is correct!"))
                }
            }
const phoneNumber = await question('Masukan Nomer Yang Aktif Awali Dengan 62 Recode :\n');
const code = await ptz.requestPairingCode(phoneNumber.trim())
console.log(`Pairing code: ${code}`)

}

store.bind(ptz.ev);

/*ptz.ev.on('messages.upsert', async chatUpdate => {
        try {
            if (!chatUpdate.messages || chatUpdate.messages.length === 0) return;
            const mek = chatUpdate.messages[0];

            if (!mek.message) return;
            mek.message =
                Object.keys(mek.message)[0] === 'ephemeralMessage'
                    ? mek.message.ephemeralMessage.message
                    : mek.message;

            if (mek.key && mek.key.remoteJid === 'status@broadcast') {
                let emoji = [
                    '💫','🧢','🎉','😮','🎧','💭','🙏🏻','🌟','💤','✨',
                ];
                let sigma = emoji[Math.floor(Math.random() * emoji.length)];
                await ptz.readMessages([mek.key]);
                client.sendMessage(
                    'status@broadcast',
                    { react: { text: sigma, key: mek.key } },
                    { statusJidList: [mek.key.participant] },
                );
            }
		}*/

			

ptz.ev.on("messages.upsert", async (chatUpdate) => {
 try {
const mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast'){
 await ptz.readMessages([mek.key]) }
if (!ptz.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
const m = smsg(ptz, mek, store)
require("./message")(ptz, m, chatUpdate, store)
 } catch (err) {
 console.log(err)
 }
});
    
   //consolenya 
    console.log(`⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠛⠛⠛⠛⠻⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⣉⠄⣢⣴⣟⣫⣤⣾⢿⣿⣷⡶⢦⣬⣉⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⣡⡴⠋⢑⣬⣴⣿⣿⡻⣿⣿⣶⣝⠻⣿⣷⣾⣿⢿⣦⡉⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⣡⡾⠫⣠⣾⣿⣿⣿⣿⣿⣷⢹⣿⣿⣿⣷⡙⢿⣿⣿⣧⡐⡝⣦⡙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢃⣼⣿⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣇⣿⣿⣿⣿⣿⡌⠙⢿⣿⣿⡐⣿⣷⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⣹⢻⡟⡘⣿⠇⣿⣿⣿⣿⣿⣿⣿⡏⣿⠻⣿⣿⣿⣿⡌⢷⡉⢙⠀⠈⠀⡶⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠐⠀⠾⢠⣷⣜⢸⣿⣿⡇⣿⣿⣿⣿⡇⢻⣧⢻⣿⣿⣿⣷⡀⡁⠀⠁⡁⣦⣄⠁⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⢀⠑⣸⡦⣈⡻⠇⢨⢹⣿⡧⣿⣿⣿⣿⡇⣘⣿⡜⣿⣿⣿⢿⢇⠀⠀⣧⢱⡹⣷⡌⠂⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡟⢠⡄⡈⠻⣿⣿⣿⣿⣿⣿⠁⠌⢀⢇⡿⠀⣿⣿⡇⣦⣾⣿⣃⣿⣿⣿⣿⡇⠸⣟⢃⢛⣋⡴⠂⠎⡀⠘⣿⡌⣷⡘⣿⡄⠀⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡿⢀⠟⢜⣼⠀⣼⣿⣿⣿⣿⠇⠌⠀⣸⠸⡇⠀⡇⠟⣃⣿⣿⣿⢸⣿⢿⣶⣭⠁⡁⠹⡠⠌⢉⣬⣉⣀⡃⠀⠸⣷⢸⣧⡹⣷⡀⢧⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣷⡈⠲⠛⢉⠀⢻⣿⣿⣿⡟⠀⣼⠀⣿⢰⡇⠀⠀⣿⡇⣿⣿⡟⢨⡿⣸⣿⡟⢠⣿⣄⠁⠀⣿⣿⣿⣿⢰⠀⠀⢿⡆⢿⣷⡙⣷⡈⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡾⠛⠻⣾⣿⣿⣿⠃⢰⡏⠠⣿⠸⣧⠀⠀⠁⠁⠹⡿⠁⣼⠃⡟⠉⠀⠒⠈⠉⠁⠀⠛⣿⣿⣿⢸⢐⠲⠘⣿⠈⣻⣷⡌⢿⡄⢾⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣅⠀⢀⣿⣿⣿⣿⢀⡿⠁⠘⣿⢨⢻⡀⠀⢦⠂⠀⠠⣤⣥⣤⣦⣶⡆⠀⠀⠙⣿⡇⢀⣿⣿⣿⡏⢐⠳⡄⢿⡇⡟⡏⢻⣆⢈⠀⠙⠛⣛⠉⢸⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⠸⠁⠀⡇⡟⠘⡘⣧⠀⢸⣇⠀⡀⢹⣿⣿⣿⣿⣧⠐⣸⠀⣽⠇⡏⣿⣿⡿⠇⢘⠵⠃⢸⡇⠃⠇⠈⡜⡄⠻⣶⣦⣤⣶⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠌⠛⠋⠀⠰⠀⠁⡇⠀⢧⠘⠧⡀⠿⢦⠡⣾⣿⣿⣿⣿⡿⢓⡿⠶⡟⠘⢰⣿⣿⢱⠀⠀⠀⠀⣼⠇⢰⠀⠀⢱⡀⢧⢹⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⠟⠃⠀⠀⠀⠃⠀⠘⡀⠀⠀⠐⢄⣠⣿⣿⣿⣿⣿⣯⡐⣜⢂⡠⠂⣿⣿⡧⢸⠀⠀⠀⢠⠋⠀⠈⠀⠀⠘⠀⠈⢂⣿⣿⣿⣿⣿⣿⣿
⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠃⠆⠀⠸⠇⠀⠀⠀⠄⠥⠀⢀⠀⠀⠙⠛⠿⢶⣼⣿⡿⠿⠛⢉⣤⢰⣿⡿⠃⡇⠀⠀⠀⠀⠀⠀⠀⡴⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿
⠀⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣭⣭⣭⡒⡄⠂⠀⠀⠀⠀⠀⠀⡀⣀⠀⢰⣿⢃⣾⠿⠁⠀⠀⠀⠀⢀⠀⠀⠠⢄⠀⠀⢀⣜⣠⣿⣿⣿⣿⣿⣿⣿⣿
⣇⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡘⡀⠐⢂⣀⣤⣴⠊⡠⠴⠀⠉⠡⠛⠁⠀⠀⢠⡶⢀⡴⣄⡐⢶⡄⢠⡀⢺⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⡄⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⢡⠀⠹⢿⣿⢃⢰⣶⣥⣒⡶⠟⣓⣤⣤⡾⢋⠔⣩⣾⣿⣿⠖⣠⣾⠇⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣷⡈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠂⠀⠀⠁⣌⢦⠙⢛⣣⣵⣾⣿⠿⢋⣐⣁⣨⣭⣭⣤⣤⣤⣤⣤⣬⣀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣧⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡈⠄⠀⠀⣫⡕⣬⣓⡲⣶⠖⠂⡄⠛⠉⠙⣿⣿⣿⡿⠿⠛⠋⠁⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣆⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠁⢰⡙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠐⠀⠀⣿⣿⠸⣿⠟⣱⣾⡆⢱⢠⢰⠈⠉⣀⣤⢠⣤⣤⠔⣠⣶⡀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡄⢻⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠈⣷⡈⢛⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠁⠈⢿⠿⠿⠈⢺⣿⣿⣷⠈⡌⢸⠀⣿⣿⠇⣾⡟⢁⠠⠤⠄⠠⢀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡐⡄⠰⢊⣀⣀⡛⠻⣿⡿⠀⡇⠆⠀⠿⠋⠀⠋⠀⠤⣴⣶⣶⢶⣤⠀⠘⢿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣧⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⢱⠀⠚⠉⣩⡶⠀⢀⠀⠀⢀⠀⠠⣀⣀⠀⠀⠀⢐⣄⠀⠀⠀⠈⢂⠀⢨⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣇⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⢧⠀⠖⣉⠤⠴⢂⣀⠈⡓⠦⠄⠀⠀⠀⠐⠤⣌⠛⠓⢄⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿
⣿⠀⠤⠄⠀⢀⣀⣠⣨⣉⣉⣉⣉⣛⣛⡛⣛⢛⡛⠛⠛⠛⠛⠻⠿⠿⠿⠿⠿⠿⠿⠿⠜⡆⠈⠉⠀⠀⠙⠋⠠⠤⠐⠛⠀⠀⠀⠀⠀⠈⠳⠀⠀⠀⠀⠀⠀⠀⠛⠛⠛⠛⠛⠛⠻
⣿⣶⣦⣤⣤⣤⣤⣤⣄⣀⣀⣀⣈⣉⣉⡉⠉⠉⠉⠉⠛⠛⠛⠛⠛⠚⠓⠒⠒⠶⠖⠲⠦⠰⠶⠰⠂⠉⠉⠉⠛⠛⠓⠛⠛⠁⠀⣉⣁⣀⣀⣀⣀⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣼
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣶⣶⣶⣤⣤⣤⣤⣤⣤⣴⣶⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿`)

// Setting
ptz.decodeJid = (jid) => {
if (!jid) return jid;
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {};
return (decode.user && decode.server && decode.user + "@" + decode.server) || jid;
} else return jid;
};

ptz.ev.on("contacts.update", (update) => {
for (let contact of update) {
let id = ptz.decodeJid(contact.id);
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify };
}
});

ptz.getName = (jid, withoutContact = false) => {
id = ptz.decodeJid(jid);
withoutContact = ptz.withoutContact || withoutContact;
let v;
if (id.endsWith("@g.us"))
return new Promise(async (resolve) => {
v = store.contacts[id] || {};
if (!(v.name || v.subject)) v = ptz.groupMetadata(id) || {};
resolve(v.name || v.subject || PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber("international"));
});
else
v =
id === "0@s.whatsapp.net"
? {
id,
name: "WhatsApp",
}
: id === ptz.decodeJid(ptz.user.id)
? ptz.user
: store.contacts[id] || {};
return (withoutContact ? "" : v.name) || v.subject || v.verifiedName || PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber("international");
};

ptz.public = true;

ptz.serializeM = (m) => smsg(ptz, m, store)

ptz.ev.on('connection.update', async (update) => {
const {
connection,
lastDisconnect
} = update
try{
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Verifikasi Again`); ptz.logout(); }
else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); startBotz(); }
else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); startBotz(); }
else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); ptz.logout(); }
else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Verifikasi Again And Run.`); ptz.logout(); }
else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); startBotz(); }
else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); startBotz(); }
else ptz.end(`Unknown DisconnectReason: ${reason}|${connection}`)
} if (update.connection == "open" || update.receivedPendingNotifications == "true") {
lolcatjs.fromString('[ Connect, welcome owner! ]\n Creator: Dichxploit\n yt: Dichxploit')
let noted = `*zarxio Bot By DichXploit* Berhasil Tersambung Ke Nomor WhatsApp ${ptz.user.id.split(":")[0]}`
ptz.sendMessage("6287826292008@s.whatsapp.net", {text: noted})
lolcatjs.fromString(`Connected to = ` + JSON.stringify(ptz.user, null, 2))
}} catch (err) {
console.log('Error Di Connection.update '+err)
}
})


ptz.ev.on("creds.update", saveCreds);
ptz.getFile = async (PATH, returnAsFilename) => {
let res, filename
const data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,` [1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await fetch(PATH)).buffer() : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
const type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
if (data && returnAsFilename && !filename)(filename = path.join(__dirname, './tmp/' + new Date * 1 + '.' + type.ext), await fs.promises.writeFile(filename, data))
return {
res,
filename,
...type,
data,
deleteFile() {
return filename && fs.promises.unlink(filename)
}
}
}

ptz.ev.on('call', async (user) => {
if (!global.anticall) return
let botNumber = await ptz.decodeJid(ptz.user.id)
for (let ff of user) {
if (ff.isGroup == false) {
if (ff.status == "offer") {
let sendcall = await ptz.sendMessage(ff.from, {text: `@${ff.from.split("@")[0]} Maaf Kamu Akan Saya Block Karna Ownerbot Menyalakan Fitur *Anticall*\nJika Tidak Sengaja Segera Hubungi Owner Untuk Membuka Blokiran Ini`, contextInfo: {mentionedJid: [ff.from], externalAdReply: {thumbnailUrl: global.ppyo, title: "乂 Panggilan Terdeteksi", body: "Powered By "+global.botname, previewType: "PHOTO"}}}, {quoted: null})
ptz.sendContact(ff.from, [owner], "Telfon Atau Vc = Block", sendcall)
await sleep(7000)
await ptz.updateBlockStatus(ff.from, "block")
}}
}})
	
ptz.sendContact = async (jid, kon, desk = "Developer Bot", quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: ownername,
  vcard: 'BEGIN:VCARD\n' +
    'VERSION:3.0\n' +
    `N:;${ownername};;;\n` +
    `FN:${ownername}\n` +
    'ORG:null\n' +
    'TITLE:\n' +
    `item1.TEL;waid=${i}:${i}\n` +
    'item1.X-ABLabel:Ponsel\n' +
    `X-WA-BIZ-DESCRIPTION:${desk}\n` +
    `X-WA-BIZ-NAME:${ownername}\n` +
    'END:VCARD'
})
}
ptz.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
}
	
ptz.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
return buffer} 

ptz.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
let type = await ptz.getFile(path, true)
let { res, data: file, filename: pathFile } = type
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
let opt = { filename }
if (quoted) opt.quoted = quoted
if (!type) options.asDocument = true
let mtype = '', mimetype = type.mime, convert
if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
else if (/video/.test(type.mime)) mtype = 'video'
else if (/audio/.test(type.mime)) (
convert = await (ptt ? toPTT : toAudio)(file, type.ext),
file = convert.data,
pathFile = convert.filename,
mtype = 'audio',
mimetype = 'audio/ogg; codecs=opus'
)
else mtype = 'document'
if (options.asDocument) mtype = 'document'

let message = {
...options,
caption,
ptt,
[mtype]: { url: pathFile },
mimetype
}
let m
try {
m = await ptz.sendMessage(jid, message, { ...opt, ...options })
} catch (e) {
console.error(e)
m = null
} finally {
if (!m) m = await ptz.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options })
return m
}
}
ptz.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await ptz.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
ptz.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}
const path = require('path');

ptz.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
    let quoted = message.msg ? message.msg : message;
    let mime = (message.msg || message).mimetype || '';
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
    const stream = await downloadContentFromMessage(quoted, messageType);
    let buffer = Buffer.from([]);
    for await(const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk]);
    }
    let type = await FileType.fromBuffer(buffer);
    let trueFileName = attachExtension ? (filename + '.' + type.ext) : filename;
    let savePath = path.join(__dirname, 'tmp', trueFileName); // Save to 'tmp' folder
    await fs.writeFileSync(savePath, buffer);
    return savePath;
};
ptz.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await ptz.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
ptz.sendText = (jid, text, quoted = '', options) => ptz.sendMessage(jid, { text: text, ...options }, { quoted })
return ptz;
}

startBotz();

//batas
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
