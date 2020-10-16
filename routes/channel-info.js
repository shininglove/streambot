const express = require('express');
const client = require("../app/client");
const { topUserPoints } = require("../routes/points");
const { dataFormatter } = require("../app/utilities");
const router = express.Router();

router.get("/top-points", async (req, res) => {
  const data = await topUserPoints(process.env.BOT_CHANNEL_ID);
  const points = dataFormatter(data["users"], "username", "points");
  res.json(points);
});

router.get("/vips", async (req, res) => {
  const vips = await client.vips(process.env.BOT_CHANNEL);
  res.json(vips);
});

router.get("/mods", async (req, res) => {
  const mods = await client.mods(process.env.BOT_CHANNEL);
  res.json(mods);
});

module.exports = router;
