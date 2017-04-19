var mysql = require('mysql')

module.exports = function() {

  // Clound 9 DataBase Setting
  // var connection = mysql.createConnection({
  //   host     : 'localhost',
  //   user     : 'justinho',
  //   password : '',
  //   database : 'c9'
  // });

  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '12345678',
    database : 'my_mac_db'
  });

  connection.connect();

  return connection;


  // connection.query(sql_statment, function (err, rows, fields) {});

  // connection.end();

}()
