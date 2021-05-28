console.log("welcome to part17, Here we learn about more on event."); 



let container = document.querySelector('.container');
container.addEventListener('dblclick',fun1);
container.addEventListener('mouseover',fun2);
container.addEventListener('mouseout',fun3);
container.addEventListener('mouseenter',fun4);
container.addEventListener('mouseleave',fun5);



function fun1(event) {
    console.log('dbclick event occered');
}
console.log(container);

function fun2(event){
    console.log('mouseover event occered');
    event.target.style.color = 'green';
}

function fun3(event){
    console.log('mousemove event occered');
    event.target.style.color = 'red';
}

function fun4(event){
    console.log('mouseenter event occered');
    event.target.style.border = '5px dotted blue';
}
function fun5(event){
    console.log('mouseleave event occered');
    event.target.style.border = '2px solid yellow';
}


let myid = document.querySelector('#myid').addEventListener('click',fun6);

function fun6(event){
    console.log('click occors',event);
    event.preventDefault();
}