const { getRandomInt } = require("./utilities");
const { updateUserPoints } = require("./points");

const smegEvent = user => {
  const term = "snuggles";
  const randNum = getRandomInt(101);
  if (randNum === 100) {
    updateUserPoints(process.env.BOT_CHANNEL_ID, user, "10000");
    return `@${user} got ${randNum}% ${term}. You've been awarded`;
  }
  if (randNum === 0) {
    updateUserPoints(process.env.BOT_CHANNEL_ID, user, "-10000");
    return `@${user} got ${randNum}% ${term}. Oof`;
  }
  return `@${user} got ${randNum}% ${term}.`;
};

module.exports = { smegEvent };
