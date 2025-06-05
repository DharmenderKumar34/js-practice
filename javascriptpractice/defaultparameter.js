////default parameters
function str(name='dk',age=21){
    console.log(`hello ${name},${age}`);

}
str('alice',24);
str('aseem');

function str1({name='dk',age=21}= {}){
    console.log(`hello ${name},${age}`);

}
str1({name:'alice',age:24});
str1({age:30});

//second example of default parameters
function print({ name = "Unknown", age = 0 } = {}) {
  console.log(`Name: ${name}, Age: ${age}`);
}

// Only provide the second parameter `age`
print({ age: 30 }); // Output: Name: Unknown, Age: 30