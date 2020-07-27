module.exports = {
    name: 'github',
    description: "My github repo for this bot",
    execute(message,args){
        message.channel.send('https://github.com/checkman123?tab=repositories');
    }
}