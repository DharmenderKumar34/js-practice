let myname = "dharmender kumar";
let course = "bca";

console.log(myname);
console.log(course);

//find the length of string
console.log(myname.length);
console.log(course.length);

//// Escape character
let anysentense = 'we are all equal to "one" it mean we are one';

let anysentens = "we are all equal to 'one' it mean we are one";
let anysentens1 = 'we are all equal to "one" it mean we are one';

console.log(anysentense);
console.log(anysentens);
console.log(anysentens1);

////Finding a string in a string by indexof
const mybiodata = "I am dharmender kumar";
console.log(mybiodata.indexOf("d", 6));

//bylastIndexOf
const mybiodata1 = "I am dharmender kumar";
console.log(mybiodata1.lastIndexOf("D", 6));

////Searching for a string in a string
//by search()
const mybio = "I am dharmender kumar";
let sdata = mybio.search("d");
console.log(sdata);

////Extracting string parts
//1.slice()
let fruit = ["apple", "bananaa", "kiwi"];
let res1 = fruit.slice(0, 4);
console.log(res1);

let fruits = "apple,bananaa,kiwi ";
let Res = fruits.slice(6, -1);
console.log(Res);

//2.substring()
let Fruit = "apple,bananaa,kiwi ";
let Res1 = Fruit.substring(5, -1);
console.log(Res1);

let Fruits = "apple,bananaa,kiwi ";
let es1 = Fruit.substring(6, 13);
console.log(es1);

//3.substr()
let Fruit1 = "apple,bananaa,kiwi ";
let es = Fruit1.substr(6, 11);
console.log(es);

////Replacing string content
//1.replace()
let str = "i am dharmender kumar dharmender";
let Str1 = str.replace("Dharmender", "DHARMENDER");
console.log(str);
console.log(Str1);

////Extracting string character
//1.charAt()
let bio = "Hello world";
console.log(bio.charAt(0));

//2.charCodeAt()
let bio1 = "Hello world";
console.log(bio1.charCodeAt(0));

//exp:-find the unicode of last letter of string
let Bio1 = "HELLO WORLD";
let strlast = Bio1.length - 1;
console.log(Bio1.charCodeAt(strlast));

//3.property access[]
let Bio = "HELLO WORLD";
console.log(Bio[1]);

////other usefull method
//toUppercase  (for change all string in uppercase)
let a="hello mr. dharmender kumar"
console.log(a.toUpperCase());

//toUppercase  (for change all string in uppercase)
let A="HELLO WORLD"
console.log(A.toLowerCase());

//concat()
let b="Dharmender"
let B="kumar"
console.log(b+B);
console.log(b.concat(B));
console.log(b.concat(" "+ B));
console.log(`${b} ${B}`);

//trim()
let STR="          hallo world            "
console.log(STR);

console.log(STR.trim());

//convert string to an array
//split()
let c="a,b ,c,d ,e,f"             //string
console.log(c.split(","));
console.log(c.split(" "));
console.log(c.split("|"));




//interview question merged two string alternativly
// let str1='krishna';
// let str2='veni';
// let mergedstr=""
// for(i=0;i<str1.length;i++)
// {
//     if(str1.length<str2.length) return str1

//      mergedstr+=str1[i]+str2[i]

// }
//      console.log(mergedstr);

let str1 = "krishna";
let str2 = "veni";
let mergedStr = "";

let maxLength = Math.max(str1.length, str2.length);

for (let i = 0; i < maxLength; i++) {
  if (str1[i]) mergedStr += str1[i];
  if (str2[i]) mergedStr += str2[i];
}

console.log(mergedStr); // Output: "kvrenishna"
