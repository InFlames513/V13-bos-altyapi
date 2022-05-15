//botun main dosyası 

const discord = require("discord.js");
const client = new discord.Client({ intents: Object.values(discord.Intents.FLAGS).reduce((x, y) => x + y, 0) });
const { token } = require("./src/base/settings.json");
require("./src/base/app.js")(client)

client.login(token);
