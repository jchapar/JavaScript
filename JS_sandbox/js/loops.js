//  Loops & Interation
// Loops are instructions that repeat until a condition is met
// General loops - for, while, forWhile

// FOR LOOP - when you know how many iterations its going to have
// for (let i = 0; i < 10; i++) {
//   if (i === 2) {
//     console.log("2 if my favorite number");
//     continue;
//   }

//   if (i === 5) {
//     console.log("Stop the loop");
//     break;
//   }
//   console.log(`Number ` + i);
// }

// WHILE LOOP
// let i = 0;

// while (i < 10) {
//   console.log(`Number ${i}`);
//   i++;
// }

// DO WHILE
// let i = 0;

// do {
//   console.log(`Number ${i}`);
//   i++;
// } while (i < 10);

// LOOP THROUGH AN ARRAY
const cars = ["ford", "chevy", "honda", "toyota"];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// Always use a forEach loop when needing to loop through an array
// cars.forEach(function (car, index) {
//   console.log(`${index} : ${car}`);
// });

// MAP
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Sara" },
//   { id: 3, name: "Mike" },
//   { id: 4, name: "Mike" },
// ];

// const ids = users.map(function (user) {
//   return user.id;
// });

// console.log(ids);

// Often used for objects FOR IN Loop
// const user = {
//   firstName: "Mike",
//   lastName: "Walt",
//   age: 30,
// };

// for (let x in user) {
//   console.log(`${x} : ${user[x]}`);
// }
