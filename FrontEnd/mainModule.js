

var main_module = angular.module('main_module',['ngRoute','ngResource']);


main_module.config(function($routeProvider){
    
    $routeProvider.when('/',{
        // Triggeröityy kun url latautuu eli tullaan '/' kohtaan
        templateUrl:'partial_mainView.html', //toteuttaa tietyn osan dokumenttia (siksi partial)
        controller:'groupDataController',
        factory:'groupDataFactory'
    
        /*}).when('/groups',{
        
        templateUrl:'partial_mainView.html', //toteuttaa tietyn osan dokumenttia (siksi partial)
        controller:'groupDataController',
        factory:'groupDataFactory'
    });*/
    
    }).when('/update',{
        
        templateUrl:'partial_updateView.html', 
        controller:'groupDataController',
        factory:'groupDataFactory'
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