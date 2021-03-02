const { updateUserPoints, halfUserPoints } = require("../points/points.api.js");

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const snugEvent = (user) => {
  const term = "snuggles";
  const randNum = getRandomInt(101);
  if (randNum === 100) {
    updateUserPoints(user, "50000");
    return `@${user} got ${randNum}% ${term}. You've been awarded`;
  }
  if (randNum === 0) {
    halfUserPoints(user);
    return `@${user} got ${randNum}% ${term}. Oof`;
  }
  return `@${user} got ${randNum}% ${term}.`;
};

module.exports = { snugEvent };
