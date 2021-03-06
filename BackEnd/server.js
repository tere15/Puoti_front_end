var express = require("express");
var path = require("path");
var https = require('https');
var fs = require('fs');
var jwt = require('jsonwebtoken');
var bodyParser = require("body-parser");
var database = require('./modules/database');
var queries = require('./modules/queries');
var registry = require('./modules/registry');
var user = require('./modules/user');
var group = require('./modules/group');
var product = require('./modules/product');
var mongo_module = require('./modules/mongo_module');

var options = {
    
    key:fs.readFileSync('server.key'),
    cert:fs.readFileSync('server.crt'),
    requestCert:false,
    rejectUnauthorized:false
}



//This is used for createing a secret key value
//for our session cookie
var uuid = require('uuid');

//Create a secret for our web token
var secret = uuid.v1();

exports.secret = secret;

var session = require('express-session');

//This is used to create a session object for client
var session = require('express-session');

var app = express();    // luodaan serveri

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3000);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");

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

//app.use('/users',user);

app.get('/logout',function(req,res){
    
    req.session.destroy();
    res.redirect('/');
});

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
app.use('/registries', registry);

app.get('/logout',function(req,res){
    
    req.session.destroy();
    res.redirect('/');
});

app.use(function(req,res,next){
    //Read the token from request
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    
    //Check if there was a token
       if(token){
            //verity that token is not 'guessed' by the client and it matches
            //the one we craeted in login phase
            jwt.verify(token,secret, function(err, decoded) {
                //There was error verifying the token
                if(err){

                    return res.send(401);
                }else{

                    req.decoded = decoded; 
                    console.log(req.decoded);
                    next();
                }
            });
        }else{
            
            res.send(403);
        }
});


//==============================OUR REST API MIDDLEWARES======================================//


//This router checks if client is logged in or not
/**app.get('/isLogged',function(req,res){
    //User is logged in if session contains kayttaja attribute
    console.log("logged info:" + req.session.kayttaja);
    if(req.session.kayttaja){
        res.status(200).send([{status:'Ok'}]);   
    }
    else{
        
       res.status(401).send([{status:'Unauthorized'}]);  
    }
});**/

https.createServer(options,app).listen(app.get('port') ,app.get('ip'), function() 
{
    console.log("Express server started");
});


//=====================ROUTERS=====================//

//app.get("/groups", function(req,res){
//    queries.getAllGroups(req,res);
//    res.send("Hello persons there!");
//});


//app.listen(3000);