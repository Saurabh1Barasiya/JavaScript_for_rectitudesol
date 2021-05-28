console.log("Welcome to part 11,Here we learn about DOM");
a = window.document;  // It gives our html document file.
console.log(a)


// a = document.all;  // document are global scope
// console.log(a); // it gives HTMLCollection not array


// a.forEach(function(element){
//     console.log(element);
// })

// Array.from(a).forEach(function(element){
//     console.log(element);  // it gives all the element's' contain in webpage(Document).
// });



b = document.body;
console.log(b);

l = document.links;
console.log(l);
console.log(l[0]);
console.log(l[0].href);
console.log(l[0].innerHTML);
console.log(l[0].id);
console.log(l[0].className);


fm = document.forms;
console.log(fm);
console.log(fm[0]);
console.log(fm[1]);
console.log(fm[2]);

Array.from(fm).forEach(function(element){
    console.log(element)
})