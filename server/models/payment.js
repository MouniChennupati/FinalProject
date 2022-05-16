const mysqlcon = require('../../connection');

function create() {
    let sql = `CREATE TABLE IF NOT EXISTS payment( 
        UserId varchar(225), 
        foreign key(UserId) references Login(UserId),
        name varchar(255), 
        card_number int (16), 
        expiry_date DATE
        )`;
    mysqlcon.query(sql);
  }


  module.exports = {create};
  