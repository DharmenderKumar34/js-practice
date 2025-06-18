// // 1st way
// let obj = {
//   myname: "dk",
//   myage: 20,
//   getData: function () {
//     console.log(obj.myname, obj.myage);
//   },
// };
// obj.getData(); //dk 20

// // 2nd way
// let obj1 = {
//   myname: "dk",
//   myage: 20,
//   getData() {
//     console.log(obj1.myname, obj.myage);
//   },
// };
// obj1.getData(); //dk 20

// //3rd way
// let Obj = {
//   myname: {
//     name: "vinod",
//     cname: "thapa",
//   },
//   myage: 20,
//   getData() {
//     console.log(Obj.myname.name);
//   },
// };
// Obj.getData(); //vinod

//what is the output of this
// function myname(){
//     console.log(this);
// }
// myname();

//what is the output of this
let Name = "vinod";
function myName() {
  console.log(this.Name);
}
myName();

// 3rd way to write this
