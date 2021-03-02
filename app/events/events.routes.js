const express = require("express");
const { snugEvent } = require("./events.utilities.js");

const router = express.Router();

router.get("/snugs/:user", (req, res) => {
  res.send(snugEvent(req.params.user));
});

module.exports = router;
