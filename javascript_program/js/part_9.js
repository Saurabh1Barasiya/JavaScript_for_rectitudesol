// Wellcome to part 9 ,Here we will learn about Functions .

/*
// function defination
function name() {

}
*/

/*
function printMessage(message) {
    console.log(message);
}

printMessage("Hello this is my function");  // Hello this is my function
*/

// function print(message){
//     console.log(message);
// }

// print("This function work like Python print() Function");


// let variableName = function(parameters){
//     // statements 
// }
// print(variableName);
// console.log(variableName);

// let add = function(a,b){
//     return a + b;
// }
// print(add(5,6));


// // ------------------------------------------------------------------------------------------------


// function getDistance(time,speed){
//     return(speed * time);
    
// }

// console.log(getDistance(5,6));


// var i = 10;  // Global variable.
// console.log("Outside function",i);
// function check(){
//     let i = 5;  // local variable.
//     console.log("Inside function",i);

// }

// check();
// console.log("Outside function",i);

// var i = 10;  // Global variable.
// console.log("Outside function",i);
// function check(){
//      i = 5;  // Changes in global variable.
//     console.log("Inside function",i);

// }

// check();
// console.log("Outside function",i);

var i = 10;  // Global variable.
console.log("Outside function",i);
function check(){
    var i = 5;  // 
    console.log("Inside function",i);
}
check();
console.log("Outside function",i);


let myHtml;
let name = "Saurabh";
let age = 23;
let address = "Jabalpur";

myHtml = `<h1>About Myself </h1>
<p> My name is ${name} and my age is ${age} and my address is ${address}`;
document.body.innerHTML = myHtml;   // Generates html using JavaScript.