const Discord = require("discord.js")
const fs = require("fs")
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
const seksizaman = moment
.duration(client.uptime)
.format(" D [gün], H [saat], m [dakika], s [saniye]");
const istatistikler = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTimestamp()
.setFooter("Servant Music © 2020", client.user.avatarURL())
.addField(":computer:  | **Botun Sahibi**", "<@274826794983489536>")
.addField(":satellite:  | **Gecikme süreleri**","Mesaj Gecikmesi: {ping1} ms \nBot Gecikmesi: {ping2} ms"
.replace("{ping1}", new Date().getTime() - message.createdTimestamp)
.replace("{ping2}", client.ws.ping),true)
.addField(":floppy_disk:  | **Bellek kullanımı**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
.addField(":hourglass_flowing_sand:  | **Çalışma süresi**", seksizaman, true)
.addField(":keyboard:  | **Discord.JS sürüm**", "v" + Discord.version, true)
.addField(":keyboard:  | **Node.JS sürüm**", `${process.version}`, true)
.addField(":microphone:  | **Müzik Oynatılan Sunucu Sayısı**", client.voice.connections.size, true)
.addField(`:file_folder:  | **Sunucu Sayısı**`, client.guilds.cache.size, true)
.addField(`:family_man_girl:  | **Kullanıcı Sayısı**`, client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
.addField(`:desktop:   | **Sunucu Lokasyonu**`, `:flag_tr:  Turkey, Izmir`, true)
return message.channel.send(istatistikler);
};

exports.config = {
name: "istatistik",
aliases: ["i"]
};

