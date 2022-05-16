const mysqlcon = require('../../connection');

//CREATE table cart

function create() {
    let sql = `CREATE TABLE IF NOT EXISTS cart( 
        product_id int(10),
        UserId varchar(225), 
        foreign key(UserId) references Login(UserId)
        )`;
    mysqlcon.query(sql);
  }


  module.exports = {create};
  