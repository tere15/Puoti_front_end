main_module.factory('groupDataFactory', function($resource,$http){
        
    var factory = {};
    factory.selected_id = null;
    
    
                            
    factory.groupsArray = [];
    factory.productsArray = [];
                    
    /*factory.getGroupData = function(){
        
        var resource = $resource('/groups',{},{'get':{method:'GET'}});
         
         console.log("groupDataFactory resource: " + resource);
        
        return resource.query().$promise;
    }*/
    
   
    
    //In this array we cache the friends information,
    //so that once stored in array we wont make any further request
    
    factory.getGroupData = function(callbackFunc){
        console.log("factory_1: getGroupData ");
        if(factory.groupsArray.length === 0){
            //Set your own headers in request like this
            console.log("factory_2: getGroupData ");
            $http.defaults.headers.common['x-access-token'] = sessionStorage['token'];
            
            var resource = $resource('/groups',{},{'get':{method:'GET'}});
            
            resource.query().$promise.then(function(data){
                
              factory.groupsArray = data;
           
              callbackFunc(factory.groupsArray);    
                
            },function(error){
                
                factory.groupsArray = [];
                callbackFunc(factory.groupsArray);
            });
        }
        else{
            
            callbackFunc(factory.groupsArray);
        }
    }
    
      factory.getProductData = function(callbackFunc){

        if(factory.productsArray.length === 0){
            //Set your own headers in request like this

            $http.defaults.headers.common['x-access-token'] = sessionStorage['token'];

            var resource = $resource('/update',{},{'get':{method:'GET'}});
            console.log("factory_3 resource: getProductData " + resource);
            resource.query().$promise.then(function(data){
              console.log("factory_4: getProductData " + data);
              factory.productsArray = data;

              callbackFunc(factory.productsArray);    

            },function(error){

                factory.productsArray = [];
                callbackFunc(factory.productsArray);
            });
        }
        else{

            callbackFunc(factory.productsArray);
        }
    }

   //Updates the data to back end
    /*factory.updateData = function(data){
        $http.defaults.headers.common['x-access-token'] = sessionStorage['token'];        
        var resource = $resource('/persons',{},{'put':{method:'PUT'}});
        return resource.put(data).$promise;
    }*/
    
    
    /**
      *This function searches a person from array containing an id
      *that was stored when user cliked the row in the partial_dataView
      *page. When it finds the correct one from the array, it returns
      *that object.
      */
    /*factory.getSelectedFriend = function(){
        
        for(var i = 0; i < factory.friendsArray.length; i++){
            
            if(factory.friendsArray[i]._id === factory.selected_id){
                
                return factory.friendsArray[i];
            }
        }
    }*/
    
    //Adds the data to back end
    /*factory.insertData = function(data){
        $http.defaults.headers.common['x-access-token'] = sessionStorage['token'];        
        var resource = $resource('/persons',{},{'post':{method:'POST'}});
        return resource.post(data).$promise;
    }*/
    
    
    
    //Adds the data to back end
/*    factory.deleteData = function(data){
        $http.defaults.headers.common['x-access-token'] = sessionStorage['token'];        
       $http.defaults.headers.common['content-type'] = 'application/json'; 
        var resource = $resource('/persons',{},{'delete':{method:'DELETE'}});
        return resource.delete(data).$promise;
    }
    
     factory.search = function(term){
        
        var resource = $resource('/persons/search/',{name:term},{'get':{method:'GET'}});
        return resource.query().$promise;
    }*/
    
    
                    
                    
    return factory;
                    
    
                    
});
