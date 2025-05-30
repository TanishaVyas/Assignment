const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: "bitespeed_assignment",
  user: "root",
  password: "123456789",
});

connection.connect(function (err) {
  if (err) {
    console.log("error occurred while connecting", err);
  } else {
    console.log("connection created with mysql successfully");
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {});
