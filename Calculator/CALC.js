function add(){
    var a = parseInt(document.getElementById("no1").value);
    var b = parseInt(document.getElementById("no2").value);
    var result = a + b;
    document.getElementById("ans").value=result;

}

function subtract(){

    var a = parseInt(document.getElementById("no1").value);
    var b = parseInt(document.getElementById("no2").value);
    var result = a - b;
    document.getElementById("ans").value=result;
}

function multiply(){
    var a = parseInt(document.getElementById("no1").value);
    var b = parseInt(document.getElementById("no2").value);
    var result = a * b;
    document.getElementById("ans").value=result;
}

function divide(){
    var a = parseInt(document.getElementById("no1").value);
    var b = parseInt(document.getElementById("no2").value);
    var result = a / b;
    document.getElementById("ans").value=result;
}
