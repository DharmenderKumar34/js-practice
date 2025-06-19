let myname="vinod";
const obj={
    [myname]:"hello how are you",
    [20+6] : "my age"
}
console.log(obj);

//object.values  (print only values in array)
const person={
    nem:'fred',
    age:21
}
console.log(Object.values(person));

//object.entries (print key and values in array)
console.log(Object.entries(person));

//o/p:-[ 'fred', 21 ]
// [ [ 'nem', 'fred' ], [ 'age', 21 ] ]

//and now object.fromentries
let arrobj=Object.entries(person)
console.log(Object.fromEntries(arrobj));


//o/p:- { nem: 'fred', age: 21 }