//2explain nan=note a number

console.log("vinod" - "thapa"); //nan=string -string

var myphonenumber = 7737023465;
var myname = "dharmender kumar";

console.log(myphonenumber);
console.log(myname);

console.log(isNaN(myphonenumber));
console.log(isNaN(myname));

if (isNaN(myname)) {
  console.log("plz enter valid number");
}
console.log(typeof myname);

var myage = 19;
console.log(myage);

console.log(typeof myage);

var iamdks = "dksingh";
console.log(iamdks);

console.log(typeof iamdks);

//multiple condition of NaN
NaN === NaN;
Number.NaN === NaN;
isNaN(NaN);
isNaN(Number.NaN);
Number.isNaN(NaN);

console.log(Number.isNaN(NaN));
