console.log("Welcome to part 13 ,Here we about DOM! ");


/*
element selector 
1. single element selector.
2. multi element selector.
*/

// if want to know whoes id is first.
// let ID = document.getElementById('first');
// console.log(ID);
// console.log(ID.innerHTML);
// console.log(ID.innerText);
// ID.style.color = "yellow"; // to set color using js.

// console.log("------------------------------");

// let firstID = document.querySelector('#first');
// console.log(firstID);
// console.log(firstID.innerHTML);
// console.log(firstID.innerText);
// firstID.style.color = "red";  // latest wala work karega.
console.log("------------------------------");

let classSel = document.querySelector('.cont-1');
console.log(classSel);
console.log(classSel.children) // it gives children

console.log(classSel.children[0]);

console.log(typeof classSel.children)


// Array.from(classSel.children).forEach(function(element){
//     console.log(element.innerText = "nbdsjvbjsdbd")
// })

// console.log('-------------------');
// Array.from(classSel.children).forEach(function (element) {
//     console.log(element);
//     console.log(element.innerText); console.log(element.className);
// })


// console.log('================================');
let cVal = document.getElementsByClassName('container');
// console.log(cVal[0].childNodes)
// console.log(cVal[0])
// Array.from(cVal[0].childNodes).forEach(function (element) {
//     console.log(element);
// })

// console.log(cVal[0].childNodes)





console.log("================================");
console.log(cVal)
console.log(cVal[0])
Array.from(cVal[0].children).forEach(function (element) {
    console.log(element);
})
cVal[0].style.backgroundColor = "yellow";
cVal[0].style.color = "green";