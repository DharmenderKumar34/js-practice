const names = ["Zara", "Alice", "John"];
names.sort();
console.log(names); // ["Alice", "John", "Zara"]


const numbers = [100, 25, 5, 40];
// numbers.sort(); // Incorrect: [100, 25, 40, 5] (sorted as strings)
numbers.sort((a, b) => a - b); // [5, 25, 40, 100]

console.log(numbers);

numbers.sort((a, b) => b - a); // [100, 40, 25, 5]

console.log(numbers);


const students = [
  { name: "Alice", marks: 75 },
  { name: "Bob", marks: 92 },
  { name: "Charlie", marks: 60 }
];

students.sort((a, b) => b.marks - a.marks); // Descending by marks
console.log(students);