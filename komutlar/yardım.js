const Discord = require("discord.js")
const fs = require("fs")
const client = new Discord.Client();
const fynx = require("../ayarlar/bot.json");
 
module.exports.run = (client, message, args) => { 
let pages = [
`**Servant Music kullanıcıları bilginize;**\n\n :headphones:  Yardım menüsünü görmeden önce Servant Music'i kullandığınız için sizlere teşekkür ederiz.\n\n:headphones:  Umarım botumuzu beğenerek kullanıyorsunuzdur.\n\n :headphones:  Sizler sayesinde botumuz daha iyi yerlere geliyor.\n\n `,
"**Servant Music kullanıcılarının gizliliği;**\n\n:clipboard:  Biz Servant Music geliştiricileri olarak sizin gizliliğinizi önemsiyor ve saygı duyuyoruz. \n\n",          
`**Servant Music kullanıcı komutları**\n\n` + `\`${fynx.prefix}yardım\`` + `\n:arrow_right:  Bütün komutları ve açıklamaları gösterir. \n\n` + `\`${fynx.prefix}oynat <Şarkı İsmi>\`` +`\n:arrow_right:  Belirtilen isimli şarkıları arar ve bulunduğunuz odaya bağlanıp müziği oynatır. \n\n` + `\`${fynx.prefix}durdur\`` +`\n:arrow_right:  Servant müzik oynatmayı durdurur ve ses kanalından ayrılır.\n\n ` + `\`${fynx.prefix}atla\`` + `\n:arrow_right:  Oynatılmakta olan müziği atlar. Kuyrukta müzik var ise müzikler sırayla oynatılır. \n\n ` + `\`${fynx.prefix}duraklat\`` +` \n:arrow_right:  Oynatılamakta olan müziği duraklatır. \n\n ` + `\`${fynx.prefix}devam\`` +`\n:arrow_right:  Duraklatılan müziği devam ettirir.`,
`**Servant Music kullanıcı komutları**\n\n` + `\`${fynx.prefix}karıştır\`` +`\n:arrow_right:  Müzik kuyruğundaki müzikleri karıştırır. \n\n ` + `\`${fynx.prefix}döngü\`` +`\n:arrow_right:  Müzik kuyruğundaki müzikleri döngü içerisine alır. \n\n ` + `\`${fynx.prefix}çalan\`` +`\n:arrow_right:  Oynatılmakta olan müziği gösterir.\n\n  ` + `\`${fynx.prefix}kuyruk\`` +`\n:arrow_right:  Müzik kuyruğunu gösterir. \n\n ` + `\`${fynx.prefix}kuyruğu-temizle\`` +`\n:arrow_right:  Müzik kuyruğunu temizler.\n\n ` + `\`${fynx.prefix}ses <1/100>\`` +`\n:arrow_right:  Oynatılan müziğin ses seviyesini ayarlar.`,
'**Servant Music Linkler**\n\n**:star: [Servant](https://discord.gg/QPUURae)**\n\n**:star:   [Yapımcı İnstagram Hesabı](https://instagram.com/borannguzell)**'
];
let page = 1; 
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setThumbnail('https://cdn.discordapp.com/attachments/743857896974188671/744579828329480289/servant.png')
.setAuthor(`Servant Music Yardım Menüsü`, client.user.avatarURL)
.setFooter(`Sayfa ${page} / ${pages.length}`)
.setDescription(pages[page-1])
message.channel.send(embed).then(msg => {
msg.react('⬅')
.then(r => {
msg.react('➡')
const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });
forwards.on('collect', r => {
if(page === pages.length) return;
page++;
embed.setDescription(pages[page-1]);
embed.setColor('RANDOM')
embed.setFooter(`Sayfa ${page} / ${pages.length}`)
msg.edit(embed)
})
backwards.on('collect', r => {
if(page === 1) return;
page--;
embed.setColor('RANDOM')
embed.setDescription(pages[page-1]);
embed.setFooter(`Sayfa ${page} / ${pages.length}`)
msg.edit(embed)
}) 
})
})
};
 
module.exports.config = {
name: 'yardım',
aliases: [ "y","yar"]
};
 
