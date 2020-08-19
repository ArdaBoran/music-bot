const Discord = require("discord.js")
const fs = require("fs")

exports.run = async (client, message, args) => {
const embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor(`Servant Music Linkler`, client.user.avatarURL())
.setDescription('**:star: [Servant](https://discord.gg/QPUURae)**\n\n**:star: **[Servant Davet Linki]( https://discord.com/oauth2/authorize?client_id=744191034933641218&scope=bot&permissions=8)**\n\n**:star: **[Yapımcı İnstagram Hesabı](https://instagram.com/borannguzell)**')
.setFooter(`${message.author.username} tarafından istendi!`) 
.setTimestamp()
.setThumbnail('https://cdn.discordapp.com/attachments/743857896974188671/744539578500907088/mAKIwmDc.jpg')
message.channel.send(embed)   
 };

 exports.config = {
      name: 'davet',
   aliases: ["invitation","site"]
 };