var orm = require("../config/orm.js");

var burger = {

    all: function(cb){
        orm.selectAll("burgers",function(res){
            cb(res);
        })
    },
    new: function(cols,name,devoured,cb){
        orm.insertOne("burgers",cols,name,devoured,function(res){
            cb(res);
        })
    },
    update: function(devoured,id,cb){
        orm.updateOne("burgers",devoured,id,function(res){
            cb(res);
        })
    }

}

module.exports = burger;