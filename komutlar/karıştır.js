const Discord = require("discord.js")
const fs = require("fs")
const Servant = "#36393e";
const ServantDogru = "#22BF41";
const ServantHata = "#f30707";

module.exports.run = async (client, message) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: ServantHata, description: `:x:  | Kuyruğu karıştırabilmek için bir ses kanalında olmanız gerekmektedir!` }})
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: ServantHata, description: `:x:  | Şu anda hiçbir müzik çalmamaktadır!` }})
client.player.shuffle(message.guild.id);
return message.channel.send({embed: {color: ServantDogru, description: `:heavy_check_mark:  | Kuyruk karıştırıldı!` }}) 
};

module.exports.config = {
    name: "karıştır",
    aliases: []
};
