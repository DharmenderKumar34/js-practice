const sum = (...params)=> {
console.log(params);
var total = 0;
for (i of params){
total += i;
}
console.log(total);

}

sum(1, 2, 3, 4, 5, 6);

//
const sum1 = (a,b,c,...params)=> {
console.log(params);
var total = 0;
for (i of params){
total += i;
}
console.log(total);

}

sum1(1, 2, 3, 4, 5, 6);