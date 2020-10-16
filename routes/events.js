const express = require('express');
const { getRandomInt } = require("../app/utilities");
const { updateUserPoints } = require("../routes/points.js");

const router = express.Router();

const snugEvent = user => {
  const term = "snuggles";
  const randNum = getRandomInt(101);
  if (randNum === 100) {
    updateUserPoints(process.env.BOT_CHANNEL_ID, user, "50000");
    return `@${user} got ${randNum}% ${term}. You've been awarded`;
  }
  if (randNum === 0) {
    updateUserPoints(process.env.BOT_CHANNEL_ID, user, "-10000");
    return `@${user} got ${randNum}% ${term}. Oof`;
  }
  return `@${user} got ${randNum}% ${term}.`;
};

router.get("/snug/:user", (req, res) => {
    res.send(snugEvent(req.params.user));
});

module.exports = router;
