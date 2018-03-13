(function(){
    "use strict";
    var app = angular.module("myApp",[]);

    app.factory("calc",function(){

        function addValues(a,b){

            return parseInt(a)+ parseInt(b);
        }

        function subValues(a,b){

            return parseInt(a)- parseInt(b);
        }

        function mulValues(a,b){

            return parseInt(a)* parseInt(b);
        }

        function divValues(a,b){

            return parseInt(a)/ parseInt(b);
        }

        return {
            addValues:addValues,
            subValues:subValues,
            mulValues:mulValues,
            divValues:divValues

        };

    });

}());