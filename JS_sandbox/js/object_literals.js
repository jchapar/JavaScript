/**
 -Define a person and set it equal to a set of curly braces. This defines an object literal.  
 - we can now enter key value pairs inside
 */

const person = {
  firstName: "Steve",
  lastName: "Smith",
  age: 30,
  email: "steve@email.com",
  hobbies: ["music", "sports"],
  address: {
    city: "Miami",
    state: "Florida",
  },
  getBirthYear: function () {
    return 2021 - this.age;
  },
};

let val;

val = person;

// Get Specific Value
val = person.firstName;
val = person["firstName"]; //Not used often but works
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.address;
val = person.address.state;
val = person.address["city"];
val = person.getBirthYear();

console.log(val);

const people = [
  { name: "John", age: 29 },
  { name: "Jane", age: 26 },
  { name: "Mike", age: 43 },
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
