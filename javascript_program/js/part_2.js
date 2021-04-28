/*Scope means where these variables are available for use. There are two types of scope, local and global. Var declarations are globally scoped, and when they are defined inside a function, they are locally scoped.*/

// var name = "Saurabh"; // String
// var age = 23;  // Number
// var check = true; // boolean
// var what; // undefined
// var val = null; //

// age = 50;

// console.log(name,age,check,what,val);

// -------------- const --------------------------------
const age = 20;
const job = "Developer";
//age = 23;  // can not change because its constant
// const name ;  // missig initializer
console.log(age, job, name);


const arr = [10, 20, 30];
arr.push(40);
//arr = [1, 2, 3, 4, 5, 6] //Assignment to constant variable.
console.log(arr);
