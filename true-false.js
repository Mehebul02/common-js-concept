
/*
truth:
1.true
2.any number (+ve,-ve) will be truthy other than 0
3.any string truthy other them empty string

*/ 
/*
False
1.false
2.0
3.''(empty string)

*/

const x = true;
if(x){
    console.log('value is a x true');
}
else{
    console.log('value is a x false');
}


const y=" ";
if(y){
    console.log('Value is Y true');
}
else{
    console.log('Value is Y false')
}