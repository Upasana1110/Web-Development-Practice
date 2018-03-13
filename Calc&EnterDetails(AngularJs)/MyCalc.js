(function(){
    'use strict';
    var app = angular.module('myApp',[]);
    app.controller('myCalc',myCalc);

    function myCalc(){
        var math = this;

        math.addValues=function(){
            math.result = parseInt(math.No1)+parseInt(math.No2);

        };

        math.subValues=function(){
            math.result = parseInt(math.No1)-parseInt(math.No2);

        };


        math.mulValues=function(){
            math.result = parseInt(math.No1)*parseInt(math.No2);

        };

        math.divValues=function(){
            math.result = parseInt(math.No1)/parseInt(math.No2);

        };

    }
})();