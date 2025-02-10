module.exports = {
    name: "ping",
    code: `Pong! 🏓
    $editIn[3s;Ping: $pingms
    Message Ping: $messagePingms
    Database Ping: $roundTenth[$databasePing;1]
    Last Restart: <t:$truncate[$divide[$readyTimestamp;1000]]:f>
    ]`
}
