var area = "circle";
var pi = 3.142,
  r = 3;
(l = 5), (b = 4);

switch (area) {
  case "circle":
    console.log("area of circle-" + pi * r * r);
    break;
  case "triangle":
    console.log("area of triangle-" + (l * b) / 2);
    break;
  case "rectangle":
    console.log("area of rectangle-" + l * b);
    break;
  default:
    console.log("please enter valid data");
    break;
}
