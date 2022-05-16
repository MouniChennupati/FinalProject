const mysqlcon = require('../../connection');

module.exports = function(app) {

//------products VIEW---
app.get('/products', (req, res) => {
    if(thisuser !== '*'){
    var sql="SELECT * FROM products";
    mysqlcon.query(sql, (err, data) => {
        res.render('home', {data: data});      
    });
    }
    else
    res.redirect('/login');
});

//-------------products DELETE--------
app.get('/productsdel/:id', (req, res) => {
    hid = req.params.id;

    mysqlcon.query('delete from products where product_id = "' + hid + '"', (err, res) => {
        if(err) throw error;
    })

    res.redirect('/products');
});

}