const express = require("express");

const port = 3000;
const identity_route = require("./identity_route");

const app = express();
app.use(express.json());

app.use("/contacts", identity_route);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {});
