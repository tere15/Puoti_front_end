main_module.controller('groupDataController',function($scope,groupDataFactory,$location){
                       
  console.log('groupDataController loaded');
    
    //groupDataFactory.getGroupData(dataCallback); 
    groupDataFactory.getGroupData(); 
    
    function dataCallback(dataArray){
        
        $scope.groupData = dataArray;
        // testi: $location.path('/');
    }
                       
});
