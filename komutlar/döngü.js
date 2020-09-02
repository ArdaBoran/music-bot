const Discord = require("discord.js")
const fs = require("fs")
const Servant = "#36393e";
const ServantDogru = "#22BF41";
const ServantHata = "#f30707";

module.exports.run = async (client, message) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: ServantHata, description: ` :x:  | Döngüyü ayarlayabilmek için bir ses kanalında olmanız gerekmektedir!` }})
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: ServantHata, description: ` :x:  | Şu anda hiçbir müzik çalmamaktadır!` }})
const dongu = client.player.getQueue(message.guild.id).repeatMode;
if(dongu){
client.player.setRepeatMode(message.guild.id, false);
return message.channel.send({embed: {color: ServantDogru, description: `:heavy_check_mark:  | Döngü deaktif edildi!` }})
    } else {
client.player.setRepeatMode(message.guild.id, true);
return message.channel.send({embed: {color: ServantDogru, description: `:heavy_check_mark:  | Döngü aktif edildi!` }})
    }
};

module.exports.config = {
    name: "döngü",
    aliases: ["loop"]
};
