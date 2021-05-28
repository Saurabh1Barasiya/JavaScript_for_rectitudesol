// Wellcome to part 8 here we will work on loops  .

// for loops

// for (let i = 0; i < 5; i++) {
//     console.log(i,);
// }


// while       
// let i = 0;
// while (i<10) {
//     console.log(i);
//     i++;
// }

// do-while

// let i = 10;
// do{
//     console.log(i);
//     i--;
// }while (i>0);

// do{
//     console.log("Hi shanya");
// }while (false);

// Its time to learn for each loop.
arr = [1,2,3,4,5,6];
arr.forEach(function(element,index,array){
    console.log(element,index,array);
});

arr2 = ["Amit","Rahul","Peeyush","Saurabh"];
arr2.forEach(function(element,index,array){
    console.log(element);
});


// looping in object.
let person = 
    {name : "Saurabh",
    age:23,
    phoneNumber : "6261523771",
    address : "Jabalpur"}
console.log(person);

for(let key in person){
    console.log(`${key} of the person is ${person[key]}`);
}
