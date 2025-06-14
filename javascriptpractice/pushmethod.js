//push() method (return the new length of an array)

const animals = ["Pigs", "Goats", "sheep"];
//Length of array
const len = animals.length;
console.log(len); //3

//add one element
animals.push("elephant"); //add element to the end of an array
console.log(animals);

//add two or more element
const count = animals.push("Cat", "dog");
console.log(animals);

//New length of array
console.log(count); //6
