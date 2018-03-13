(function(){
    'use strict';
    var app = angular.module('myApp');
    app.controller('emp',emp);

    function emp() {
        var ed = this;
        ed.calculate = function () {
            ed.daValues = parseInt(ed.basic) * (parseInt(ed.da) / 100)
            ed.hraValues = parseInt(ed.basic) * (parseInt(ed.hra) / 100)
            ed.pfValues = parseInt(ed.basic) * (parseInt(ed.pf) / 100)
            ed.paValues = (ed.check) ? 100 : 0
            ed.total = parseInt(ed.basic) + ed.daValues + ed.hraValues + ed.paValues - ed.pfValues
        }
    }
    })();
