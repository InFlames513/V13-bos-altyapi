const { prefix } = require("../base/settings.json");
module.exports = {
  name: "messageCreate",
  async execute(message, client) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0].slice(prefix.length);
    let args = message.content.split(" ").slice(1);
    let cmd;
    if (client.commands.has(command)) cmd = client.commands.get(command);
    if (cmd) {
      cmd.execute(client, message, args);
    }
  },
};
