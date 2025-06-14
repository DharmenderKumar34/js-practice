// return obj with double value {x:20,y:40}
let obj = { x: 10, y: 20 };

for (let a in obj) {
  obj[a] = obj[a] * 2;
}
console.log(obj);

//return ne array with obj value like [10,20]

let obj1 = { x: 10, y: 20 };
let b = [];
for (let a in obj1) {
  console.log(obj1[a]);
  b.push(obj1[a]);
}
console.log(Object.values(obj1));
console.log(b);

// what will be the output
let bioData = {
  myName: {
     realName: "vinod thapa", 
     channelName: "thapa technical" 
    },
  myAge: 26,
  getData() {
    console.log(`My name is ${this.myName.channelName} and my age is ${this.myAge}`);
  },
};

bioData.getData();
