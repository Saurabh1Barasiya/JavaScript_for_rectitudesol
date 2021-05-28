console.log("Welcome to part12, Here we solve exercise!");

let a = "Saurabh";
l = document.links;
console.log(l);

Array.from(l).forEach(function(element){
    // console.log(element.href);
    if(element.href.includes(a)){
        console.log(element.href);
    }
})

// a  = "aanmol";
// console.log(a.includes("aa")); // checking purpose.