// Wellcome to part 7 here we learn about if else elseif and swith condition.


// if (5>0){
//     console.log("5 is greater than 0");
// }else{
//     console.log("0 is lesser than 5"); 
// }

// let sal = 2000;
// if (sal > 1000){
//     console.log(`Salary ${sal} is greter then 1000`);
// }
// else if (sal < 1000){
//     console.log(`Salary ${sal} is lesser then 1000`);
// }else{
//     console.log("Salar is equal");
// }

// // Ternary Operator.
// let check = -1>0?"greater":"lesser";
// console.log(check);


// key = 30;

// switch (key){
//     case 18:
//         console.log("Your age is 18");
//         break;
//     case 20:
//         console.log("Your age is 20");
//         break;
//     case 25:
//         console.log("Your age is 25");
//         break;
//     case 28:
//         console.log("Your age is 28");
//         break;

//     default:
//         console.log("your age is unknown");
//         break;
// }

//  '==' Ye only content ko dekhta h and  '===' and content and type dono ko dekhta h.


/*
let age = '65';
if (age === '65'){
    console.log(`Your age is ${age} and type is ${typeof age}`);
}else{
    console.log(`Your age is ${age} and type is ${typeof age}`);   
}
*/

// age = '18';
// if (age == 18){  
//     // Its worked on only content not type.
//     console.log('you can vote');
// }else{
//     console.log('you can not vote');
// }


// age = '18';
// if (age === 18){  
//     // Its worked on  content as well as type.
//     console.log('you can vote');
// }else{
//     console.log('you can not vote');
// }


// age = '18';
// if (age != 18){  
//     // Its worked on only content .
//     console.log('you can vote');
// }else{
//     console.log('you can not vote');
// }

age = '18';
if (age !== 18){  
    // Its worked on only content .
    console.log('you can vote');
    // string(18) equal nahi h Number(18) se.
}else{
    console.log('you can not vote');
}


