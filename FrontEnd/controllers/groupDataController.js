main_module.controller('groupDataController',function($scope,groupDataFactory,$location){
   
   
    //$scope.aquaLine.style.border-color ="blue";
    /*var x = document.createElement("HR");
    x.style.color ="blue";
    x.style.width = "12px";
    document.body.appendChild(x);*/
        
    $scope.navbarData = {
		
		urls:['#/shoppings','#/payment','#/guide','#/login'],
		texts:['Ostokset','Maksaminen','Ohjeet','Kirjautuminen']
	}                       
   console.log('groupDataController loaded');
    
    groupDataFactory.getGroupData(dataCallback_group); 
    //groupDataFactory.getGroupData(); 
    
    groupDataFactory.getProductData(dataCallback_product); 
       
    
    $scope.rowClicked = function(id){
        groupDataFactory.selected_id = id;
        console.log(id);

        groupDataFactory.getSelectedProducts(dataCallback_productsByGroup);
        //groupDataFactory.getSelectedProducts(dataCallback_productsByGroup);
        
        
        //productsGroupArray = groupDataFactory.getSelectedProducts(dataCallback_productsByGroup);
        console.log("pga:"  + $scope.productByGroupData.length); //tästä näkee, että valitut tuotteet-taulukko ei päivity
        /*for (product in productsGroupArray){
            console.log(product.pName + ", group:" + product.gId);
              console.log("ööö" + ", group:" );
        }*/
    }
    
   
            
    //    }
        
    
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
    
    function dataCallback_group(dataArrayGroup){
        
        $scope.groupData = dataArrayGroup;

    }
    
 
    
    function dataCallback_product(dataArrayProduct){
        
        $scope.productData = dataArrayProduct;

    }
    
    function dataCallback_productsByGroup(dataArrayProductByGroup){
        
        $scope.productByGroupData = dataArrayProductByGroup;

    }

            
});
