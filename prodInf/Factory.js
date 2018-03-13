(function(){
    "use strict";
    var app = angular.module("app");

    app.factory("readJSON",function($http, $q){

        function read(filename){
            var result = {};
            var defer = $q.defer();


            $http.get(filename).then(function (response) {
                result = response.data;
                defer.resolve(response.data);
            });
            return defer.promise;
        }


        return {
            read:read

        };

    });

}());