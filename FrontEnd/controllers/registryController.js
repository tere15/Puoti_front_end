main_module.controller('registryController',function($scope,registryFactory,Flash){

    $scope.navbarData = {
		
        urls:['#/shoppings','#/payment','#/guide','#/login','#/registries'],
        texts:['Ostokset','Maksaminen','Ohjeet','Kirjautuminen','Registeröinti']
    }   
    
    
    $scope.forename = "";
    $scope.surname = "";
    $scope.street = "";
    $scope.postalcode = "";
    $scope.city = "";
    $scope.email = "";
    $scope.phone = "";
    $scope.userw = "";
    $scope.passw = "";    

    $scope.addCustomer = function(){
        //$('#save').attr("disabled", true);
       console.log("hello addCustomer");
        var temp = {
            forename:$scope.forename,
            surname:$scope.surname,
            street:$scope.street,
            postalcode:$scope.postalcode,
            city:$scope.city,
            email:$scope.email,
            phone:$scope.phone,
            username:$scope.userw,
            password:$scope.passw
        }
        console.log("name: " + temp.forename);
        /**if(temp_1.forename.length === 0 || temp_1.surname.length === 0 || temp_1.street.length === 0 || temp_1.postalcode.length === 0 ||
          temp_1.city.length === 0 || temp_1.email.length === 0 || temp_1.phone.length === 0|| temp_2.userw.length === 0 || temp.passw.length === 0){
            
            alert('Need more data!');
            return;
        }**/
        
        registryFactory.addRegistry(temp).then(function(response){
            
            
            //registryFactory.customersArray.push(response.data);
            Flash.create('success', 'New registry added!', 'custom-class');
            $scope.forename = "";
            $scope.surname = "";
            $scope.street = "";
            $scope.postalcode = "";
            $scope.city = "";
            $scope.email = "";
            $scope.phone = "";
            
            //registryFactory.usersArray.push(response.data);
            
            $scope.userw = "";
            $scope.passw = "";
            //Flash.create('success', 'New user added!', 'custom-class');   
            //$('#save').attr("disabled", false);
        },function(error){
            //$('#save').attr("disabled", false);
            Flash.create('warning', 'Failed to add registry!', 'custom-class');
        });
        
        
        
        /**customerFactory.insertLogin(temp_2)(function(response){
            
            customerFactory.customersArray.push(response.data);
            Flash.create('success', 'New login added!', 'custom-class');
            $scope.userw = "";
            $scope.passw = "";
               
            $('#save').attr("disabled", false);
        },function(error){
            $('#save').attr("disabled", false);
            Flash.create('warning', 'Failed to add login!', 'custom-class');
        });**/
    }
});