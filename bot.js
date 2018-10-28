const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "d";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`الوقت كلسيف ان لم تقطعههء قطع جدككء`,"http://twitch.tv/Dream")
client.user.setStatus("dnd")
});

client.on('guildMemberAdd', Sal => { //By Salto7#4595
    var embed = new Discord.RichEmbed()
    .setTitle('Welcome')
    .setDescription('ارحب نورت **Welcome To __Magic__**')
    .setColor('RANDOM')
    .setFooter(Sal.guild.name, Sal.guild.iconURL, true)
    var channel =Sal.guild.channels.find('name', 'magic') // هنا حط اسم الروم الي تبيه يكتب فيه
    if (!channel) return;
    channel.send({embed : embed});
    });



client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
