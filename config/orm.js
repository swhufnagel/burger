var connection = require('../config/connection.js');


var orm = {
    selectAll: function(table,cb){
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString,function(err,res){
            if(err) throw err;
            cb(res);
        })
    },
    insertOne: function(table,cols,name,devoured,cb){
        var queryString = "INSERT INTO "+ table + "("+cols+") VALUES (?,?)";
        connection.query(queryString,[name,devoured],
            function(err,res){
                if(err) throw err;
                cb(res);
        })
    },
    updateOne: function(table,devoured,id,cb){
        var queryString = "UPDATE "+table+" SET devoured = ? WHERE id=?";
        connection.query(queryString,[devoured,id],function(err,res){
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
              }    
            cb(res);
        })
    }
}

module.exports = orm;