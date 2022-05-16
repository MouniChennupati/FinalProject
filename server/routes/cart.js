const mysqlcon = require('../../connection');

module.exports = function(app) {
    //------------cart VIEW----------
    app.get('/cart', (req, res) => {
        if(thisuser !== '*') {
            var sql = 'SELECT * from products where product_id in (SELECT product_id FROM cart WHERE UserId = "' + thisuser + '") ';
            mysqlcon.query(sql, (err, data) => {
            res.render('cart', {data: data});      
        });
        }
        else
        res.redirect('/login');
    });

    //-------------cart DELETE--------
    app.get('/cartdel/:id', (req, res) => {
        hid = req.params.id;

        mysqlcon.query('delete from cart where product_id = "' + hid + '" LIMIT 1', (err, res) => {
            if(err) throw error;
        })

        res.redirect('/cart');
    });

    //-----------ADD to cart-------------
    app.get('/cart/:id', (req, res) => {
        if(thisuser !== '*'){
            var data = {
                product_id: req.params.id,
                UserId: thisuser
            };

            var sql = 'INSERT into cart SET ? ';
            mysqlcon.query(sql, data, (err, result) => {
                if(err) throw err;
            });

            res.redirect('/cart');
        }
        else
        res.redirect('/login');
    });

}