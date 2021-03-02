const express = require("express");
const channel = require("./channel/channel.routes.js");
const events = require("./events/events.routes.js");
const users = require("./users/users.routes.js");
const points = require("./points/points.routes.js");
const authorizedUser = require("./middlewares");

const app = express();

app.use(express.static("assets"));

app.use("/channel", channel);

app.use("/events", events);

app.use("/users", users);

app.use("/points", points);

module.exports = app;
