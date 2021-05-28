console.log("Welcome to part16, Here we learn about how to handle events.");
// document.addEventListener("click", function(){ alert("Event Occurred"); });


// document.getElementById('first').addEventListener('click', function(e){ 
//     console.log(`You click  ${e}`);
//     let variable;
//     variable = e.target;
//     variable = e.target.id;
//     variable = e.target.className;
//     variable = e.target.classList;
//     console.log(`${variable}`);
// });
 
let first = document.getElementById('first');
console.log(typeof first);
first.addEventListener('click',function(e) {
    // alert('clicked');
    console.log(e);
    console.log(e.target);
    console.log(e.target.className);
    console.log(e.target.id);
    console.log(e.target.classList);
})
