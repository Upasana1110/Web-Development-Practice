(function(){
    "use strict";
    angular.module("app")
        .controller("ctrl",Controller);

    function Controller(readJSON){

        var vm=this;
        readJSON.read("http://www.snagfilms.com/apis/films.json?limit=10").then(function(data){
            vm.myDiv = data;
        });

    }
})();