//while loop
var a = 0;

while (a <= 10) {
  console.log(a);
  a++;
}

//do-while loop
var a = 0;
do {
  console.log(a);
  a++;
} while (a <= 10);

//for loop

for (var a = 0; a <= 10; a++) {
  console.log(a);
}

// for-in
const person = { name: "John", age: 30 };

for (let a in person) {
  console.log(a, person[a]);
}

const fruit = ["apple", "banana", "mango"];
for (let a in fruit) {
  console.log(a, fruit[a]);
}

//for-of
const fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
  console.log(fruit);
}
