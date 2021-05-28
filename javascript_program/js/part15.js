console.log("Welcome to part15,Here we will learn about Creating, Removing & Replacing Elements");


/*
let element = document.createElement('li');
let text = document.createTextNode("This text created by me.");

element.appendChild(text);
element.setAttribute('id','new');

console.log(element);

// target the ul tag  whoes id is this.

let th = document.querySelector('.this');
console.log(th);

// Now append this on ul tag.

th.appendChild(element);

*/


/*
// console.log("-----------------------------------------------");

// let element = document.createElement('li');
// let text = document.createTextNode("this Node is created by Sauurabh. ");

// element.append(text);

// setting id and class in li element.

// element.setAttribute('id','new');
// element.setAttribute('class','new');
// element.id = 'newone';
// element.className = 'newone'

// now its time to append this  element to ul tag.

// let ul = document.querySelector('.this');  
// ul.appendChild(element);

// console.log(element);

*/

// using replacewith

// let h1 = document.querySelector('#heading');
// let elems = document.createElement('h1');
// let text = document.createTextNode('Welcome to code with Saurabh');
// elems.append(text);
// console.log(h1);
// elems.className = "Saurabh"
// elems.id = "barasiya"
// console.log(elems);

// // replacing       
// h1.replaceWith(elems);


// let myul = document.querySelector('.this');
// myul.replaceChild(elems,document.getElementById('first'));
// 
// myul.removeChild(document.getElementById('second'));

// console.log(myul.hasAttribute('href'));  //  gives result true or false.
// console.log(myul.hasAttribute('href'));  //  gives result true or false.



let your = document.querySelector('.your');
your.removeChild(document.getElementById('amit'));
console.log(your);

h1 = document.createElement('h1');
text = document.createTextNode("Go to codewithharry");
h1.append(text);

let a = document.createElement('a');
a.setAttribute('href','http://www.codewithharry.com');
// a.href = 'http://www.codewithharry.com';
a.innerText = "hrary site";

your.append(h1);
your.append(a);


console.log(a);

