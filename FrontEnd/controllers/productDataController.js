main_module.controller('productDataController',function($scope,groupDataFactory,$location){
                       
  console.log('productDataController loaded');
    
    groupDataFactory.getProductData(dataCallback); 
    
    
    
    function dataCallback(dataArray){
        
        $scope.productData = dataArray;
    }
                       
});
