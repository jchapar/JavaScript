let val;

const today = new Date();
let birthday = new Date("5-9-1994 11:25:00");
birthday = new Date("May 9 1994");
birthday = new Date("5/9/1994");

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1994);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setHours(25);

console.log(birthday);
