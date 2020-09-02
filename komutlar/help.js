const Discord = require("discord.js")
const fs = require("fs")
const client = new Discord.Client();
const fynx = require("../ayarlar/bot.json");
 
module.exports.run = (client, message, args) => { 
let pages = [
`**Servant Music Users;**\n\n :headphones:  Thank you for using Servant Music.\n\n:headphones:  I hope you liked our app.\n\n :headphones:  Thanks to you, our application is coming to better places.\n\n `,
"**Servant Music Privacy of its Users;**\n\n:clipboard:  As Servant Music developers, we care and respect your privacy. \n\n",          
`**Servant Music User Commands**\n\n` + `\`${fynx.prefix}help\`` + `\n:arrow_right:  It shows all commands and explanations. \n\n` + `\`${fynx.prefix}play <Song Name>\`` +`\n:arrow_right:  Searches for songs with the specified name and connects to your room and plays the music. \n\n` + `\`${fynx.prefix}stop\`` +`\n:arrow_right:  The Servant stops playing music and leaves the voice channel.\n\n ` + `\`${fynx.prefix}skip\`` + `\n:arrow_right:  Skips the music being played. If there is music in the queue, the music will be played sequentially. \n\n ` + `\`${fynx.prefix}pause\`` +` \n:arrow_right:  Pauses the music being played. \n\n ` + `\`${fynx.prefix}resume\`` +`\n:arrow_right:  Resumes the paused music.`,
`**Servant Music User Commands**\n\n` + `\`${fynx.prefix}mix\`` +`\n:arrow_right:  It shuffles the music in the music queue. \n\n ` + `\`${fynx.prefix}loop\`` +`\n:arrow_right:  Loops the music in the music queue. \n\n ` + `\`${fynx.prefix}playing\`` +`\n:arrow_right:  Shows the music being played.\n\n  ` + `\`${fynx.prefix}queue\`` +`\n:arrow_right:  Shows the music queue. \n\n ` + `\`${fynx.prefix}queue-clear\`` +`\n:arrow_right:  Cleans the music queue.\n\n ` + `\`${fynx.prefix}sound <1/100>\`` +`\n:arrow_right:  Adjusts the volume of music played.`,
'**Servant Music Links**\n\n**:star: [Servant](https://discord.gg/QPUURae)**\n\n**:star:   [Producer Instagram Account](https://instagram.com/borannguzell)**'
];
let page = 1; 
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setThumbnail('https://cdn.discordapp.com/attachments/743857896974188671/744579828329480289/servant.png')
.setAuthor(`Servant Music Help Menu`, client.user.avatarURL)
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
name: 'help',
aliases: [ "h","hel"]
};
 
