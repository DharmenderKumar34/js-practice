//function expression
let a=10,b=25;
function sum1(a,b){
    // console.log( a+b);
    return a+b;
}
var funexp=sum1(a,b);
console.log(funexp);
 
console.log('the sum of two num='+sum1(10,25));


// Anonymous function (without function name,use the function keyword on the function name )

 var funexp=function(a,b){
    return total=a+b;
}
console.log(funexp(30,30));
// var sum=funexp(2,30);
// console.log(sum);
var sum=funexp(85,25);
var sum1=funexp(85,35);
console.log(sum<=sum1);