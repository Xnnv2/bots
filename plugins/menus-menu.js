import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `*`⌜ ＭＥＮＵ | ＣＯＭＰＬＥＴＯ ⌟`*

*`╭━〔 𝐆𝐇𝐎𝐒𝐓 𝐁𝐎𝐓 〕━╮`*
┃➔ ⭐ *Owner:* Alex
┃➔ 📱 *Contacto*: wa.me/595984303784
┃➔ 💌 *Pruebas:* https://chat.whatsapp.com/IGsGRrP8paEAD2mHVF0xUT
╰━━━━━━━━━━━━━━╯

*`╭━〔 𝐀𝐂𝐓𝐈𝐕𝐀𝐑|𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑 〕━╮`*
┃➔ ✅ ${usedPrefix}enable
┃➔ ❌ ${usedPrefix}disable*
╰━━━━━━━━━━━━━━╯

           〔 𝐆𝐑𝐔𝐏𝐎𝐒 ❄️〕
 *┃➤  ${usedPrefix}menuff*
 *┃➤  ${usedPrefix}comandosff*
 *┃➤  ${usedPrefix}kick*
 *┃➤  ${usedPrefix}grupo*
 *┃➤  ${usedPrefix}promote*
 *┃➤  ${usedPrefix}demote*
 *┃➤  ${usedPrefix}demote*
 *┃➤  ${usedPrefix}link*
 *┃➤  ${usedPrefix}invocar*
 *┃➤  ${usedPrefix}setwelcome*
 *┃➤  ${usedPrefix}setbye*
 *┃➤  ${usedPrefix}hidetag*
 *┃➤  ${usedPrefix}fantasmas*
 *┃➤  ${usedPrefix}kickfantasmas*
  ╰━━━━━━━━━━━━

 ╭━〔 *FREE FIRE*🔫〕
 *┃➤ 🗺️ ${usedPrefix}menuff*
 *┃➤ 🗺️ ${usedPrefix}bermuda*
 *┃➤ 🗺️ ${usedPrefix}kalahari*
 *┃➤ 🗺️ ${usedPrefix}alpes*
 *┃➤ 🗺️ ${usedPrefix}purgatorio*
 *┃➤ 🗺️ ${usedPrefix}nexterra*
 *┃➤ 📋 ${usedPrefix}agendasemanal*
  ╰━━━━━━━━━━━━

  ╭━〔 *BUSCAR VS PLANTILLAS*💌 〕
 *┃➤ 🌀 ${usedPrefix}buscarvsmasc*
 *┃➤ ⚔️ ${usedPrefix}bsmsac*
 *┃➤ ⚓ ${usedPrefix}buscarvsfem*
 *┃➤ ✨ ${usedPrefix}bsfem*
 *┃➤ 📍 ${usedPrefix}buscarvsmixto*
 *┃➤ 👁️‍🗨️ ${usedPrefix}bsmixto*
  ╰━━━━━━━━━━━━

*╭━〔REGLAS Y LISTAS VS💙〕*
*║* 📝➺ _${usedPrefix}Fem4_
*║* 📝➺ _${usedPrefix}Fem6_
*║* 📝➺ _${usedPrefix}FemInterna4_
*║* 📝➺ _${usedPrefix}FemInterna6_
*║* 🗒️➺ _${usedPrefix}Masc4_
*║* 🗒️➺ _${usedPrefix}Masc6_
*║* 🗒️➺ _${usedPrefix}MascInterna4_
*║* 🗒️➺ _${usedPrefix}MascInterna6_
*║* 🗒️➺ _${usedPrefix}Mixto4_
*║* 📋➺ _${usedPrefix}Mixto6_
*║* 📋➺ _${usedPrefix}MixtoInterna4_
*║* 📋➺ _${usedPrefix}MixtoInterna6_
*║* 📋➺ _${usedPrefix}apos_
*║* 📋➺ _${usedPrefix}mapa_
*║* 📝➺ _${usedPrefix}Ficha / Formulario Reclutamiento_
*║* 🗽➺ _${usedPrefix}Nexterra_
*║* 🗼➺ _${usedPrefix}Bermuda_
*║* 🏖️➺ _${usedPrefix}Kalahary_
*║* 🏜️➺ _${usedPrefix}Alpes_
*║* 🏝️➺ _${usedPrefix}AgendaSemanal_
╰━━━━━━━━━━━━

*╭━〔LINKS - DRIVE DZN 💙〕*
 *║* 🎐_${usedPrefix}SpamApk / WhatsApp_
 *║* 🎐_${usedPrefix}SpamComu / Comunidades_
 *║* 🎐 _${usedPrefix}Spam2_
 *║* 🎐 _${usedPrefix}rcursosdzn_
 *║* 🎐 _${usedPrefix}drivesdzn_
 *║* 🎐 _${usedPrefix}dzn_
 *║* 🎐 _${usedPrefix}ApkEdits_
 *║* 🎐 _${usedPrefix}DriveEdits_
╰━━━━━━━━━━━━

 ╭━〔 🧿 𝐆𝐄𝐍𝐄𝐑𝐀 𝐏𝐋𝐀𝐓𝐀𝐅𝐎𝐑𝐌𝐀𝐒 🧿 〕
 *┃➤ 💴 ${usedPrefix}plataformas*
 *┃➤ 💳 ${usedPrefix}drops*
 *┃➤ 💳 ${usedPrefix}streaming*
 *┃➤ 💳 ${usedPrefix}cccompras*
 *┃➤ 💰 ${usedPrefix}cursovip*
 *┃➤ 💰 ${usedPrefix}cc2*
 *┃➤ 💸 ${usedPrefix}cursoplataformas*
  ╰━━━━━━━━━━━

*╭━〔 STICKERS ❄️〕*
 *║* 🪐 _${usedPrefix}sticker | s *imagen o video*_
 *║* 🪐 _${usedPrefix}sticker | s *url de tipo jpg*_
 *║* 🪐 _${usedPrefix}emojimix *😺+😆*_
 *║* 🪐 _${usedPrefix}qc*_
 *║* 🪐 _${usedPrefix}scircle | círculo *imagen*_
 *║* 🪐 _${usedPrefix}semoji | emoji *tipo emoji*_
 *║* 🪐 _${usedPrefix}attp *texto*_
 *║* 🪐 _${usedPrefix}attp2 *texto*_
 *║* 🪐 _${usedPrefix}ttp *texto*_
 *║* 🪐 _${usedPrefix}ttp2 *texto*_
 *║* 🪐 _${usedPrefix}ttp3 *texto*_
 *║* 🪐 _${usedPrefix}ttp4 *texto*_
 *║* 🪐 _${usedPrefix}ttp5 *texto*_
 *║* 🪐 _${usedPrefix}ttp6 *texto*_
 *║* 🪐 _${usedPrefix}dado_
 *║* 🪐 _${usedPrefix}stickermarker *efecto : responder a imagen*_
 *║* 🪐 _${usedPrefix}stickerfilter *efecto : responder a imagen*_
 *║* 🪐 _${usedPrefix}cs *:* cs2_
 ╰━━━━━━━━━━━━

 ╭━〔 🎮 𝐉𝐔𝐄𝐆𝐎𝐒 🎮 〕
*┃➤ 🍁 ${usedPrefix}mates*
*┃➤ 🍁 ${usedPrefix}ppt*
*┃➤ 🍁 ${usedPrefix}prostituto <@tag>*
*┃➤ 🍁 ${usedPrefix}prostituta <@tag>*
*┃➤ 🍁 ${usedPrefix}gay2 <@tag>*
*┃➤ 🍁 ${usedPrefix}lesbiana <@tag>*
*┃➤ 🍁 ${usedPrefix}pajero <@tag>*
*┃➤ 🍁 ${usedPrefix}pajera <@tag>*
*┃➤ 🍁 ${usedPrefix}puto <@tag>*
*┃➤ 🍁 ${usedPrefix}puta <@tag>*
*┃➤ 🍁 ${usedPrefix}manco <@tag>*
*┃➤ 🍁 ${usedPrefix}manca <@tag>*
*┃➤ 🍁 ${usedPrefix}rata <@tag>*
*┃➤ 🍁 ${usedPrefix}negro <@tag>*
*┃➤ 🍁 ${usedPrefix}negra <@tag>*
*┃➤ 🍁 ${usedPrefix}fea <@tag>*
*┃➤ 🍁 ${usedPrefix}feo <@tag>*
*┃➤ 🍁 ${usedPrefix}sinpoto <@tag>*
*┃➤ 🍁 ${usedPrefix}sintetas <@tag>*
*┃➤ 🍁 ${usedPrefix}sinpito <@tag>*
*┃➤ 🍁 ${usedPrefix}adoptada <@tag>*
*┃➤ 🍁 ${usedPrefix}adoptado <@tag>*
*┃➤ 🍁 ${usedPrefix}love*
*┃➤ 🍁 ${usedPrefix}suitpvp*
*┃➤ 🍁 ${usedPrefix}slot*
*┃➤ 🍁 ${usedPrefix}simisimi*
*┃➤ 🍁 ${usedPrefix}pregunta*
*┃➤ 🍁 ${usedPrefix}cuando*
*┃➤ 🍁 ${usedPrefix}ship5*
*┃➤ 🍁 ${usedPrefix}abrazo*
*┃➤ 🍁 ${usedPrefix}ship2*
*┃➤ 🍁 ${usedPrefix}formarpareja*
*┃➤ 🍁 ${usedPrefix}verdad*
*┃➤ 🍁 ${usedPrefix}reto*
*┃➤ 🍁 ${usedPrefix}cancion*
*┃➤ 🍁 ${usedPrefix}pista*
*┃➤ 🍁 ${usedPrefix}ruleta*
*┃➤ 🍁 ${usedPrefix}odio*
*┃➤ 🍁 ${usedPrefix}ship*
*┃➤ 🍁 ${usedPrefix}sorteo*
*┃➤ 🍁 ${usedPrefix}minovia*
*┃➤ 🍁 ${usedPrefix}minovio*
*┃➤ 🍁 ${usedPrefix}kchero*
 ╰━━━━━━━━━━━━


 ╭━〔 🎭 *IMAGENES* 🎭 〕
*┃➤ 📷 ${usedPrefix}goku*
*┃➤ 📷 ${usedPrefix}vegeta*
*┃➤ 📷 ${usedPrefix}cr7*
*┃➤ 📷 ${usedPrefix}spiderman*
*┃➤ 📷 ${usedPrefix}Messi*
 ╰━━━━━━━━━━━━
 

 ╭━〔 🈴 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 🈴 〕
*┃➤ 📥 ${usedPrefix}play*
*┃➤ 📥 ${usedPrefix}play.1*
*┃➤ 📥 ${usedPrefix}play2.2*
*┃➤ 📥 ${usedPrefix}ytv.2*
*┃➤ 📥 ${usedPrefix}yta.2*
*┃➤ 📥 ${usedPrefix}playlist*
*┃➤ 📥 ${usedPrefix}spotify*
*┃➤ 📥 ${usedPrefix}spotifydl*
*┃➤ 📥 ${usedPrefix}tiktok*
*┃➤ 📥 ${usedPrefix}instagram*
*┃➤ 📥 ${usedPrefix}mediafire*
*┃➤ 📥 ${usedPrefix}gdrive*
*┃➤ 📥 ${usedPrefix}twitter*
*┃➤ 📥 ${usedPrefix}yta*
*┃➤ 📥 ${usedPrefix}ytv*
*┃➤ 📥 ${usedPrefix}imagen*
*┃➤ 📥 ${usedPrefix}iaimagen*
*┃➤ 📥 ${usedPrefix}pinteres*
*┃➤ 📥 ${usedPrefix}igstory*
 ╰━━━━━━━━━━━━


*╭━〔 👀 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒 👀 〕*
*┃➤ 📍 ${usedPrefix}toimg*
*┃➤ 📍 ${usedPrefix}tomp3*
*┃➤ 📍 ${usedPrefix}toptt*
*┃➤ 📍 ${usedPrefix}tovideo*
*┃➤ 📍 ${usedPrefix}tts*
 ╰━━━━━━━━━━━━

*╭━〔 ♓ 𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐘 𝐋𝐎𝐆𝐎𝐒*
*┃➤ ❄️ ${usedPrefix}logos*
*┃➤ ❄️ ${usedPrefix}logocorazon*
*┃➤ ❄️ ${usedPrefix}ytcomment*
*┃➤ ❄️ ${usedPrefix}hornycard*
*┃➤ ❄️ ${usedPrefix}itssostupid*
*┃➤ ❄️ ${usedPrefix}pixelar*
 ╰━━━━━━━━━━━━

*╭━〔 💌 𝐅𝐑𝐀𝐒𝐄𝐒 𝐘 𝐓𝐄𝐗𝐓𝐎𝐒 💌〕*
*┃➤ 🌸 ${usedPrefix}piropo*
*┃➤ 🌸 ${usedPrefix}consejo*
*┃➤ 🌸 ${usedPrefix}fraseromantica*
 ╰━━━━━━━━━━━━

 ╭━〔 ✨ 𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒 ✨  〕*
*┃➤ 🔍 ${usedPrefix}xnxxsearch*
*┃➤ 🔍 ${usedPrefix}google*
*┃➤ 🔍 ${usedPrefix}letra*
*┃➤ 🔍 ${usedPrefix}wikipedia*
*┃➤ 🔍 ${usedPrefix}ytsearch*
*┃➤ 🔍 ${usedPrefix}playstore*
*┃➤ 🔍 ${usedPrefix}mercadolibre*
*┃➤ 🔍 ${usedPrefix}pornhubsearch*
 ╰━━━━━━━━━━━━

 ╭━〔 🌝 𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒 🌝 〕
*┃➤ 🍃 ${usedPrefix}clima*
*┃➤ 🍃 ${usedPrefix}afk*
*┃➤ 🍃 ${usedPrefix}ocr*
*┃➤ 🍃 ${usedPrefix}calc*
*┃➤ 🍃 ${usedPrefix}del*
*┃➤ 🍃 ${usedPrefix}whatmusic*
*┃➤ 🍃 ${usedPrefix}qrcode*
*┃➤ 🍃 ${usedPrefix}traducir*
 ╰━━━━━━━━━━━━

*╭━〔 💎 𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀𝐒 💎 〕*
*┃➤ 🍂 ${usedPrefix}verificar*
*┃➤ 🍂 ${usedPrefix}unreg*
*┃➤ 🍂 ${usedPrefix}minar*
*┃➤ 🍂 ${usedPrefix}buy*
*┃➤ 🍂 ${usedPrefix}work*
*┃➤ 🍂 ${usedPrefix}mendigar*
*┃➤ 🍂 ${usedPrefix}transfer*
 ╰━━━━━━━━━━━━
 *╔══ ≪ FUNCIONES OWNERS ≫ ══╗*
*║* 💎➺ _${usedPrefix}join *enlace*_
*║* 💎➺ _${usedPrefix}unete *enlace*_
*║* 💎➺ _${usedPrefix}dardiamantes *cantidad*_
*║* 💎➺ _${usedPrefix}darxp *cantidad*_
*║* 💎➺ _${usedPrefix}addprem | userpremium *@tag* *cantidad*_
*║* 💎➺ _${usedPrefix}addprem2 | userpremium2 *@tag* *cantidad*_
*║* 💎➺ _${usedPrefix}addprem3 | userpremium3 *@tag* *cantidad*_
*║* 💎➺ _${usedPrefix}addprem4 | userpremium4 *@tag* *cantidad*_
*║* 💎➺ _${usedPrefix}idioma | language_
*║* 💎➺ _${usedPrefix}cajafuerte_
*║* 💎➺ _${usedPrefix}comunicar | broadcastall | bc *texto*_
*║* 💎➺ _${usedPrefix}broadcastchats | bcc *texto*_
*║* 💎➺ _${usedPrefix}comunicarpv *texto*_
*║* 💎➺ _${usedPrefix}broadcastgc *texto*_
*║* 💎➺ _${usedPrefix}comunicargrupos *texto*_
*║* 💎➺ _${usedPrefix}borrartmp | cleartmp_
*║* 💎➺ _${usedPrefix}delexp *@tag*_
*║* 💎➺ _${usedPrefix}deloptimuscoins *@tag*_
*║* 💎➺ _${usedPrefix}deldiamantes *@tag*_
*║* 💎➺ _${usedPrefix}reiniciar | restart_
*║* 💎➺ _${usedPrefix}Actualizar | update_
*║* 💎➺ _${usedPrefix}addprem | +prem *@tag*_
*║* 💎➺ _${usedPrefix}delprem | -prem *@tag*_
*║* 💎➺ _${usedPrefix}listapremium | listprem_
*║* 💎➺ _${usedPrefix}añadirdiamantes *@tag cantidad*_
*║* 💎➺ _${usedPrefix}añadirxp *@tag cantidad*_
*║* 💎➺ _${usedPrefix}añadircoins *@tag cantidad*_
*╚══ ≪ •❈• ≫ ══╝*`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[ ℹ️ ] Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
