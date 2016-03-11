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

/*var order = mongoose.model('order',{
    orderStatus: Boolean,
    productId: Array,
    productCount: Number
}, 'order');*/


var productGroup = mongoose.model('productGroup',{ 
    gName: String
}, 'productGroup');

var product = mongoose.model('product',{
    pName: String,
    prize: Number,
    stockCount: Number,
    description: String,
    gId: String
}, 'product');

var customer = mongoose.model('customer',{
    forename: String,
    surname: String,
    street: String,
    postalcode: String,
    city: String,
    email: String,
    phone: String
}, 'customer');

var user = mongoose.model('user',{
    
    username: {type:String,unique:true},
    password: String,
    role: String,
    cid:{type:mongoose.Schema.Types.ObjectId,ref:'customer'}

},'user');
//gId:[{type:mongoose.Schema.Types.ObjectId,ref:'productGroup'}]

//var name = productGroup.gName;

console.log("database.js loaded");

exports.productGroup = productGroup;
//exports.order = order;
exports.product = product;
//exports.productGroup.gName = name;
exports.customer = customer;
exports.user = user;