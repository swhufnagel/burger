var mysql = require('mysql');

var connection = mysql.createConnection({
host:"localhost",
port: 3306,
user:"root",
password:"poopyy.1",
database:"burgers_db"
});
var del = connection._protocol._delegateError;
connection._protocol._delegateError = function(err, sequence){
  if (err.fatal) {
    console.trace('fatal error: ' + err.message);
  }
  return del.call(this, err, sequence);
};
connection.connect(function(err){
    if(err) return err;
    console.log(`Connected as ${connection.threadId}`);

});

module.exports = connection;