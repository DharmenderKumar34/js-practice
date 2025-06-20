// flat()  (flatten array)
const arr=[1,2,[3,4]]
console.log(arr.flat());

const arr1=[1,2,[3,[4,5]]]
console.log(arr1.flat(2));

//flatMap() 
const a=[1,2,3]
const result=a.flatMap(num=>[num,num*2])
console.log(result);