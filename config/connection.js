var mysql = require('mysql');

var connection = mysql.createConnection({
host:"localhost",
port: 3306,
user:"root",
password:"poopyy.1",
database:"burgers_db"
});

connection.connect(function(err){
    if(err) return err;
    console.log(`Connected as ${connection.threadId}`);

});

module.exports = connection;