const express = require("express");
const client = require("../../lib/client");
const router = express.Router();

const channel = process.env.BOT_CHANNEL;

router.get("/vips", async (req, res) => {
  const vips = await client.vips(channel);
  res.json(vips);
});

router.get("/mods", async (req, res) => {
  const mods = await client.mods(channel);
  res.json(mods);
});

module.exports = router;
