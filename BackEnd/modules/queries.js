var db = require('./database');
var server = require('../server');


exports.getAllGroups = function(req,res){
    console.log("queries " + req + " " + res);
   db.productGroup.find(function(err,data){
    
       if(err){
            console.log(err.message);
            res.send("Error in database!");
        }
        else{
            console.log("queries.js loaded &" + data);
            res.send(data);
        }
    
    });
}