var express = require("express");
var path = require("path");
//var fs = require('fs');
var jwt = require('jsonwebtoken');
var bodyParser = require("body-parser");
var database = require('./modules/database');
var queries = require('./modules/queries');
var group = require('./modules/group');
var product = require('./modules/product');


var session = require('express-session');
var app = express();    // luodaan serveri

//=====================MIDDLEWARES=====================//

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/',express.static(path.join(__dirname, '../FrontEnd/views')));
app.use('/FrontEnd/css',express.static(path.join(__dirname, '../FrontEnd/css')));
app.use('/FrontEnd/lib',express.static(path.join(__dirname, '../FrontEnd/lib')));
app.use('/FrontEnd',express.static(path.join(__dirname, '../FrontEnd')));
app.use('/FrontEnd/controllers',express.static(path.join(__dirname, '../FrontEnd/controllers')));
app.use('/FrontEnd/factories',express.static(path.join(__dirname, '../FrontEnd/factories')));
app.use('/FrontEnd/factories',express.static(path.join(__dirname, '../FrontEnd/fonts')));
app.use('/FrontEnd/directives',express.static(path.join(__dirname, '../FrontEnd/directives')));



app.use(function(req,res,next){                     
    
    console.log(req.method);
    console.log(req.path);
    console.log(__dirname);
    console.log(req.body);
    console.log(database.productGroup.gName);
    //database.myFunction();
    //Send reques forward in stack
    next(); // seuraavaan middlewareen
});

app.use('/groups', group);       //tästä triggeröityy group.js (käsiteltävä router) (/groups pyyhitään tässä pois)??
app.use('/update', product);


//=====================ROUTERS=====================//

//app.get("/groups", function(req,res){
//    queries.getAllGroups(req,res);
//    res.send("Hello persons there!");
//});


app.listen(3000);