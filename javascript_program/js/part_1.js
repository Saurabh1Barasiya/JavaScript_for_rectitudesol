console.time("your code took");
console.log("Hello my friend"); // it return undefined
console.log(1+2); 
console.log(5/2); 
console.log(true); 
console.log(false); 
console.log([10,20,30,40]); // array
console.log({age:23,name:"Saurabh"}); // object
console.table({age:23,name:"Saurabh"}); // table
console.warn("don't do this "); // warning
//console.clear(); // to clear screen

console.timeEnd("your code took");
console.log(null)

// Console.assert():-
// This method writes a message to the console that the assertion failed and the message we provide as a parameter, but only if an expression evaluates to false. If the expression is true, then nothing will happen.
console.assert(true,"this is false");
console.assert(false,"this is false");


// With the help of console.time() and console.timeEnd() we can find the amount of time spend by a code on execution.

console.time()
for (i =0 ;i<100;i++){
    //code
}
console.timeEnd()

console.error("you got an error");



