////date and time (creating date object)
//new Date()
let curdate = new Date();
console.log(curdate);
console.log(new Date());
console.log(new Date().toLocaleString());
console.log(new Date().toString());

//new Date(year,month,date,hours,minutes,seconds,miliseconds)
var d = new Date(2025, 5, 15, 19, 20, 30, 0);
console.log(d);
console.log(d.toLocaleString());

//new Date(dateString)
var D = new Date("jun 15,2025, 11:13:00");
console.log(D);
console.log(D.toLocaleString());

//new Date(milliseconds)
var f = new Date(1749379066675);
var F = new Date(86400000 * 2);
console.log(f);
console.log(F);

//Date.now()
console.log(Date.now());

// Dates method
// 🔍 Get Methods (read date values)
// Method	Description
// getFullYear()	Gets the 4-digit year
// getMonth()	Gets the month (0–11)
// getDate()	Gets the day of the month (1–31)
// getDay()	Gets the day of week (0–6)
// getHours()	Gets the hour (0–23)
// getMinutes()	Gets the minutes (0–59)
// getSeconds()	Gets the seconds (0–59)
// getMilliseconds()	Gets the milliseconds (0–999)
// getTime()	Gets time in milliseconds since Jan 1, 1970

const curDate = new Date();
console.log(curDate.toLocaleString());
console.log(curDate.getFullYear());
console.log(curDate.getMonth());
console.log(curDate.getDate());
console.log(curDate.getDay());

//✍️ Set Methods (change date values)
// Method	Description
// setFullYear(year)	Sets the year
// setMonth(month)	Sets the month (0–11)
// setDate(day)	Sets the day of month
// setHours(h)	Sets the hour
// setMinutes(m)	Sets the minutes
// setSeconds(s)	Sets the seconds
// setMilliseconds(ms)	Sets the milliseconds
// setTime(ms)

const CurDate = new Date();
console.log(CurDate.setFullYear(2025));
console.log(CurDate.setFullYear(2025, 10, 5));
console.log(CurDate.setMonth(10));
console.log(CurDate.setDate(5));
console.log(CurDate.toLocaleString());

//times method
//
const curTime = new Date();
console.log(curTime.getTime());
console.log(curTime.getHours());
console.log(curTime.getMinutes());
console.log(curTime.getSeconds());
console.log(curTime.getMilliseconds());

const CurTime = new Date();
// console.log(CurTime.setTime());
console.log(CurTime.setHours(5));
console.log(CurTime.setMinutes(5));
console.log(CurTime.setSeconds(5));
console.log(CurTime.setMilliseconds(5));
