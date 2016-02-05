main_module.controller('groupDataController',function($scope,groupDataFactory,$location){
                       
   console.log('groupDataController loaded');
    
    groupDataFactory.getGroupData(dataCallback_group); 
    //groupDataFactory.getGroupData(); 
    
    groupDataFactory.getProductData(dataCallback_product); 
       
    
    $scope.rowClicked = function(id){
        groupDataFactory.selected_id = id;
        console.log(id);
    }
    //Check if factory does not has the data
    /*if(groupDataFactory.groupsArray.length === 0)
    {
    
        var response = groupDataFactory.getGroupData();
        response.then(function(data){
            
            groupDataFactory.groupsArray = data;
            $scope.groupData = data;
        });
                    
        console.log("controller data:" + data);
    }else{
        $scope.groupData = groupDataFactory.groupsArray;
        console.log("controller ok");
    }*/
    
    function dataCallback_group(dataArray){
        
        $scope.groupData = dataArray;
        // testi: $location.path('/');
    }
    function dataCallback_product(dataArray){
        
        $scope.productData = dataArray;
        // testi: $location.path('/');
    }
                       
});
