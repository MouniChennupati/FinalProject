const mysqlcon = require('../../connection');

//create table products

function create() {
    let sql = `CREATE TABLE IF NOT EXISTS Register( 
        Email varchar(225),
        UserId varchar(56)
        )`;
    mysqlcon.query(sql);
  }


  module.exports = {create};
  