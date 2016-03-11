main_module.factory('registryFactory',function($resource,$http){

     var factory = {};
    factory.selected_id = null;
   // factory.customersArray = [];
    //factory.usersArray = [];
    //In this array we cache the customers information,
    //so that once stored in array we wont make any further request
    /**factory.friendsArray = [];
    
    factory.getFriendData = function(callbackFunc){
        
        if(factory.friendsArray.length === 0){
            //Set your own headers in request like this
            $http.defaults.headers.common['x-access-token'] = sessionStorage['token'];
            var resource = $resource('/friends',{},{'get':{method:'GET'}});
            resource.query().$promise.then(function(data){
                
              factory.friendsArray = data;
              callbackFunc(factory.friendsArray);    
                
            },function(error){
                
                factory.friendsArray = [];
                callbackFunc(factory.friendsArray);
            });
        }
        else{
            
            callbackFunc(factory.friendsArray);
        }
    }**/
    
    //Updates the data to back end
    factory.updateData = function(data){
        $http.defaults.headers.common['x-access-token'] = sessionStorage['token'];
        var resource = $resource('/customers',{},{'put':{method:'PUT'}});
        return resource.put(data).$promise;
    }
    
    /**factory.deleteData = function(data){
        $http.defaults.headers.common['x-access-token'] = sessionStorage['token'];
        $http.defaults.headers.common['content-type'] = 'application/json'; 
        var resource = $resource('/persons',{},{'delete':{method:'DELETE'}});
        return resource.delete(data).$promise;
    }**/
    
    /**
      *This function searches a customer from array containing an id
      *that was stored when user cliked the row in the partial_dataView
      *page. When it finds the correct one from the array, it returns
      *that object.
      */
    /**factory.getSelectedCustomer = function(){
        
        for(var i = 0; i < factory.customersArray.length; i++){
            
            if(factory.customersArray[i]._id === factory.selected_id){
                
                return factory.customersArray[i];
            }
        }
        
    }**/
    
    //Updates the data to back end
    factory.addRegistry = function(data){
        $http.defaults.headers.common['x-access-token'] = sessionStorage['token'];
        var resource = $resource('/registries',{},{'post':{method:'POST'}});
        return resource.post(data).$promise;
    }
    
    //Updates the data to back end
    factory.insertCustomerLogin = function(data){
        $http.defaults.headers.common['x-access-token'] = sessionStorage['token'];
        var resource = $resource('/registries',{},{'post':{method:'POST'}});
        return resource.post(data).$promise;
    }
    
    /**factory.search = function(term){
        $http.defaults.headers.common['x-access-token'] = sessionStorage['token'];
        var resource = $resource('/persons/search/',{name:term},{'get':{method:'GET'}});
        return resource.query().$promise;
    }**/
    
    return factory;
    
    
    
});