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
    burger.new(["burger_name","devoured"],req.body.burger_name,req.body.devoured,function(result){
        res.json(result);
        console.log("new: ",result);
    });
});

router.put("/api/burgers/:id",function(req,res){
    burger.update(true,req.params.id,function(result){
        if(result.affectedRows === 0){
            res.status(404).end();
        }
        else{
            res.json(result);
            console.log("updated: ",result);
        }
    })
})

module.exports = router;