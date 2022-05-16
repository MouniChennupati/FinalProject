const mysqlcon = require('../../connection');

//create table login

function create() {
    let sql = `CREATE TABLE IF NOT EXISTS Login( 
        UserId varchar(26) primary key, 
        password varchar(225)
        )`;
    mysqlcon.query(sql);
  }


  module.exports = {create};
  