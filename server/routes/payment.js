const mysqlcon = require('../../connection');

module.exports = function(app) {
    //------------payment----------
app.get('/payment', (req, res) => {
    if(thisuser !== '*') {
        var sql='SELECT * FROM payment WHERE UserId = "' + thisuser + '"';
    mysqlcon.query(sql, (err, data) => {
        if(data.length === 0)
            res.render('payment_form'); 
        res.render('payment', {data: data});     
    });
    }
    else
    res.redirect('/login');
});

//-----------payment-form----
app.get('/payment_form', (req, res) => {
    res.render('payment_form');
})

//-------post-payment-form----
app.post('/payment_form', (req, res) => {
    var cdata = {
        UserId: thisuser,
        name: req.body.name,
        card_number: req.body.card_number,
        expiry_date: req.body.expiry_date
    };

    var sql = 'INSERT into payment SET ? ';
    mysqlcon.query(sql, cdata, (err, result) => {
        if(err) throw err;
    });

    res.redirect('/cart');
});
}