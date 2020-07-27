module.exports = {
    name: '8ball',
    description: "Random answer to the question",
    execute(message,args){
        var choice = Math.floor(Math.random() * 20);     // returns a random integer from 0 to 19
        var msg = "";
        switch(choice){
            case 0:
                msg = "As I see it, yes"
                break;
            case 1:
                msg = "Ask again later."
                break;
            case 2:
                msg = "Better not tell you now."
                break;
            case 3:
                msg = "Cannot predict now."
                break;
            case 4:
                msg = "Concentrate and ask again."
                break;
            case 5:
                msg = "Don’t count on it."
                break;
            case 6:
                msg = "It is decidedly so."
                break;
            case 7:
                msg = "Most likely."
                break;
            case 8:
                msg = "My reply is no."
                break;
            case 9:
                msg = "My sources say no."
                break;
            case 10:
                msg = "Outlook not so good."
                break;
            case 11:
                msg = "Outlook good."
                break;
            case 12:
                msg = "Reply hazy, try again."
                break;
            case 13:
                msg = "Signs point to yes."
                break;
            case 14:
                msg = "Very doubtful."
                break;
            case 15:
                msg = "Without a doubt."
                break;
            case 16:
                msg = "Yes."
                break;
            case 17:
                msg = "Yes – definitely."
                break;
            case 18:
                msg = "You may rely on it."
                break;
            case 19:
                msg = "It is certain."
                break;
            default:
                msg = "cluck cluck derp derp"
        }

        message.channel.send(msg);
    }
}