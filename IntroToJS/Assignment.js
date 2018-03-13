//1. Get 3 numbers from user and display which is greatest.
function displayGreatest() {
    var a=parseFloat(prompt("Enter a number:"));
    var b=parseFloat(prompt("Enter a number:"));
    var c=parseFloat(prompt("Enter a number:"));

    console.log("The first number is: " + a);
    console.log("The second number is: " + b);
    console.log("The third number is: " + c);

    if(a >= b && a >= c){
        console.log("a holds the greatest value: " + a);
    } else if(b >= a && b >= c){
        console.log("b holds the greatest value: " + b);
    } else {
        console.log("c holds the greatest value: " + c);
    }

}

displayGreatest();



/*2. Get 2 numbers from user and display range between those two nos. Enter Number 1:1 - will ask second no:10, then it should display
1 to 10.
I can enter 1 to 10 or 10 to 1. if 1 to 10 display 1,2,3,...10 and 10 to 1 then descending
i.e. 10,9,8,....1
In  the same case if user enters Num1:10 and Num2:1 then it should also display 10 to 1. */
function ascDesc() {
    var a = parseFloat(prompt("Enter a number:"));
    var b = parseFloat(prompt("Enter a number:"));

    console.log("The first number is: " + a);
    console.log("The second number is: " + b);

    var result = "";


    if (a <= b) {
        for (var i = a; i <= b; i++) {
            result += i + ",";
        }
            console.log("The range is: " + result);
    }else{
        for (var j = a; j >= b; j--) {
            result += j + ",";
        }
        console.log("The range is: " + result);
    }
}
ascDesc();



/*3.  Num1:10
Num2:50
Skip: 3
Output 10 13 16...50
Apply ascending and descending functionality.*/
function ascDescSkip() {
    var a = parseFloat(prompt("Enter a number:"));
    var b = parseFloat(prompt("Enter a number:"));
    var c = parseFloat(prompt("Skip number:"));

    console.log("The first number is: " + a);
    console.log("The second number is: " + b);
    console.log("Skip: " + c);


    var result = "";


    if (a <= b) {
        for (var i = a; i <= b; i+=c) {
            result += i + ",";
        }
        console.log("The range is: " + result);
    }else{
        for (var j = a; j >= b; j-=c) {
        }
        console.log("The range is: " + result);
    }
}
ascDescSkip();


/*prompt - ask the user - No of elements - 5
The program should ask 5 values as input.
Enter value 1
Enter value 2

Store the values in an array

Display all the values - starting from last element to 1st element */

function noOfElements() {

    var a=parseFloat(prompt("Number of elements:"));
    console.log("There are " + a + " elements in the array");

    var arr=[];

    if(a >= 1) {
        for (var i = 0; i <= a-1; i++) {
            var b = prompt("Enter value: " + i);
            arr.push(b);

        }
        console.log("The entered array list is: " +arr);
        console.log("The reverse of the array list is " + arr.reverse());
    }
}
noOfElements();

//Create an array of 10 elements and display only odd elements.
function oddElements() {
    var arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (var i=0; i<arr.length; i++) {
        if (arr[i]%2 !== 0) {
            console.log("odd elements: " +arr[i]);
        }
    }
}
oddElements();

/*var arr = ["Hello",56,67];
console.log(arr);
arr.pop();
console.log(arr);
// push() read yourself
//delete
//remove
//splice*/

function arrayOperations() {

    var arr = ["Hello",56,67];
    console.log(arr);

    //pop
    arr.pop();
    console.log(arr);

    //push
    arr.push(78);
    console.log(arr);

    //delete
    delete arr[0];
    console.log(arr);

    //remove
    arr.splice(0, 1);
    console.log(arr);

    //splice
    arr.splice(1, 0, 34, 45);
    console.log(arr);

}
arrayOperations();



//1 1.Create a function which takes 1 argument as a number and returns whether the number is prime or not - isPrime and will return boolean

function isPrime(number) {
    if(number === 1){
        return false;
    }
    if(number <=0){
        console.log("Not a valid number");
        return false;
    }
    for(var i = 2; i<number; i++){
        if(number%i===0){
            console.log("Not Prime: ");
            return false;
        }
    }
    console.log("isPrime: ");
    return true;
}
var userInput=parseFloat(prompt("Enter a number: "));
isPrime(userInput);



//2 2.Create a function taking 1 numeric argument, which displays reverse number. e.g. revNum(123) = output 321. Pure numeric, Math.round().

function revNum(num){
    var result = '';
    while(num>0){
        result = result + (num%10);
        num = num/10;
        num = Math.floor(num);
    }
    result= parseInt(result);
    return result;
}
var userInput=parseFloat(prompt("Enter a number: "));
revNum(userInput);


//3 3.Create an array of 10 elements. Ask user to remove element by entering index number and remove that element.*/

function removeElement(){
    var arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var userInput=parseFloat(prompt("Index number: "));

    if(userInput >= arr.length){
        alert("Please enter a valid index number");
        return;
    }

    arr.splice(userInput, 1);
    console.log(arr);
}
removeElement();