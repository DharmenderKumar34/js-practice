
//template literals
//1. string interpolation
const name = "Alice";
const greeting = `Hello, ${name}!`; 
console.log(greeting); // "Hello, Alice!"

//2.multiline string
const message = `This is line one.
This is line two.
This is line three.`;
console.log(message);

//3. expression evaluation
const a = 5;
const b = 10;
console.log(`Sum is ${a + b}`); // "Sum is 15"

//4.function call inside template literals
function getName() {
  return "John";
}
console.log(`Welcome, ${getName()}!`); // "Welcome, John!"