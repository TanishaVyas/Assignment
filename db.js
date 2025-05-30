const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: "bitespeed_assignment",
  user: "root",
  password: "123456789",
});

module.exports = pool.promise();
