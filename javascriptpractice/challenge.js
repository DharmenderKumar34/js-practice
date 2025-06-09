// now start first challenge of js

 var _myName = "vinod";

 console.log(_myName);

 var _1my__Name = "kumar";

 console.log(_1my__Name);
 
//  var 1myName = "dharmender";

//  console.log(1myName);       // in this statement variable name are wrong because variable name are can't start from number in js 

 var $myName = "dharmender kumar";

 console.log($myName);


 //4 challenge 
// what will we the output of 3**3;
 console.log(3**3);
// add a number or string
console.log(5+ "kumar");

//interview question
// d/w ==or===
var a=5;
var b='5';
console.log(a==b);
console.log(typeof(a));
console.log(typeof(b));
console.log(a===b);

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

console.log(10+'20');                   //1020
console.log(9-'5');                     //4 =bug in js
console.log("Java "+ "Script");         //Javascript
console.log( ""+ "");                   //
console.log(""+0);                      //0
console.log("vinod" - "thapa");         //NaN
console.log(true + true);               //2
console.log(true + false);              //1
console.log(false + true);              //1
console.log(false-true);                //-1


// challenge 5
// What is truthy and falsy values in Javascript?
// we have total 5 falsy values in javascript
 // 0,"", undefined, null, NaN, false** is false anyway

if(score = 0){
console.log("Yay, We won the game");
}else{
console.log("OMG, we loss the game ");
}

 if(score = 1){
console.log("Yay, We won the game");
}else{
console.log("OMG, we loss the game ");
}

// challenge time
// simple way multiple table print 
var a,b=8;
for(b=8; b<16; b++){
    for(a=1; a<=10; a++){
    if(b==8 || b==9 || b==12 ||b==15){
    
    console.log(a +" * " +b+"="+a*b );
    }
    }
    console.log("  ");
    
}

// //main way

var a;
for(a=1; a<=10; ++a){
    var tableof=12;
    console.log(tableof+"*"+a+"="+a*tableof);
}


//challenge
const arr1=[1,30,4,21,100000,99]
 console.log(arr1.sort((a,b)=>a - b));
 console.log(arr1.sort((a,b)=>b - a));

//challenge
const fruits=["banana","orange","apple","mango"]
    fruits.sort((a, b) => b.localeCompare(a)); 
    // fruits.sort();
    console.log(fruits);

//what is the output of this program

//  const firstname = fun();
//  let name = 'vivek'                 //refrence error because fun calling before the let declare
//  function fun(){
//  return `my is ${name} malviya`
//  }
//  console.log(firstname);

let name = 'vivek'                 
 const firstname = fun();
 
 function fun(){
 return `my name is ${name} malviya`
 }
 console.log(firstname);