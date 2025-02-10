const { AoiClient } = require("aoi.js");
const config = require("./config.json"); // Load the setup options from config

// Needed for variables handler
const vars = require('./handlers/variables.js');

const client = new AoiClient({
    token: process.env.BotToken || config.BotToken, // Token with either env or config
    prefix: config.prefix, // Prefix setup using config
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("@aoijs/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        securityKey: config.securityKey
    }
});

// Handlers
Object.keys(vars).forEach((t) =>
client.variables(vars[t], t)
)

client.loadCommands("./commands/", true);
client.functionManager.createFunction(...require('./handlers/customfuncs.js'))
