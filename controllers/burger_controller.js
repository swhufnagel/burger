var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/",function(req,res){
    burger.all(function(data){
        var menu = {
            burgers: data
        }
        console.log("menu ", menu.burgers);
        res.render("index", menu);
    })
});

router.post("/api/burgers",function(req,res){
    burger.new(["burger_name","devoured"],req.body.burgerName,req.body.devoured,function(result){
        res.json(result);
        console.log("new: ",result);
    });
});

router.put("api/burgers/:id",function(req,res){
    burger.update(req.body.devoured,req.params.id,function(result){
        res.json(result);
        console.log("updated: ",result);
    })
})

module.exports = router;