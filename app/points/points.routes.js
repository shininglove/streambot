const express = require("express");
const router = express.Router();
const { topUserPoints } = require("./points.api.js");
const { dataFormatter } = require("./points.utilities.js");

router.get("/top-points", async (req, res) => {
  const data = await topUserPoints();
  const points = dataFormatter(data["users"], "username", "points");
  res.json(points);
});

router.get("/top-users/:userlimit?", async (req,res) => {
  const userLimit = req.params.userlimit || 5;
  const data = await topUserPoints();
  const points = dataFormatter(data["users"], "username", "points");
  const topUsers = Object.entries(points).slice(0,userLimit).map(entry => `${entry[0]}(${entry[1]})`)
  const userList = topUsers.join(" , ");
  res.send(userList);
});

module.exports = router;
