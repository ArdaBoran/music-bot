const Discord = require("discord.js")
const fs = require("fs")
const Servant = "#36393e";
const ServantDogru = "#22BF41";
const ServantHata = "#f30707";

module.exports.run = async (client, message, args) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: ServantHata, description: `:x:Ses seviyesini ayarlabilmek için bir ses kanalında olmanız gerekmektedir!` }})  
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: ServantHata, description: `:x:| Şu anda hiçbir müzik çalmamaktadır!` }})
let sesseviyesi = parseInt(args.join(" "));
if (!sesseviyesi) return message.channel.send({embed: {color: ServantHata, description: `:x: Ses seviyesini ayarlayabilmek için sadece bir doğal sayı giriniz.` }})
if (args > 100) return message.channel.send({embed: {color: ServantHata, description: `Ses seviyesini sadece \`0\` ile \`100\` arasında ayarlayabilirsiniz. `}})
if (args < 0) return message.channel.send({embed: {color: ServantHata, description: `Ses seviyesini sadece \`0\` ile \`100\` arasında ayarlayabilirsiniz. ` }})
client.player.setVolume(message.guild.id, sesseviyesi * 2);
message.channel.send({embed: {color: ServantDogru, description: `:heavy_check_mark:| Ses seviyesi, başarılı bir şekilde \`${args.join(" ")}\` olarak ayarlandı! ` }})
}

module.exports.config = {
  name: "ses",
  aliases: ['ses-seviyesi',"sound"]
};
