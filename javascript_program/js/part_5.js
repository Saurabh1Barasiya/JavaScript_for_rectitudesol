console.log("Hello Saurabh today we learn about String.");
/*
charAt(c): It returns the character at the “c” position within the string.
*/

let myName = 'JavaScript!!!';
console.log(myName.charAt(0)); // j
console.log(myName.charAt(7));  // i
console.log(myName.charAt("J"));  // j
console.log(myName.charAt("a"));  // j
console.log(myName.charAt("i"));  // j

/*
concat(p1, p2): Combines one or more strings and returns the concatenated string. Remember that the original string is not modified.
*/

myName = "Saurabh ";
myLastName = "Barasiya";
console.log(myName.concat(myLastName)); // Saurabh Barasiya 
console.log(myName.concat(myLastName));

let str1 = "JavaScript";
str1 = str1.concat(" is", " Awesome.");  // JavaScript is Awesome.
console.log(str1);


/*
indexOf(substr, [start_from]): This method Searches and returns the index number of the searched character within the string. If not found, it will return -1 . “Start_from” is an optional argument specifying the position within string to begin the search. Default is 0.
*/

str1 = "hi my name my is Saurabh";
console.log(str1.indexOf('my'));  // 3
console.log(str1.indexOf('my',5));  // 3
console.log(str1.indexOf('amit'));  // -1  because element was not found.


/*
lastIndexOf(substr, [start_from]): This method searches and  returns the index number of the searched character within the string. This method will return the index of the last occurrence of a specified text in a string.If the character or string is not found, -1 is returned. "Start_from" is an optional argument specifying the position within string to begin the search. Default is string.length-1
 */


str1 = "hi Saurabh my name my is Saurabh      Saurabh";
console.log(str1.lastIndexOf("Saurabh"));
console.log(str1.lastIndexOf("Saurabh",10));  //3    ye 10 ke pahle search karega
console.log(str1.lastIndexOf("Amir"));  //

/*
slice(start, [end]): This method returns a substring of the string based on the "start" and "end" index , it will not include the "end" index itself. "End" argument is optional, and if none is specified, the slice includes all characters from "start" to end of string.
*/


str1 = "hello javascript is awesome language";
console.log(str1.slice(0,5)); // hello, Here last element is exclude.

console.log(str1.slice(5,10)); //  java

console.log(str1.slice(0));


/*
split(delimiter, limit): This method Splits a string into substring to the specified delimiter, and returns an array containing each element. The argument “limit” is an integer that lets you specify the maximum number of elements to return.
*/

str1 = "hello javascript ,is awesome language";
l1 = str1.split(' ');
l2 = str1.split(' ',3);
l3 = str1.split(',');
console.log(l1); // [ 'hello', 'javascript', 'is', 'awesome', 'language' ]
console.log(l2); // only gives 3 items in the array.       [ 'hello', 'javascript', 'is' ]
console.log(l3); //   [ 'hello javascript ', 'is awesome language' ]


/*
substring(from, [to]): This method will returns the characters in a string between “from” and “to” indexes. It will not include “to” inself. “To” argument is optional, and if omitted, up to the end of the string is assumed.
*/

str1 = "hello javascript ,is awesome language";
console.log(str1.substring(0,10));  //  hello java     10 is exclude.
console.log(str1.substring(0));  // hello javascript ,is awesome language
console.log(str1.substring(0,5));  // hello


/*
toLowerCase(): This method will Returns the string with all of its characters converted to lowercase.
 */
str1 = "Hello";
console.log(str1.toLowerCase());  // hello
str1 = "HELLO";
console.log(str1.toLowerCase());  // hello

/* 
toUpperCase(): This method will Returns the string with all of its characters converted to uppercase.
*/

str1 = "hello";
console.log(str1.toUpperCase(str1)); // HELLO
str1 = "HeLLo";
console.log(str1.toUpperCase(str1)); //HELLO


/*
search(“str”): The method searches a string for a specified value and returns the position of the match:
*/

str1 = "hi Shyana JavaScript is awesome.";
console.log(str1.search("Shyana")); // 3 

/*
substr() Method: The method substr() is similar to slice(). The only difference is that the second parameter specifies the length of the extracted part.
*/
str1 = "Apple, Banana, Kiwi";
console.log(str1.substr(0,5));  // Apple
console.log(str1.substr(7,6));  // Banana    , here 7 is starting element and starting element se 6 character aage jana h.
console.log(str1.substr(7,10)); 



// JavaScript template literals:-
simple = `This is an example of template literal`;
console.log(simple);

let firstName = "Saurabh";
let secondName = "Barasiya";
fullName = `My name is ${firstName} ${secondName}`;
console.log(fullName);

// ----------------------------------------------------------------
str1 = "javaScript is awesome";
// console.log(html.endsWith('dsfsdfd'));
// console.log(html.includes(' fg'));
// console.log(html.substring(1,6));
// console.log(html.replace('this', 'it'));

console.log(str1.endsWith("awesome"));  // true
console.log(str1.startsWith("java"));  // true
console.log(str1.startsWith("is"));  // false
console.log(str1.endsWith(" is"));  // false

console.log(str1.substring(0,6));  // javaSc    6 is exclude.

console.log(str1.includes("is")); // true      it checks value present in string or not .
console.log(str1.includes("1")); // false      it checks value present in string or not .
channge_string = str1.replace("javaScript","Python");  // it changes first occrences of the string.

console.log(channge_string); //

console.log(str1);  // not change in  original string.

// const name = "Saurabh";
// let fruit1 = 'Orange\'';
// let fruit2 = 'Apple';
// let myHtml = `Hello ${name}
//             <h1> This is "my" heading </h1>
//             <p> You like ${fruit1} and ${fruit2}`;

// document.body.innerHTML = myHtml;


