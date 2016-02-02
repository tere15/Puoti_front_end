var express = require ("express");
var query = require('./queries');
var router = express.Router();


console.log("product.js loaded, router: " + router);


router.get('/',function(req,res){
    query.getAllProducts(req,res);
});

module.exports = router;