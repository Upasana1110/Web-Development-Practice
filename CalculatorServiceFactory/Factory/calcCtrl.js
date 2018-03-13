(function(){
    "use strict";
    angular.module("myApp")
       .controller("myCalc",Calculator);

    function Calculator(calc){

        var vm=this;

        vm.operation = function(type) {
            if (type === "add") {
                vm.result = calc.addValues(vm.No1, vm.No2);
            }
            else if (type === "sub") {
                vm.result = calc.subValues(vm.No1, vm.No2);
            }
            else if (type === "mul") {
                vm.result = calc.mulValues(vm.No1, vm.No2);
            }
            else if (type === "div") {
                vm.result = calc.divValues(vm.No1, vm.No2);
            }
        }
    }
}());