var a = 20,
  b = 10;
var sum = a + b;
console.log(sum);

//function add two numbers
function add() {
  var a = 10,
    b = 20;
  // var total=a+b;
  // console.log(total);
  return a + b;
}

console.log(add());

//add two numbers with pass parameter
function add1(a, b) {
  //   var a=10,b=20;
  var total = a + b;
  console.log(total);
}
add1(220, 30);
add1(220, 330);

function tocelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
var ser = tocelsius(32);
console.log(ser);
