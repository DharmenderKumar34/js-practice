//1st way (simple)
// let names={
//     fname:"vinod",
//     lname:'thapa',
//     printFullName:function(){
//         console.log(this.fname+" "+this.lname);
//     }
// }
// names.printFullName();

//if print full method is out of obj
let names={
    fname:"vinod",
    lname:'thapa',
  
}

let  printFullName=function(city,ert,tre){                          //if pass any parameters/
        console.log(this.fname+" "+this.lname,city,ert,tre);
    }
printFullName.call(names,"jaipur",'etc','etc');

// 2nd way(using call method)
let obj={
    fname:'Akshay',
    lname:'saini'
}
printFullName.call(obj,"mumbai",'etc','etc')

//3rd way (using apply method) similar to call but second parameter pass in an array 
printFullName.apply(obj,["mumbai",'dehradun','etc'])

//4th way (using bind method) similar to call but bind method not directly called
let b=printFullName.bind(obj,"mumbai",'etc','etc')     //return the function 
console.log(b);     //print the whole function
b();


// some other examples
function greet(city) {
  console.log(`Hello, my name is ${this.name} from ${city}`);
}

const person = { name: "Dharmender" };

greet.call(person, "Delhi");
// 👉 Output: Hello, my name is Dharmender from Delhi

greet.apply(person, ["Mumbai"]);
// 👉 Output: Hello, my name is Dharmender from Mumbai
