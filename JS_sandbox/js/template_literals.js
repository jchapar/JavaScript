const name = "Jose";
const age = 27;
const job = "Web Developer";
const city = "Phoenix";
let html;

// With out tmeplate strings (es5)
html =
  "<ul><li>Name: " +
  name +
  "</li><li>Age: " +
  age +
  " </li><li>Job: " +
  job +
  "</li><li>City: " +
  city +
  " </li></ul>";

function hello() {
  return "hello";
}

// With Template Strings (es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? "Over 30" : "Under 30"}</li>
  </ul>
`;

document.body.innerHTML = html;
