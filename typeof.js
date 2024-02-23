// primitive data type 
const a=33; 
const b='Mehebul Alif'; 
const c=true;
console.log(typeof a,typeof b,typeof c); 

// Non-Primitive
const array =[4,5,6,765,4];
const object={
    name:'mehebul Alif',
    age:20,
}
console.log(typeof array,typeof object);


let x=4;
let y=x;
console.log(x,y);
y=55;
console.log(x,y)

let p={
    name:'Mehebul Alif',
    job:'Web developer',

}
let q=p;
console.log(q,p);
q={job:'Back-End Developer'};
console.log(p,q)