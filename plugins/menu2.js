const config = require('../config');
const { cmd, commands } = require('../command');
const fs = require('fs');
const path = require('path');

cmd({
    pattern: "menu3",
    desc: "Show plugins list menu",
    category: "menu",
    react: "🧾",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        // Show loading reaction
        await conn.sendMessage(from, {
            react: { text: '⏳', key: mek.key }
        });

        // Get plugin list
        const pluginPath = path.join(__dirname, '../plugins'); // badilisha path kama folder ni tofauti
        const plugins = fs.readdirSync(pluginPath)
            .filter(file => file.endsWith('.js'))
            .map(file => file.replace('.js', ''))
            .sort();

        // Format plugin list
        let pluginList = '';
        plugins.forEach((name, index) => {
            pluginList += `┃★│ ${index + 1}. ${name}\n`;
        });

        // Build menu caption
        const menuCaption = `╭━━━〔 *${config.BOT_NAME}* 〕━━━┈⊷
┃★╭──────────────
┃★│ 👑 *Owner :* ${config.OWNER_NAME}
┃★│ 🤖 *Baileys :* Multi Device
┃★│ 💻 *Type :* NodeJs
┃★│ ⚙️ *Mode :* [${config.MODE}]
┃★│ 🔣 *Prefix :* [${config.PREFIX}]
┃★│ 🏷️ *Version :* 5.0.0 Pro
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
╭━━〔 *Available Plugins* 〕━━┈⊷
${pluginList}╰━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`;

        // Send menu image + caption
        await conn.sendMessage(
            from,
            {
                image: { url: config.MENU_IMAGE_URL || 'https://files.catbox.moe/ca752n.jpeg' },
                caption: menuCaption
            },
            { quoted: mek }
        );

        // Success reaction
        await conn.sendMessage(from, {
            react: { text: '✅', key: mek.key }
        });

    } catch (e) {
        console.error('Menu Error:', e);
        await conn.sendMessage(from, {
            react: { text: '❌', key: mek.key }
        });
        reply(`❌ An error occurred: ${e}`);
    }
});
