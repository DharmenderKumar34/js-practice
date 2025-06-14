var a = [1, 2, 2, 3, 4][(0, 1, 2, 3, 4)];
let b = a.filter((res, index) => {
  if (a.indexOf(res) == index) {
    return res;
  }
});
console.log(a);

const marks = [85, 42, 91, 55, 78];
const passed = marks.filter((mark) => mark >= 60);
console.log(passed); // [85, 91, 78]

const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "A" },
];

const gradeAStudents = students.filter((student) => student.grade === "A");
console.log(gradeAStudents);
