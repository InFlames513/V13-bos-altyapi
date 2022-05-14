//mesaj komutları bu şekilde olmalı

module.exports = {
    slash: false,
    name: ['test', 'deneme'], //arraya istediğiniz kadar kullanım yazabilirsiniz alieses gibi saçma bir şeyle uğraşmak yerine direk arraya ekleyebilirsiniz.
    async execute(client, message, args) {
        return message.channel.send(client.user.username + args[1]);
    }
}