let res;
// String to number

res = Number("100");
console.log(res, (typeof res));

res = Number("100s");   // it gives nan because it can't convert 's' to Number.
console.log(res, (typeof res));

res = Number(true); // boolean  to Number
console.log(res, (typeof res));

res = Number(false); // boolean  to Number
console.log(res, (typeof res));

res = String(true); // boolean  to string
console.log(res, (typeof res));

res = String(false); // boolean  to string
console.log(res, (typeof res));

res = Number("hello");
console.log(res, (typeof res)); // not gives error but gives NaN.

res = Number(' ');  // 0
console.log(res, (typeof res));

res = Number('a');  // 0
console.log(res, (typeof res));

res = Number(undefined);
console.log(res, (typeof res));



// --------------- Boolean ----------------------------------------------------------------
res = Boolean(1); // true
console.log(res, (typeof res)); 

res = Boolean(0); // false
console.log(res, (typeof res));

res = Boolean(undefined); // false
console.log(res, (typeof res));

res = Boolean("hello"); // true
console.log(res, (typeof res));

res = Boolean(""); // false
console.log(res, (typeof res));




/*
String Conversion:-The method String() is used to convert numbers to strings. It can be used on any type of numbers, literals, variables, or expressions. The method toString() does the same. */


res = String(34);   // String
console.log(res, (typeof res));


let a = 90 
res = String(a)  
console.log(String(7554212214));
console.log(res, (typeof res));
console.log( (421231231).toString(),typeof((421231231).toString()));

/*
parseInt and parseFloat:-The in-built method parseInt() and parseFloat() return numbers from strings that start with numeric data. Here is an examples:
*/

// console.log( parseInt('$100 dollars') ); // NaN
// console.log( parseInt('+10.25990 kg') ); // 10
// console.log( parseFloat(' +10.25 kg') ); // 10.25
// console.log( parseFloat('ABC') );

console.log(parseInt("120"),typeof(parseInt("120")))  // 120 number
console.log(parseFloat("120.00"),typeof(parseFloat("120.000")))  // 120 number

console.log(parseFloat(120.123545).toFixed(2));


console.log(parseInt('$400 dollers'))  // NaN
console.log(parseFloat('$400 dollers'))  // NaN

console.log( parseInt('+10.25990 kg') ); // 10  + symboll ke shat work karta h.
console.log( parseFloat('+10.25990 kg') ); // 10  + symboll ke shat work karta h.



/*

Sometimes JavaScript automatically converts one data type to another. This type of conversion is known as implicit conversion.

Conversion To String:- When we add a number into a string, JavaScript converts the number to a string before concatenation. Here is an example:
*/


res = 3 ;
res = 3 + '4';
console.log(res, (typeof res)); // '34'  perform concatnation


console.log('9'+true); // 9true
console.log('9'+false); // 9false
console.log('9 '+false); // 9false
console.log('9'+null); // 9false
console.log('0'+null); // 9false



/*
Conversion To Number:- Numeric string used with operators like +, - , / , * returns number type
*/
console.log('4' - '4'); // 0
console.log('4' - '3'); // 1
console.log('4' - '2'); // 2
console.log('4' - 'a'); // NaN
console.log('4' * '5',typeof('4' * '5')); // NaN

res = '5' - true; // 4 number
console.log(res, (typeof res));
res = '5' - false; // 4 number
console.log(res, (typeof res));
res = '5' + false; // 5false
console.log(res, (typeof res));

// '+' concat , '-' work like math, '*' work like math , '/' work like math

res = '5' / false; // Infinity
console.log(res, (typeof res));

res = '5' / true; // 5
console.log(res, (typeof res));

res = '5' / 2; // 5
console.log(res, (typeof res));

res = '5' / 'a'; // NaN 
console.log(res, (typeof res));


// ---------------------------------------------------

/*
In JavaScript, Null is considered as 0 when used with numbers. Arithmetic operation of undefined with number, boolean or null returns NaN
*/

res = null; // Null Object
console.log(res, (typeof res));

res = 4  + null; // 4 number
console.log(res, (typeof res));

res = 4  + undefined; // NaN
console.log(res, (typeof res));

res = 4  - undefined; // NaN
console.log(res, (typeof res));


// ------------------------------------------------------------------------------------------

// Type conversion 
console.log('Welcome to tut5');
let myVar;
myVar = String(34);
// console.log(myVar, (typeof myVar));
let booleanVar = String(true);
// console.log(booleanVar, (typeof booleanVar));

let date = String(new Date());
// console.log(date, (typeof date));

let arr =  String([1,2,3,4,5]);
// console.log(arr.length, (typeof arr));

let i = 75;
// console.log(i.toString())

let stri = Number("3434");
stri = Number("343d4");
stri = Number(false);
stri = Number([1,2,3,4,5,6,7,8,9]);
// console.log(stri, (typeof stri));

let number = parseFloat('34.098');


console.log(number.toFixed(2), (typeof number));

// Type coercion

let mystr = Number("698");
let mynum = 34;

console.log(mystr + mynum);

