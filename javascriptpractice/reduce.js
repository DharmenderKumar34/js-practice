
var a=[10, 25, 88, 6, 99, 3];
let b=a.reduce((acc,cur)=>{
    if(acc<cur){
      acc=cur
    }
    return acc;
},a[0])
console.log(b);

const words = ["JavaScript", "is", "fun"];
let x=words.reduce((acc,cur)=>{
  return acc+cur;

})

console.log(x);

const word = ["Hello", " ", "World","!"];
let y=word.reduce((acc,cur)=>{
  return `${acc}${cur}`;
})

console.log(y);