//test botu için main dosya

const discord = require("discord.js");
const client = new discord.Client({ intents: Object.values(discord.Intents.FLAGS).reduce((x, y) => x + y, 0) });
const { testToken } = require("./src/base/settings.json");
require("./src/base/test.js")(client)

client.login(testToken);
