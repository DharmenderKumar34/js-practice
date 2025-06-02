//1.// Find the Maximum Number in an Array
// let a= [1,2,3,4,5]
// let b=0;
// for(let i=0;i<5;i++){
//     if(a[i]>b){
//         b=a[i];
//     }
// }
// console.log(b);

//2.Count How Many Times a Value Occurs in an Array

let a= [1,2,3,2,5]
var count=0;
a.sort()
let b=a.reduce((acc,cur)=>{
    //  console.log(acc,cur);
    // if(acc==cur){
    //     return count++
    //     // console.log(count);
    // }
    // else{
    //        acc=cur;
    //         console.log(acc,cur);
    //         return acc;
    // }
    acc[cur]=(acc[cur]||0)+1
        return acc
},{})
 console.log(b);

    

