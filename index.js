//  console.log('hello world');
// var myname = 'pwc';
// console.log(myname);

// now start first challenge of js

//  var _myName = "vinod";

//  console.log(_myName);

//  var _1my__Name = "bahadur";

//  console.log(_1my__Name);
 
//  var 1myName = "thapa";

//  console.log(1myName);       // in this statement variable name are wrong because variable name are start from number

//  var $myName = "thapa technical";

//  console.log($myName);

// console.log(typeof(myname));


// var myage = 19;
// console.log(myage);
 
// console.log(typeof(myage));

// var iamdks="dksingh";
// console.log(iamdks);
 
// console.log(typeof(iamdks));
// // js bugs
// // first
// 10 + "20"
// X 9 - "5"
// X "Java" + "Script"
// X ""+ 11
// X ""+0
// X "vinod" - "thapa"
// X true + true
// X true + false
// X false + true
// X false true

// console.log(10+'20');
// console.log(9-'5');
// console.log("Java "+ "Script");
// console.log( ""+ "");
// console.log(""+0);
// console.log("vinod" - "thapa");
// console.log(true + true);
// console.log(true + false);
// console.log(false + true);
// console.log(false-true);

//js interview question(1)
//1 difference between null and undefined
// var iamuseless = null;
// console.log(iamuseless);
// console.log(typeof(iamuseless));//second bug of js

// var standby;
// console.log(standby);
// console.log(typeof(standby));

//2explain nan=note a number
//  console.log("vinod"-"thapa");//nan=string -string

// var myphonenumber=7737023465;
// var myname="dharmender kumar";

// console.log(myphonenumber);
// console.log(myname);

// console.log(isNaN(myphonenumber));
// console.log(isNaN(myname));

// if(isNaN(myname)){
//     console.log("plz enter valid number");
// }

// NaN===NaN;
// Number.NaN===NaN;
// isNaN(NaN);
// isNaN(Number.NaN);
// Number.isNaN(NaN);

//  console.log(Number.isNaN(NaN));

// //assignment operator in js
// console.log(5+25);

//  var X = 5;
// var Y = 5;

//  console.log("Is both the X and Y are equal " + X == Y);
//  console.log(`is both the x and y are equal : ${ X == Y}`);
//  console.log(X == Y);

// //arithmetic operator in js
// console.log(3+3);
// console.log(10-5);
// console.log(20/5);
// console.log(3*20);

// console.log("reminder opreater " + 23%4);

//increment and decrement
// var num = 15;
// var newnum = num--;
// console.log(num);
// console.log(newnum);

//comparison operator
// var a =5;
// var b =2;
// //equal(==)
// console.log(a==b);
// // Not equal (≠)
// console.log(a != b);
// // Greater than (>)
// console.log(a >> b);
// // Greater than or equal (>)
// console.log(a >= b);
// // Less than (<)
// console.log(a < b);
// // Less than or equal (≤)
// console.log(a <= b );
// // type or value equal (===)
// console.log(a === b );
// // type or value are not equal (!==)
// console.log(a !== b );

//logicall operator
//AND (&&)
//  var a=10;
//  var b=-20

//  console.log((a>b)&&(b>0));
 
//string concatenation operator
//concate(+)
// console.log("hello world");
// console.log("hello"+"world");
// var myname= "dk";
// console.log(myname+"singh");

//4 challenge 
// what will we the output of 3**3;
//  console.log(3**3);
// add a number or string
// console.log(5+ "kumar");
//wap to swap two numbers without using third variable
// var a=15;
// var b=35;

// a=a+b;
// b=a-b;
// a=a-b;
// console.log("a="+a+"  b="+b);

// wap to swap two numbers
// var a=15;
// var b=35;

// c=a;
// a=b;
// b=c;
 
// console.log("a="+a+"  b="+b);

// interview question
// d/w ==or===
// var a=5;
// var b='5';
// console.log(a==b);
// console.log(typeof(a));
// console.log(typeof(b));
// console.log(a===b);

// if-else
// var a=20;
// var b=100;
// if(a>b){
//     console.log("a is greater then b");
// }
// else{
//     console.log("b is greater then a");
// }

//nested if else

// var year=2400;
// if(year%4==0){
//     if(year%100==0){
//         if(year%400==0){
//             console.log("this is leap year");

//         }
//         else{
//             console.log("not a leap year");
//         }
//    }
//     else{
//         console.log("this is leap year");
//     }
  
// }
// else{
//     console.log("cant leap year");
// }

// challenge 5
// What is truthy and falsy values in Javascript?
// we have total 5 falsy values in javascript
 // 0,"", undefined, null, NaN, false** is false anyway

// if(score = 1){
// console.log("Yay, We won the game");
// }else{
// console.log("OMG, we boss the game ");
// }

// conditional ternary operator

// var age=18;
// console.log((age>=18)?"you can vote":"you can't vote");

 
// var area='circle';
// var pi=3.142,r=3;l=5,b=4;

// switch(area){
//     case 'circle':console.log("area of circle-"+pi*r*r);
//     break;
//     case 'triangle':console.log("area of triangle-"+l*b/2);
//     break;
//     case 'rectangle':console.log("area of rectangle-"+l*b);
//     break;
//     default:console.log("please enter valid data");
//     break;
// }

// var a=0;

// while(a<=10){
//     console.log(a);
//     a++;
// }

// var a=0;
// do{
//     console.log(a);
//     a++;
// }
// while(a<=10);

// var a;
 
// for(a=0; a<=10;a++){
//     console.log(a);
    
// }

// challenge time
// simple way
// var a,b=8;
// for(b=8; b<16; b++){
//     for(a=1; a<=10; a++){
//     if(b==8 || b==9 || b==12 ||b==15){
    
//     console.log(a +" * " +b+"="+a*b );
//     }
//     }
//     console.log("  ");
    
// }

// //main way

// var a;
// for(a=1; a<=10; ++a){
//     var tableof=12;
//     console.log(tableof+"*"+a+"="+a*tableof);
// }

// var a=20,b=10;
// var sum=a+b;
// console.log(sum);

//  function sum(){
//     var a=10,b=20;
    // var total=a+b;
    // console.log(total);
    //  return a+b;
// }

//  console.log(sum());

// function sum(a,b){
//     //   var a=10,b=20;
//       var total=a+b;
//       console.log(total);
// }
// sum(220,30);
// sum(220,330);

//function expression
// let a=10,b=25;
// function sum(a,b){
//     // console.log( a+b);
//     return a+b;
// }
// var funexp=sum(a,b);
// console.log(funexp);
 
//  console.log('the sum of two num='+sum(10,25));

// Anonymous function (without function name,use the function keyword on the function name )

 var funexp=function(a,b){
    return total=a+b;
}
console.log(funexp(30,30));
// // var sum=funexp(2,30);
// // console.log(sum);
// var sum=funexp(85,35);
// var sum1=funexp(85,35);
// console.log(sum<=sum1);

// function tocelsius(fahrneheit){
//     return (5/9) * (fahrenheit-32);
// }
// var ser(33);
// console.log(ser);

// 