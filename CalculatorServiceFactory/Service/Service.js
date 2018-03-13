(function(){
    "use strict";
    var app = angular.module("app",[]);

    app.service("calculator",calculator);

            function calculator() {

                this.addValues =  function(a, b) {

                    return parseInt(a) + parseInt(b);
                }

                this.subValues =  function(a, b) {

                    return parseInt(a) - parseInt(b);
                }

                this.mulValues =  function(a, b) {

                    return parseInt(a) * parseInt(b);
                }

                this.divValues =  function(a, b) {

                    return parseInt(a) / parseInt(b);
                }
            }

}());