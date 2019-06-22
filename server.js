var express = require('express');
var path = require('path');
var PORT = process.env.PORT || 8080;

var app = express();

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, '/public')));
console.log(__dirname);
app.use(express.urlencoded({extended:true}));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({extended:true}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controller.js");

app.use(routes);

app.listen(PORT,function(){
    console.log("Server listening on: http://localhost:" + PORT);
})