const Discord = require('discord.js');

const client = new Discord.Client();

//prefix for Bot
const prefix = '-';

//Command Handler
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Derp Chick is now online!!')
});


client.on('message', message => {
    //if no prefix or author is the bot
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    //splice for multiple command
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //Command List
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    if(command === 'github'){
        client.commands.get('github').execute(message, args);
    }
    if(command === 'help'){
        client.commands.get('help').execute(message, args);
    }
})


//Need to be at the bottom
client.login(process.env.token);