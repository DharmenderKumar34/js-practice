let myname='dharmender kumar';
let course="bca";

console.log(myname);
console.log(course);

//find the length of string
console.log(myname.length);
console.log(course.length);

// Escape character
let anysentense="we are all equal to \"one\" it mean we are one"

let anysentens="we are all equal to 'one' it mean we are one"
let anysentens1='we are all equal to "one" it mean we are one'

console.log(anysentense);
console.log(anysentens);
console.log(anysentens1);

//Finding a string in a string by indexof
const mybiodata='I am dharmender kumar'
console.log(mybiodata.indexOf("d",6));

//bylastIndexOf
const mybiodata1='I am dharmender kumar'
console.log(mybiodata1.lastIndexOf("D",6));

//Searching for a string in a string
//by search()
const mybio='I am dharmender kumar'
let sdata=mybio.search("d")
console.log(sdata);



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

let str1 = 'krishna';
let str2 = 'veni';
let mergedStr = "";

let maxLength = Math.max(str1.length, str2.length);

for (let i = 0; i < maxLength; i++) {
    if (str1[i]) mergedStr += str1[i];
    if (str2[i]) mergedStr += str2[i];
}

console.log(mergedStr); // Output: "kvrenishna"
