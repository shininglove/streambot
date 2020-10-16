const tmi = require("tmi.js");

const client = new tmi.Client({
  connection: {
    secure: true,
    reconnect: true
  },
  identity: {
    username: process.env.USERNAME,
    password: process.env.TOKEN
  },
  channels: [process.env.CHANNEL]
});

module.exports = client;

