const express = require("express");
require('dotenv').config();
const app = express();
const client = require("./app/client");
const isAllowedBot = require("./app/middlewares");
const channelInfo = require("./routes/channel-info");
const events = require("./routes/events");
// const users = require("./routes/users");
const tests = require("./routes/test");

client.connect();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.use('/channel',channelInfo);

app.use('/events',events);

// app.use('/users',users);

app.use('/test',isAllowedBot,tests);

const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
