
module.exports = {
    name: 'emotes',
    description: "My emotes",
    execute(message,args){
        var emotes = ':2catpatPats: :NekoHeartHug: :PepeHands~1: :pokecharmb: :pepeSadJam: :derpPika: :thonk~2: :blobreallysweat: :Kroko: :PsyDanceSV: :0pepe_party:' +
        ':Angry: :SadLifeOwO: :ThumbsUpOwO: :knifemu2: :thinkingguy: :7blobrun: :emulove: :pikastab: :sad::smug11::pensive::dokkaebicri: :elacri::Aheael:';
        message.channel.send(emotes);
    }
}