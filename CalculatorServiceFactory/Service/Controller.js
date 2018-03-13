(function(){
    "use strict";
    angular.module("app")
        .controller("myCalc",myCalc);

    function myCalc(calculator){

        var vm=this;

        vm.operation = function(type) {
            if (type === "add") {
                vm.result = calculator.addValues(vm.No1, vm.No2);
            }
            else if (type === "sub") {
                vm.result = calculator.subValues(vm.No1, vm.No2);
            }
            else if (type === "mul") {
                vm.result = calculator.mulValues(vm.No1, vm.No2);
            }
            else if (type === "div") {
                vm.result = calculator.divValues(vm.No1, vm.No2);
            }
        }
    }
}());