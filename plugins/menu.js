const config = require('../config');
const { cmd } = require('../command');
const fs = require('fs');
const path = require('path');
const os = require('os');

const quotedContact = {
  key: {
    fromMe: false,
    participant: `0@s.whatsapp.net`,
    remoteJid: "status@broadcast"
  },
  message: {
    contactMessage: {
      displayName: "ZEZE TECH VERIFIED ✅",
      vcard: `BEGIN:VCARD
VERSION:3.0
FN:ZEZE TECH VERIFIED ✅
ORG:BMB TECH BOT;
TEL;type=CELL;type=VOICE;waid=255629667675:+255682937675
END:VCARD`
    }
  }
};

cmd({
  pattern: "menu",
  alias: ["allmenu", "command"],
  use: '.menu',
  desc: "menu the bot",
  category: "menu",
  react: "🪀",
  filename: __filename
}, async (conn, mek, m, { from, reply }) => {
  try {
    const randomIndex = Math.floor(Math.random() * 10) + 1;
    const imagePath = path.join(__dirname, '..', 'plugins', `menu${randomIndex}.jpg`);
    const imageBuffer = fs.readFileSync(imagePath);

    let dec =  `
═══════════════════════
> 🌟  *Queen_FAITH-MD-v4* 🌟
> *Version*: 8.1.0 |
> *DEVELOPED BY NOVA TECH🪆*
> *ULTRASONIC POWER AND SPEED ⚡
═══════════════════════


╔══════════════╗
║   TOOL LIST
╚══════════════╝
⚙️ ■ gpt
⚙️ ■ vv
⚙️ ■ vv2
⚙️ ■ bible
⚙️ ■ channel
⚙️ ■ unblock
⚙️ ■ block
⚙️ ■ uptime
⚙️ ■ gitclone
⚙️ ■ check
⚙️ ■ ping
⚙️ ■ pair
⚙️ ■ owner
⚙️ ■ getpp
⚙️ ■ github
⚙️ ■ listonline
⚙️ ■ alive
⚙️ ■ menu
⚙️ ■ repo
⚙️ ■ attp
⚙️ ■ post
⚙️ ■ restart
⚙️ ■ send
⚙️ ■ save
⚙️ ■ sticker
⚙️ ■ take
╭────────────────╮
│  TOOL DOWNLOAD  
╰────────────────╯
⚙️ ■ fb
⚙️ ■ play
⚙️ ■ apk
⚙️ ■ video
⚙️ ■ img
⚙️ ■ tiktok
⚙️ ■ fancy
⚙️ ■ imgscan
⚙️ ■ stabilityai
⚙️ ■ fluxai
⚙️ ■ iyrics
⚙️ ■ movie
⚙️ ■ screenshot
⚙️ ■ rw
⚙️ ■ toppt
⚙️ ■ tomp3
⚙️ ■ short
⚙️ ■ convert
⚙️ ■ trt
⚙️ ■ yts
⚙️ ■ url
╔══════════════╗
║   TOOL GROUP 
╚══════════════╝
⚙️ ■ gdesc
⚙️ ■ add
⚙️ ■ kick
⚙️ ■ hidetag
⚙️ ■ tagall
⚙️ ■ antilink
⚙️ ■ welcome
⚙️ ■ gname
⚙️ ■ ginfo
⚙️ ■ join
⚙️ ■ link
⚙️ ■ vcfl
⚙️ ■ left
⚙️ ■ mute
⚙️ ■ out
⚙️ ■ unmute
⚙️ ■ newgc
╭╴╴╴╴╴╴╴╴╴╴╴╴╴╴╮
│ TOOL SETTINGS
╰╴╴╴╴╴╴╴╴╴╴╴╴╴╴╯
⚙️ ■ mode
⚙️ ■ auto
⚙️ ■typing
⚙️ ■ auto
⚙️ ■ react
⚙️ ■ deletelink
⚙️ ■ antilink
⚙️ ■ antical
⚙️ ■ blocklist
─────────────────
> powered by zeze tech
`;

    await conn.sendMessage(
      from,
      {
        image: imageBuffer,
        caption: dec,
        contextInfo: {
          mentionedJid: [m.sender],
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '',
            newsletterName: 'Queen_FAITH-MD-v4',
            serverMessageId: 143
          }
        }
      },
      { quoted: quotedContact }
    );

  } catch (e) {
    console.log(e);
    reply(`${e}`);
  }
});
