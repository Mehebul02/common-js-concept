let a;
console.log(a)

function second(a,b){
    const sum=a+b;
}
const result=second();
console.log(result)

function third(a,b,c,d){
    const sum = a+b+c+d;
    console.log(a,b,c,d);
}
const total=third(3,5);


function noNegative(a,b){
    if(a<0 || b<0){
        return;
    }
    return a+b;
};
const total2 = noNegative(3,6);
console.log(total2)

const firth={id:44,name:'Mehebul Alif',age:20};
console.log(firth.id,firth.salary);