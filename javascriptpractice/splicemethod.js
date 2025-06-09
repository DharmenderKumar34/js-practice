//splice() method    (add dec at the end of the array)
const months = ["jan", "feb", "mar", "apr", "jun"];

const newmonth = months.splice(5, 0, "dec");

console.log(months);

console.log(newmonth); //return [] empty bcz nothing delete in this array

// update mar to Mar

const updatemonth = months.splice(2, 1, "Mar");

console.log(months);

console.log(updatemonth); //return [mar] because mar delete from the array

//update mar to Mar by find index

const month = ["jan", "feb", "mar", "apr", "jun"];

const indexmonth = month.indexOf("mar");

if (indexmonth != -1) {
  console.log(month.splice(indexmonth, 1, "Mar"));

  console.log(month);
} else {
  console.log("No such data find");
}

//delete apr from the

const monthss = ["jan", "feb", "mar", "apr", "jun"];

const indexMonth = monthss.indexOf("apr");

if (indexMonth != -1) {
  console.log(monthss.splice(indexMonth, 1));

  console.log(monthss);
} else {
  console.log("No such data find");
}
