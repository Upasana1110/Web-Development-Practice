function Multiply() {
    var counter = 1;

    for (var i = 0; i <= arguments.length - 1; i++) {
        counter = counter * arguments[i];
    }
    var resultElement = document.getElementById("Result");
    resultElement.innerHTML=counter;
    console.log(counter);
}
