(function(){
    'use strict';
    //var depModules = [];
    var myApp = angular.module("app",['ngRoute']);


    myApp.config(function($routeProvider){



        $routeProvider

            .when('/products',{
                templateUrl:'partial/productDetails.html'
            })

            .when('/aboutUs',{
                templateUrl:'partial/aboutUs.html',

            });



    });


})();
