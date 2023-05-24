// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const value = { value: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.value *= 2));
};

console.log(multiply());
console.log(multiply(value));
