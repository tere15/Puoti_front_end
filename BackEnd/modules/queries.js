var db = require('./database');
var server = require('../server');

/*exports.getGroupName = function(req,res){
    console.log("queries " + req + " " + res);
    db.productGroup.findOne({_id:ObjectId("5697605e32d595340af2882a")},{_id: 0})
    
}*/

exports.getAllGroups = function(req,res){
    console.log("queries getAllGroups " + req + " " + res);
   db.productGroup.find(function(err,data){
     console.log("queries getAllGroups, data " + data);
       if(err){
            console.log(err.message);
            res.send("Error in database!");
        }
        else{
            console.log("queries.js getAllGroups &" + data);
            res.send(data);
        }
    
    });
}

exports.getAllProducts = function(req,res){
        console.log("queries getAllProducts " + req + " " + res);
   db.product.find(function(err,data){
    console.log("queries getAllProducts, data " + data);
       if(err){
            console.log(err.message);
            res.send("Error in database!");
        }
        else{
            console.log("queries.js getAllProducts &" + data);
            res.send(data);
        }
    
    });
}