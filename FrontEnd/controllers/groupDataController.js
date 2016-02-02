main_module.controller('groupDataController',function($scope,groupDataFactory,$location){
                       
  console.log('groupDataController loaded');
    
    groupDataFactory.getGroupData(dataCallback); 
    //groupDataFactory.getGroupData(); 
    
    
    
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
    
    function dataCallback(dataArray){
        
        $scope.groupData = dataArray;
        // testi: $location.path('/');
    }
                       
});
