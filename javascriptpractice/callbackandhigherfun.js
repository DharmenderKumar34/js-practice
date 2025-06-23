const add=(a,b)=>{
    return a+b;
}
const sub=(a,b)=>{
    return a-b;
}
const multi=(a,b)=>{
    return a*b;
}

const calculator=(num1,num2,oper)=>{
    return oper(num1,num2);
}

console.log(calculator(5,2,multi));