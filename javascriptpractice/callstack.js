//how it(callstack) works
function greet() {
  console.log("Hello");
}

function start() {
  greet();
}

start();

//global execution context is created
// start() new execution is created for seprate(start()) function
// greet()  new execution is created for seprate(greet()) function
//clg()   after console the output all execution context id deleted,all execution context is delete then gec is delete
