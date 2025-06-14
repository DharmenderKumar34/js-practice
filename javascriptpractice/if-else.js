// if-else
var a = 20;
var b = 100;
if (a > b) {
  console.log("a is greater then b");
} else {
  console.log("b is greater then a");
}

//nested if else

var year = 2400;
if (year % 4 == 0) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      console.log("this is leap year");
    } else {
      console.log("not a leap year");
    }
  } else {
    console.log("this is leap year");
  }
} else {
  console.log("cant leap year");
}
