var express = require ("express");
var query = require('./queries');
var router = express.Router();


console.log("group.js loaded, router: " + router);


router.get('/',function(req,res){
    query.getAllGroups(req,res);
});


module.exports = router;