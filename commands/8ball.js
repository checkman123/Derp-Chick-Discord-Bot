module.exports = {
    name: '8ball',
    description: "Random answer to the question",
    execute(message,args){
        var msg = "";
        if(args != ""){
            var choices = [
            "As I see it, yes.",
            "Ask again later.", 
            "Better not tell you now.",
            "Cannot predict now.",
            "Concentrate and ask again.",
            "Don’t count on it.", 
            "It is certain.",
            "It is decidedly so.",
            "Most likely.",
            "My reply is no.", 
            "My sources say no.",
            "Outlook not so good.",
            "Outlook good.",
            "Reply hazy, try again.", 
            "Signs point to yes.",
            "Very doubtful.",
            "Without a doubt.",
            "Yes.", 
            "Yes – definitely.",
            "You may rely on it.",
            ];
            msg = choices[Math.floor(Math.random() * choices.length)];
        }else{
            msg = "Please enter your question."
        }

        message.channel.send(msg);
    }
}