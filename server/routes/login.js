const mysqlcon = require('../../connection');

module.exports = function(app) {
    //-------------------------LOGIN----------------

app.get('/login', (req, res) => {
    res.render('login');
  });

app.post('/login', (req, res, next) => {
    var logdata = {
        UserId: req.body.UserId,
        password: req.body.password
    };
    
    mysqlcon.query('SELECT * FROM Login WHERE UserId ="' + logdata.UserId +'"', function(err, result) {
        if (err) throw err;
        if(result.length > 0) {
            console.log(result);
            
                if(result[0].password === logdata.password) {
                    thisuser = result[0].UserId;
                    res.redirect('/home');
                } else{
                    res.send('Incorrect password');
                }
           
        } else {
            res.send('User does not exist');
        }
    })
});

app.get('/signout', (req, res) => {
    mysqlcon.query('delete from cart where UserId="' + thisuser +'"', function(err, result) {
        if(err) throw err;
    });
    mysqlcon.query('delete from login where UserId="' + thisuser +'"', function(err, result) {
        if(err) throw err;
    });
    thisuser = "*";
    res.redirect('/login');
});

app.get('/logout', (req, res) => {
    thisuser = "*";
    res.redirect('/login');
});

}
