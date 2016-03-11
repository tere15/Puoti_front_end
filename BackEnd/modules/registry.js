var express = require("express");
var query = require('./queries');
//var server = require('../server');
var router = express.Router();




/**router.get('/',function(req,res){
    query.getAllGroups(req,res);
});**/

console.log("rregistry.js loaded, router: " + router);

//Handle POST requets for /registries context
router.post('/',function(req,res){
   // mysql.addNewFriend(req,res);
    console.log("hello");
    query.saveNewCustomer(req,res);
});

////Handle POST requets for /persons context

//router.post('/',function(req,res){
/**    mysql.addNewRegistry(req,res);
    //db.saveNewPerson(req,res);
**/
//});


router.put('/',function(req,res){
/**    mysql.updateRegistry(req,res);
    //db.updatePerson(req,res);
});**/
});


module.exports = router;