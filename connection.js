var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mouni@1274",
  database: "ecom_mounica",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;