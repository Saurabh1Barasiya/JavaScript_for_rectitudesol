console.log("Wellcome to part 18 here we will work on LocalStorage and SessionStorage , \n it's output will sshow on application section. ");

// console.log(localStorage); // because  window is global object.
// console.log(window.localStorage);


// console.log(typeof localStorage);  // object

localStorage.setItem("name","Saurabh");
localStorage.setItem("surname","Barasiya");

let name = localStorage.getItem("name");
console.log(name);
let surname = localStorage.getItem("surname");
console.log(surname);

// localStorage.clear()  // to clear local storage

sessionStorage.setItem("sname","samit");
sessionStorage.setItem("ssurname","snagwanshi");

console.logsessionStorage.getItem("sname")