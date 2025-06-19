//simple function
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 👉 5

// function currying
function curryAdd(a) {
  return function(b) {
    return a + b;
  };
}

console.log(curryAdd(2)(3)); // 👉 5

//using bind method
let sum=function(x){
    // console.log(a);
    return function(y){
        console.log(x*y); 
    }
}
let mul=sum.bind(this,(2))
let multi=mul();
multi(45)
// console.log(this);

const multiply = a => b => c => a * b * c;

console.log(multiply(2)(3)(4)); // 👉 24


