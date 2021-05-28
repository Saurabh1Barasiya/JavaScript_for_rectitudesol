console.log("Wellcome to solve the exercise.");
let div = document.createElement("div");
let text = document.createTextNode("hello everyone");
div.append(text);
div.className = "hello";
div.id = "everyone"
console.log(div)

h1 = document.querySelector('h1');
console.log(h1);
h1.appendChild(div);


// let hello = document.getElementsByClassName("hello");
// hello.addEventListener('blur',function(e){
//     console.log(e);
// })
// console.log(hello);


document.querySelector(".hello").addEventListener('blur',function(e){
    console.log("click")
})