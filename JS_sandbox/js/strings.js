const firstName = "William";
const lastName = "Johnson";
const age = 25;
const str = "Hello, my name is Jose";
let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "Jose ";
val += "Chaparro";

val = "Hello, my name is " + firstName + " and I am " + age;

// Escaping
val = "That's awesome, I can't wait";
// or
val = "That's awesome, I can't wait";

// Length - Counts the characters of the string
val = firstName.length;

// concat
val = firstName.concat(" ", lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[3];

// indexof()
val = firstName.indexOf("w");
val = firstName.lastIndexOf("w");

// charAt();
val = firstName.charAt("2");

// Get Last character
val = firstName.charAt(firstName.length - 1);

// substring
val = firstName.substring(0, 4);

// Slice
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// Split()
val = str.split(" ");
val = str.split(",");

// replace();
val = str.replace("Brad", "Jack");

// include()
val = str.includes("Hello");

// console.log(val);
