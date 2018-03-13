(function(){
    "use strict";
    angular.module("app")
        .controller("ProductController",ProductController);

    function ProductController(readJSON){

        var vm=this;
        readJSON.read("data.JSON").then(function(data){
            vm.myDiv = data;
        });

    }
}());