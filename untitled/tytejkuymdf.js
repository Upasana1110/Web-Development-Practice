(function(){
    var app = angular.module('app',[]);
    app.controller('c',myCalc);

    function myCalc(){
        var ca = this;
        ca.add=function(){
            ca.result = parseInt(ca.n1)+parseInt(ca.n2);
        };
    }

})();