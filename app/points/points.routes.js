const express = require("express");
const router = express.Router();
const { topUserPoints } = require("./points.api.js");
const { dataFormatter } = require("./points.utilities.js");

router.get("/top-points", async (req, res) => {
  const data = await topUserPoints();
  const points = dataFormatter(data["users"], "username", "points");
  res.json(points);
});

module.exports = router;
