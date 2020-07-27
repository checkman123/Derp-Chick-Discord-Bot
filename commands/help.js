module.exports = {
    name: 'help',
    description: "Command List",
    execute(message,args){
        var commandList = "Command list:\n" +
                            "-help          Show command list\n" +
                            "-ping          Sends back 'pong'\n" +
                            "-github        Repo of the bot\n";
        message.channel.send(commandList);
    }
}