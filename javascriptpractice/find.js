const numbers = [10, 20, 30, 40];
const found = numbers.find(num => num > 25);
const foun = numbers.find(num => num == 25);
console.log(found); // 30
console.log(foun); // undefined
