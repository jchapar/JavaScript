/**
Functions are blocks of code that can be defined and called at a later time or called at the same time they are defined.
 */

// FUNCTION DECLARATIONS

// Parameters AKA Arguments go inside the parenthesis. Items put in the arguments place when the function is called will go here.
// We can also set default assignments by putting the arguments equal to something
function greet(firstName = "John", lastName = "Doe") {
  // Anything inside here is the function scope
  return `Hello ${firstName} ${lastName}`;
}

// console.log(greet());

// FUNCTION EXPRESIONS

const square = function (x = 3) {
  return x * x;
};

// console.log(square());

// For the most part it doesn't matter which one you use but function expresssions will yeild more benefits in your coding later

// IMMIDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
// Very useful when it comes to design patterns - Module Pattern for example

(function () {
  // console.log("IIFE Ran..");
})();
(function (name) {
  // console.log(`Hello ${name}`);
})("Jose");

// PROPERTY METHODS
// When a function is put inside of an object its called a method

const todo = {
  add: function () {
    console.log("Add todo..");
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  },
};

todo.delete = function () {
  console.log("Delete Todo...");
};

todo.add();
todo.edit(22);
todo.delete();
