// function countVowels(str) {
//     // Your implementation
//     let vowel = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
//     str.split("").map(res => {
//         if (vowel.includes(res.toLowerCase())) {
//             count++;
//         }
//     })
//     // return count;
//     //   console.log(count);

// }


//For the purpose of user debugging.
// countVowels("JavaScript");

// module.exports = countVowels

//  var i;
//     var j;

//     if (str != a[i] || str != b[j]) return 0;
//     let a = [a, e, i, o, u]
//     let b = [A, E, I, O, U]

//     let c = str.map((res) => {
//         if (res == a[i] || res == b[j]) {
//             let d = res.length
//             return d;
//             }


//     })
//     console.log(c);

// total of many argument

// function sum(a,b,c,d) {
//     let x = sum.map((res) => {
//         let y = y+res;
//         // return b;
//           console.log(y)
//     })

// Your implementation

// }

//For the purpose of user debugging.
// sum(100, 200, 300, 400);

// module.exports = sum

// String concat and return in array using map 
// const people = [
//   { firstName: "John", lastName: "Doe" },
//   { firstName: "Jane", lastName: "Smith" }
// ];


//     const b =people.map((people)=>{ firstName.concat(" ",lastName)
//     })
//     return b;


// console.log(b);

// const people = [
//   { firstName: "John", lastName: "Doe" },
//   { firstName: "Jane", lastName: "Smith" }
// ];

// const fullNames = people.map(person => `${person.firstName} ${person.lastName}`);

// console.log(fullNames); // Output: ["John Doe", "Jane Smith"]


//var vs let vs const
//var
// var myname = "dk";
// console.log(myname);

// myname = "dharmender kumar";
// console.log(myname);

// var myname = "kumar";
// console.log(myname);

// //let
// let myname = "dk";
// console.log(myname);

// myname = "dharmender kumar";
// console.log(myname);

// // let myname = "kumar";
// console.log(myname);

//const
// const myname = "dk";
// console.log(myname);

// myname = "dharmender kumar";
// console.log(myname);

// const myname = "kumar";
// console.log(myname);

// variable scope

// function biodata() {
//     const myfirstname = "dk"
//     console.log(myfirstname);

//     if (true) {
//         const mylastname = "kumar";
//         console.log('inner ' + myfirstname);
//         console.log('inner ' + mylastname);
//     }
//     // console.log('innerouter ' + mylastname);
// }
// biodata();

//template literals
// //1. string interpolation
// const name = "Alice";
// const greeting = `Hello, ${name}!`; 
// console.log(greeting); // "Hello, Alice!"

// //2.multiline string
// const message = `This is line one.
// This is line two.
// This is line three.`;
// console.log(message);

// //3. expression evaluation
// const a = 5;
// const b = 10;
// console.log(`Sum is ${a + b}`); // "Sum is 15"

// //4.function call inside template literals
// function getName() {
//   return "John";
// }
// console.log(`Welcome, ${getName()}!`); // "Welcome, John!"

////default parameters
// function str(name='dk',age=21){
//     console.log(`hello ${name},${age}`);

// }
// str('alice',24);
// str('aseem');

// function str({name='dk',age=21}){
//     console.log(`hello ${name},${age}`);

// }
// str('alice',24);
// str({age:30});

//second example of default parameters
// function print({ name = "Unknown", age = 0 } = {}) {
//   console.log(`Name: ${name}, Age: ${age}`);
// }

// // Only provide the second parameter `age`
// print({ age: 30 }); // Output: Name: Unknown, Age: 30

//interview question merged two string alternativly
// let str1='krishna';
// let str2='veni';
// let mergedstr=""
// for(i=0;i<str1.length;i++)
// {
//     if(str1.length<str2.length) return str1


//      mergedstr+=str1[i]+str2[i]



// }
//      console.log(mergedstr);

// function greet() {
//   console.log("Hello");
// }

// function start() {
//   greet();
// }

// start();

// var a=[1,2,2,3,4]
// [0,1,2,3,4]     
// let b=a.filter((res,index)=>{
// if(a.indexOf(res)==index){
//   return res;
// }
// })
// console.log(a);

var a=[10, 25, 88, 6, 99, 3];
let b=a.reduce((acc,cur)=>{
    if(acc<cur){
      acc=cur
    }
    return acc;
},a[0])
console.log(b);

// const words = ["JavaScript", "is", "fun"];
// let b=words.reduce((acc,cur)=>{
//   return acc+cur;

// })

// console.log(b);

// const words = ["Hello", " ", "World", "!"];
// let b=words.reduce((acc,cur)=>{
//   return `${acc}${cur}`;
// })

// console.log(b);

//1. //map method prectice question

// const numbers = [1, 2, 3, 4, 5];
//a // Use map to return a new array with each number doubled

// let a=numbers.map((res)=>{
//   // return res*2
//   return res**2
// })

// console.log(a);

//const numbers = [10, 20, 30];
//b// Use map to convert each number to a string
//  function st(){
//     var str=numbers.map((res)=>{
//         let string=res.toString();
//         //  return res.toString();
//       console.log(typeof(string));
//         return string

// })

// return str;

// }
// console.log(st());


// const numbers = [10, 20, 30];
//b1 //b// Use map to convert each number to a string

// let str=numbers.map((res)=>res.toString());

// console.log(str);

// const fruits = ["apple", "banana", "cherry"];
// // Use map to return an array of string lengths
// let len = fruits.map((res) => res.length)

// console.log(len);

// const words = ["hello", "world", "javascript"];
 // //c// Use map to return a new array with the first letter of each word capitalized

// const output=words.map((res)=>{
//   return res.charAt(0).toUpperCase() + res.slice(1)})

// console.log(output);


// const word = ["hello", "world", "javascript"];

// const capitalizedWords = word.map(word => 
//   word.charAt(0).toUpperCase() + word.slice(1)
// );

// console.log(capitalizedWords);
// // Output: ["Hello", "World", "Javascript"]



// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 }
// ];
//d // Use map to return an array of just the names
// let a=users.map(res=>res.name)
// console.log(a);

// const people = [
//   { firstName: "John", lastName: "Doe" },
//   { firstName: "Jane", lastName: "Smith" }
// ];
// // Use map to return an array of full names like "John Doe"

// let a=people.map(res=>`${res.firstName} ${res.lastName}`)
// console.log(a);

// const items = ["pen", "pencil", "eraser"];
// // Use map to return an array like ["1. pen", "2. pencil", "3. eraser"]

// let a=items.map((res)=>{
//   return indexof(res)
// })

// console.log(a);


let obj={x:10,
         y:20
        }
// let b=[];
// for(let a in obj){
//   // console.log( );
//    b.push(obj[a])
 
// }
console.log(Object.values(obj));
// console.log(a);





























