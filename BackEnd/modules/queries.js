var db = require('./database');
var server = require('../server');

/*exports.getGroupName = function(req,res){
    console.log("queries " + req + " " + res);
    db.productGroup.findOne({_id:ObjectId("5697605e32d595340af2882a")},{_id: 0})
    
}*/

var customerObject = {};
var userObject = {};

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

/*exports.getProductsByGroup = function(req,res){
        console.log("queries getProductsByGroup " + req + " " + res);
   db.product.find(function(err,data){
    console.log("queries getProductsByGroup, data " + data);
       if(err){
            console.log(err.message);
            res.send("Error in database!");
        }
        else{
            console.log("queries.js getProductsByGroup &" + data);
            res.send(data);
        }
    
    });*/

/**
  *This function saves new person information to our person
  *collection
  */
exports.saveNewCustomer = function(req,res){
    
    
    var customerTemp = new db.customer(req.body);
    
    customerObject = {
                        forename: req.body.forename,
                         surname: req.body.surname,
                         street: req.body.street,
                         postalcode: req.body.postalcode,
                         city: req.body.city,
                         email: req.body.email,
                         phone: req.body.phone
                        }
    
    loginObject = {
                      username: req.body.username,
                      password: req.body.password,
                      role:"user",
                      cid: customerTemp.id
                    }
    
    /*console.log("_id: " + customerTemp.id);
    var loginObject = { username: "he",
                        password: "he",
                       role:"user",
                       cid: customerTemp.id
                      };*/
                    
    var loginTemp = new db.user(loginObject);
    console.log("req.body.forename: " +req.body.forename);
    //Save it to database
    customerTemp.save(function(err,newcData){
        console.log("newdata: " + newcData);
        
       // var userTemp = new db.user({username: req.body.userw,
    //                               password: req.body.passw,
      //                             role: "user"})
        
        /**db.Friends.update({username:req.session.kayttaja},
                          {$push:{'friends':personTemp._id}},
                          function(err,model)**/
        //userTemp.save(function(err,newData){
            
            //console.log("SEND REDIRECT!!!!!");
            //Make a redirect to root context
            //res.redirect(301,'/persons.html');
            if(err){
                
                res.status(500).json({message:'Fail'});
            }else{
                
                //res.status(200).json({data:newcData});
                
                loginTemp.save(function(err,newuData){
                    
                    if(err){

                        res.status(500).json({message:'Fail'});
                    }else{

                    res.status(200).json({data:newuData});
                        //TÄHÄN MYÖS newcData?
                    }
                });
            }

    });
        
}

//This method updates one person info
exports.updatePerson = function(req,res){
    
    var updateData = {
        name:req.body.name,
        address:req.body.address,
        age:req.body.age
    }
    
    db.Person.update({_id:req.body.id},updateData,function(err){
        
        if(err){
            
            res.status(500).json({message:err.message});
        }else{
            res.status(200).json({message:"Data updated"});
        }
    });
}

/**
  *This function seraches database by name or 
  *by begin letters of name
  */
exports.findPersonsByName = function(req,res){

    var name = req.query.name;

    db.Friends.findOne({username:req.session.kayttaja}).
        populate({path:'friends',match:{name:{'$regex':'^' + name,'$options':'i'}}}).
            exec(function(err,data){
        res.send(data.friends);
    });
    
}

exports.registerCustomer = function(req,res){
    
    var customer = new db.customer(req.body);
    
    console.log("req_body:" + req.body + " res:" + res);
    customer.save(function(err){
        
        if(err){
            
            res.status(500).send({status:err.message});
        }
        else{
            res.status(200).send({status:"Ok"});
        }
    });
}

exports.loginFriend = function(req,res){
    
    var searchObject = {
        username:req.body.username,
        password:req.body.password
    }

    db.Friends.findOne(searchObject,function(err,data){
        
        if(err){
            
            res.send(502,{status:err.message});
            
        }else{
            console.log(data);
            //=< 0 means wrong username or password
            if(data){
                req.session.kayttaja = data.username;
                //Create the token
                var token = jwt.sign(data,server.secret,{expiresIn:'2h'});
                res.send(200,{status:"Ok",secret:token});
            }
            else{
                res.send(401,{status:"Wrong username or password"});
            }
            
        }
    });
}

exports.getFriendsByUsername = function(req,res){
    
    //var usern = req.params.username.split("=")[1];
    db.Friends.findOne({username:req.session.kayttaja}).
        populate('friends').exec(function(err,data){
            
            if(data){
                res.send(data.friends);
            }
            else{
                
                res.redirect('/');
            }
        
        });
}
