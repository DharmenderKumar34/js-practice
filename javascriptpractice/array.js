// Array
let fruits = ["apple", "banana", "mango"];
console.log(fruits.length);
console.log(fruits[0]);

const a = [1, 2];
const b = [1, 2];
console.log(a === b); // false (different references)

function arraysEqual(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index])
  );
}

const x = [1, 2, 3];
const y = [1, 2, 3];
console.log(arraysEqual(x, y)); // true

//find length
let arr = [1, 2, 3, 4, 5, a, 6, 7];
console.log(arr.length);
