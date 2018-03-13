(function(){
    "use strict";
    var app = angular.module("app");
    app.controller("CSController",['appconstants',CSController]);
    // app.controller("ProductController",ProductController);

    function CSController(appconstants){

        var vm=this;

        vm.appTitle = appconstants.APP_TTITLE;
        vm.appVersion = appconstants.APP_VERSION;
    }

   //retrieve
}());

