/**
 * if(something){
 *  do this
 * } else {
 *  do this instead
 * }
 */

const id = 100;

// Equal to ************
// if (id == 10) {
//   console.log("Correct");
// } else {
//   console.log("incorrect");
// }

// // Not Equal to ************
// if (id != 10) {
//   console.log("Correct");
// } else {
//   console.log("incorrect");
// }

// // Equal to value & type ************
// if (id === 100) {
//   console.log("Correct");
// } else {
//   console.log("incorrect");
// }

// // Equal to value & type ************
// if (id !== 100) {
//   console.log("Correct");
// } else {
//   console.log("incorrect");
// }

// Test if undefined ************
// if (typeof id !== "undefined") {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log(`No ID`);
//  }

// Greater or less than
if (id > 200) {
  console.log("Correct");
} else {
  console.log("Incorrect");
}

// IF ELSE

const color = "orange";

// if (color === "red") {
//   console.log("Color is red");
// } else if (color === "blue") {
//   console.log("Color is blue");
// } else {
//   console.log("Color is not blue or red");
// }

// Logical Operators
const name = "Steve";
const age = 16;

// and &&
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// or ||
if (age < 16 || age > 65) {
  console.log(`${name} can not run in the race`);
} else {
  console.log(`${name} can run in the race`);
}

// Ternary Operator
console.log(id === 100 ? "Correct" : "Incorrect");

// Without braces
if (id === 100) console.log("Correct");
else console.log("Incorrect");
