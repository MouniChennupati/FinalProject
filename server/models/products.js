const mysqlcon = require('../../connection');

//CREATE table products

function create() {
    let sql = `CREATE TABLE IF NOT EXISTS products(
        product_id int(10) primary key,
        img varchar(56),
        product_name varchar(66),
        price int(10)
        )`;
    mysqlcon.query(sql);
  }

//ADD initial products

function add() {
    mysqlcon.query('select * from products', function (err, result) {
        if(result.length === 0){ 
            let sqlrun = `insert into products values
            (1, 'img/2.jpeg', 'Red Velvet', 89), 
            (2, 'img/3.jpg', 'Vanilla', 52),
            (3, 'img/4.jpeg', 'Strawberry', 29),
            (4, 'img/5.jpeg', 'Vanilla Rose', 38),
            (5, 'img/6.jpg', 'Chocolate', 19),
            (6, 'img/7.jpg', 'Mixed Layers', 29)
             `;
            mysqlcon.query(sqlrun, (err, result) => {
                if(err) throw err;
            });
}
});
}  


  module.exports = {create, add};