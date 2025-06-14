// Q1. Join array elements into a single string separated by commas.
const fruits = ["apple", "banana", "orange"];
// Output: "apple,banana,orange"
console.log(fruits.join(","));

//Q2. Join array elements with a dash (-) instead of a comma
const colors = ["red", "green", "blue"];
// Output: "red-green-blue"
console.log(colors.join("-"));

// Q3. Turn an array of words into a sentence.
const words = ["JavaScript", "is", "fun"];
// Output: "JavaScript is fun"
console.log(words.join(" "));

////🔄 Combined split() and join() Practice
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





