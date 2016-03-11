

var main_module = angular.module('main_module',['ngRoute','ngResource','flash']);


main_module.config(function($routeProvider){
    
    main_module.run(function($http){
    
        $http.defaults.headers.common['cache-control'] = 'private, no-store, must-revalidate';
    });
    
    
    $routeProvider.when('/',{
        // Triggeröityy kun url latautuu eli tullaan '/' kohtaan
        templateUrl:'partial_main.html', //toteuttaa tietyn osan dokumenttia (siksi partial)
        controller:'groupController',
        factory:'groupFactory'
    
        /*}).when('/groups',{
        
        templateUrl:'partial_main.html', //toteuttaa tietyn osan dokumenttia (siksi partial)
        controller:'groupController',
        factory:'groupFactory'
    });*/
    
    }).when('/update',{
        
        templateUrl:'partial_update.html', 
        controller:'groupController',
        factory:'groupFactory'
        
     }).when('/registries',{
        
        templateUrl:'partial_registry.html', 
        controller:'registryController',
        factory:'registryFactory'
     
        
    }).when('/login',{
        
        templateUrl:'partial_login.html',
        controller:'loginController',
        factory:'loginFactory'
    });

                        
                       /*).when('/list',{
        // Jos näkymä tarvii tietoa backendiltä, tehään kontrolleri ja liimataan tässä
        //yhteen näkymä ja kontrolleri. Tehään myös factory, jos esim.
        // 2. näkymässä tarvitaan samaa dataa. Factoryssa kaikki data tallessa.
    
        templateUrl:'partial_dataView.html',
        controller: 'friendDataController',
        resolve:{loginRequired: loginRequired}
        
    
    ).when('/new',{
        
        templateUrl:'partial_newView.html',
        controller: 'friendNewController',
        resolve:{loginRequired: loginRequired}


        
    }).when('/modify',{
        
        templateUrl:'partial_modifyView.html',
        controller: 'friendModifyController',
        resolve:{loginRequired: loginRequired}
        
    
    }).when('/delete',{
        
        templateUrl:'partial_deleteView.html',
        controller: 'friendDeleteController',
        resolve:{loginRequired: loginRequired}
        
    }); */
    
    //.otherwise({redirectTo:'/'});
    
    
});