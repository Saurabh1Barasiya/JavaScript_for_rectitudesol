/*
Arrays are the objects in which we can store multiple values in a single variable. An array stores a sequential collection of elements of fix sizes. There are two syntaxes used for creating an empty array:
*/

let arr = new Array(); // empty arry
console.log(arr);

let arr1 = [];
console.log(arr1);

/*
Arrays are zero-indexed. The first element of an array is store at 0 indexes and the second element store at index 1 and so on. If we use an invalid index number it returns undefined.
// */
// let arr = ['first element', 'second element', 'last element']
// console.log(arr[0]) // output ' first element'
// console.log(arr[1]) //  output ' second element'
// console.log(arr[arr.length - 1]) //  output ' last element'

let arr2 = ["Saurabh","Peeyush","Amit","Rahul"];
console.log(arr2);
console.log(arr2[0]);  // first element
console.log(arr2[1]);  // second element
console.log(arr2.length); //
console.log(arr2[arr2.length - 1]); // output ' last element'


let age = [20,30,40,18,12];
console.log(age.length);

/*
indexOf():- This method Search the array for an element and returns its position
*/
let student = ["Saurabh","Peeyush","Amit","Rahul","Basant"];

console.log(student.indexOf("Saurabh"));
console.log(student[student.indexOf("Saurabh")]);

console.log(student.sort());


// let marks = [10,50,8,1,45];
// console.log(`before sorting ${marks}\n after sorting ${marks.sort(marks)}`);

// let marks = [10,9,8,7,45];
// console.log(marks.sort())

// let age1 = [33,55,67,18]
// let s_age= age1.sort()
// //18,33,55,67
// console.log(s_age)

var points = [10,50,8,1,45];
console.log(points.sort(function(a, b){return a-b})); // ascending order
var points1 = [10,50,8,1,45];
console.log(points1.sort(function(a, b){return b-a})); // desending order

arr3 = [10,5,40,50];
console.log(arr3.reverse());  // reverse the array


let alpha = ['a', 'b','c'];
let numeric = [1,2,3,4,5];
var alphaNumeric = alpha.concat(numeric);
console.log(alphaNumeric);
console.log(alphaNumeric[0]);
console.log(alphaNumeric[alphaNumeric.length - 1]);


let fruits1 = ["Banana", "Orange", "Apple"];
let len = fruits1.push('Mango');
console.log(fruits1);
console.log(len);

console.log(fruits1.pop()) // remove last element 

fruits1.unshift('Mango');
console.log(fruits1);
console.log(fruits1.shift());  // remove first element




let user = new Object();  // "object constructor" syntax
let  user2 = {}  // "object literal" syntax

console.log(typeof(user));
console.log(typeof(user2));

let user3 = {"name":"Saurabh",
            'age':23,
            'work':'intern'
}
console.log(user3);
console.log(user3.name);
console.log(user3.age);
console.log(user3.work);
console.log(user3['work']);

//To change the value of a age, you use the assignment operator. For example:
user3.age = 20;
console.log(user3);

newArr = [1,2,3,4,5,6,7,8,9,10,11];
console.log(newArr.splice(1,3));  // remove element index 1 to 3 
console.log(newArr);