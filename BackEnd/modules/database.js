/* Tietokannan schema*/

var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/lupu', connectionStatus);


console.log("connectionStatus:" + connectionStatus);
function connectionStatus(err, ok){
    
    if(err){
        console.log(err.message);
    }else{
        console.log("We are connected!");
    }

}

var productGroup = mongoose.model('productGroup',{ 
    gName: String
}, 'productGroup');

console.log("database.js loaded");

exports.productGroup = productGroup;