require("dotenv").config();

const app = require("./app")

const client = require("./lib/client");

client.connect();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

const listener = app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
