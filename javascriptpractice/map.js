//// find the square root
let arr = [25, 36, 49, 64, 81]

let square = arr.map((res) => {
    return Math.sqrt(res)
})
console.log(square);


//each element multiply by 2 and return only those element which are greater than 10

let arr1 = [2, 3, 4, 6, 8]
let b=0;
let multi = arr1.map((res) => {
    let a = res * 2
    if (a > 10) {
         b=b+a
        // console.log(a);
        return b
    }
    
})
console.log(b);
let arr2 = [2, 3, 4, 6, 8]
let sum = arr1.map((res) => res * 2).filter((res)=>res>10).reduce((acc, cur)=>acc += cur);
console.log(sum);

let arr3=[5,6,7]
let c=arr3.reduce((acc,cur)=>acc+=cur);

console.log(c);

// String concat and return in array using map 
const People = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" }
];

const add = People.map((person) => {
  return person.firstName + " " + person.lastName;
});

console.log(add);

const people = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" }
];

const fullNames = people.map(person => `${person.firstName} ${person.lastName}`);

console.log(fullNames); // Output: ["John Doe", "Jane Smith"]



//1. //map method prectice question

const numbers = [1, 2, 3, 4, 5];
//a // Use map to return a new array with each number doubled

let a=numbers.map((res)=>{
  // return res*2
  return res**2
})

console.log(a);

const Numbers = [10, 20, 30];
b// Use map to convert each number to a string
 function st(){
    var str=Numbers.map((res)=>{
        let string=res.toString();
        //  return res.toString();
      console.log(typeof(string));
        return string

})

return str;

}
console.log(st());


const number = [10, 20, 30];
//b1 //b// Use map to convert each number to a string

let str=number.map((res)=>res.toString());

console.log(str);

const fruits = ["apple", "banana", "cherry"];
//c // Use map to return an array of string lengths
let len = fruits.map((res) => res.length)

console.log(len);

const words = ["hello", "world", "javascript"];
// d// Use map to return a new array with the first letter of each word capitalized

const output=words.map((res)=>{
  return res.charAt(0).toUpperCase() + res.slice(1)})

console.log(output);


const word = ["hello", "world", "javascript"];

const capitalizedWords = word.map(word => 
  word.charAt(0).toUpperCase() + word.slice(1)
);

console.log(capitalizedWords);
// Output: ["Hello", "World", "Javascript"]


//e // Use map to return an array of just the names
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

let x=users.map(res=>res.name)
console.log(x);

//f // Use map to return an array of full names like "John Doe"
const peoples = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" }
];


let A=peoples.map(res=>`${res.firstName} ${res.lastName}`)
console.log(A);

const items = ["pen", "pencil", "eraser"];
//g// Use map to return an array like ["1. pen", "2. pencil", "3. eraser"]

let a1=items.map((res)=>{
 let b= items.indexOf(res)
 return `${b}.${res}`
 
})

console.log(a1);










