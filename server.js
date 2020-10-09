const express = require("express");
const app = express();
require('dotenv').config();
const client = require("./client");
const { smegEvent } = require("./events");
const { topUserPoints } = require("./points");
const botMiddleWare = require("./middlewares");
const { dataFormatter } = require("./utilities");
const saveData = require("./savedb");

client.connect();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.use(botMiddleWare);

app.get("/users", (req, res) => {
  // client.say(process.env.CHANNEL,"Hello");
  if (req.isAllowedBot) {
    res.send("hello-twitch");
  } else {
    res.send("bye");
  }
});

app.get("/smeg/:user", (req, res) => {
  if (req.isAllowedBot) {
    res.send(smegEvent(req.params.user));
  }
});

app.get("/top-points", async (req, res) => {
  const data = await topUserPoints(process.env.BOT_CHANNEL_ID);
  const points = dataFormatter(data["users"], "username", "points");
  saveData("points", points);
  res.json(points);
});

app.get("/vips", async (req, res) => {
  const vips = await client.vips(process.env.BOT_CHANNEL);
  res.json(vips);
});

app.get("/mods", async (req, res) => {
  const mods = await client.mods(process.env.BOT_CHANNEL);
  res.json(mods);
});

const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
