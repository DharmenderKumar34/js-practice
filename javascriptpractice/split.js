//Q1. Split a sentence into an array of words.
const Sentence = "Hello world from JavaScript";
// Output: ["Hello", "world", "from", "JavaScript"]
console.log(Sentence.split(" "));

//Q2. Split a CSV string into an array.
const data = "john,doe,25,developer";
// Output: ["john", "doe", "25", "developer"]
console.log(data.split(","));

//Q3. Split a string by every character.
const word = "hello";
// Output: ["h", "e", "l", "l", "o"]
console.log(word.split(""));

//🔄 Combined split() and join() Practice
// Q4. Capitalize each word's first letter in a sentence.
const input = "hello world from javascript";

// Step 1: split() by space
// Step 2: capitalize first letter
// Step 3: join() back into sentence
let b=input.split(" ")
let a=b.map((res)=>{
return res.charAt(0).toUpperCase()+res.slice(1)
})
console.log(a.join(" "));

// Q5. Reverse the order of words in a sentence.
const sentence = "I love coding";
// Output: "coding love I"
let A=sentence.split(" ")
let B=A.reverse()
console.log(B.join(" "));

// console.log(A.reverse());






















