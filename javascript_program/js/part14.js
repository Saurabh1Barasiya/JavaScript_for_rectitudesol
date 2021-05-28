console.log("Welcome to part 15 , Here we work on traversing.");

// let cont = document.querySelector('.no');
// cont = document.querySelector('.container');
// console.log(cont);
// console.log(typeof cont); // object

// let nodeName = cont.nodeName;
// console.log(nodeName);  // Tag   

// let nodeType = cont.nodeType
// console.log(nodeType);   

// let nextElems = cont.nextElementSibling;
// console.log(nextElems);
// console.log(nextElems.nodeType);
// console.log(nextElems.nodeName); 

cont = document.querySelector('.container');
// console.log(cont);
// console.log(typeof cont);

// console.log(cont.childNodes); // it includes text comments line brake.
// console.log(cont.children); // it only includes elements.

// Array.from(cont.children).forEach(function(element){
//     console.log(element);
// })
// console.log(cont.childElementCount);  // 6 



// console.log("=======================================");
// cont = document.querySelector('.container');
// console.log(cont.childNodes);
// console.log(cont.childNodes[0]);
// console.log(cont.childNodes[0].nodeName);
// console.log(cont.childNodes[0].nodeType);
// console.log(cont.childNodes[1]);
// console.log(cont.childNodes[1].nodeName);
// console.log(cont.childNodes[1].nodeType);
// console.log(cont.childNodes[2]);
// console.log(cont.childNodes[2].nodeName);
// console.log(cont.childNodes[2].nodeType);




// // Node types

// // 1. Element
// // 2. Attribute
// // 3. Text Node
// // 8. Comment
// // 9. document
// // 10. docType


// console.log("=============");
// let conatainer = document.querySelector('div.container');

// console.log(conatainer.children[1]);
// console.log(conatainer.children[1].children[0].children[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);
// console.log(conatainer.children[1].children[0].children[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);


// console.log("=============");

container = document.querySelector('div.container');

// console.log(container);
// console.log(container.firstChild);
// console.log(container.firstElementChild);
// console.log(container.lastChild);
// console.log(container.lastElementChild);

// console.log("============");

// console.log(container.parentNode);
// console.log(container.firstElementChild.parentNode);

// console.log(container.firstElementChild.nextElementSibling.children[0].children[0]);