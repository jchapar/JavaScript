// Create some arrays
const numbers = [43, 89, 7, 3, 99, 65, 24];
const numbers2 = new Array(22, 11, 44, 63, 5, 8);
const fruit = ["Apple", "Orange", "Pear", "Watermelon"];
const mixed = ["Hello", 45, true, undefined, null, { a: 1, b: 1 }, new Date()];

let val;

// Get the array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(99);

// MUTATING ARRAYS
// Add on to the end
numbers.push(200);
// Add on to the front
numbers.unshift(300);
// Remove from the end
numbers.pop();
// Remove from the front
numbers.shift();
// Splice values - Start at index 1 and remove all items up to index 5
numbers.splice(1, 1);
// Reverse
numbers.reverse();

// Concatenate Array
val = numbers.concat(numbers2);

// Sorting Arrays
// val = fruit.sort();
// val = numbers.sort();

// Use the 'compare function'
val = numbers.sort(function (x, y) {
  return x - y;
});

// Reverse sort
val = numbers.sort(function (x, y) {
  return y - x;
});

// Find
function under50(num) {
  return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);
