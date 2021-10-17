// Contructor Method - Person Constructor
/*
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

// const brad = new Person("brad", 36);
// const john = new Person("john", 20);

// console.log(brad);
// console.log(john);

const brad = new Person("Brad", "9-10-1981");

console.log(brad.calculateAge());
*/

// Strings
const name1 = "Jeff";
const name2 = new String("Jeff");

// name2.foo = "bar";

// console.log(name1);
// console.log(name2);

// console.log(typeof name1);
// console.log(typeof name2);

// Number
const num1 = 5;
const num2 = new Number(5);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);
