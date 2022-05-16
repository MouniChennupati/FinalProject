const mysqlcon = require('../../connection');

module.exports = function(app) {

//---------------REGISTER-----------------------

app.get('/', (req, res) => {
    res.render('login');
  });

//   app.get('/login', (req, res) => {
//     res.render('login');
//   });

  app.get('/login', (req, res) => {
    res.render('login');
  });

app.post('/register', (req, res, next) => {

    var data = { 
        Email: req.body.Email,
        UserId: req.body.UserId
    };

    var logdata = {
        UserId: req.body.UserId,
        password: req.body.password
    };

    mysqlcon.query('SELECT Email FROM Register WHERE Email ="' + data.Email +'"', function (err, result) {
        if (err) throw err;
        console.log(result.length);
        if(result.length > 0){  
            res.send('Email exists');
        } else {
            mysqlcon.query('SELECT UserId FROM Login WHERE UserId ="' + logdata.UserId +'"', function (err, result){
                if (err) throw err;
                console.log(result.length);
                if(result.length > 0){  
                    res.send('UserId exists!');
                } else {
                    var sql = 'INSERT into Login SET ? ';
                    mysqlcon.query(sql, logdata, (err, result) => {
                        if(err) throw err;
                    });

                    var sql = 'INSERT into Register SET ? ';
                    mysqlcon.query(sql, data, (err, result) => {
                        if(err) throw err;
                    });
                }
                thisuser = logdata.UserId;
                res.redirect('/home');
            });
        }
            });
});
}