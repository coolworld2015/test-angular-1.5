(function() {
    "use strict";

    /*  var module = angular.module("psMovies", ["ngRoute"]);
    
       module.config(function($routeProvider) {
       
       $routeProvider
            .when("/list", { template: "<movie-list></movie-list>"})
            .otherwise({ redirectTo: "/list"});
        
    });
  */  

 
	
	angular
		.module('app', ["ngComponentRouter", "ngAnimate"]);
		
//----------------------------------------	
 	angular
		.module('app')
		.value("$routerRootComponent", "movieApp");
}());