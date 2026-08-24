// ===== FUNCTIONS PRACTICE =====
// Functions are reusable blocks of code

// 1. Simple function with no parameters
console.log("--- Simple Function ---");
function greet() {
  console.log("Hello, World!");
}

greet(); // Call the function

// 2. Function with parameters
console.log("--- Function With Parameters ---");
function greetPerson(name) {
  console.log("Hello, " + name + "!");
}

greetPerson("Alice");
greetPerson("Bob");

// 3. Function with multiple parameters
console.log("--- Multiple Parameters ---");
function add(num1, num2) {
  let sum = num1 + num2;
  console.log(num1 + " + " + num2 + " = " + sum);
}

add(5, 3);
add(10, 20);

// 4. Function that returns a value
console.log("--- Return Values ---");
function multiply(a, b) {
  return a * b;
}

let result = multiply(4, 5);
console.log("4 * 5 = " + result);

// 5. Function that calculates age
console.log("--- Calculate Age ---");
function calculateAge(birthYear) {
  let currentYear = 2024;
  return currentYear - birthYear;
}

let myAge = calculateAge(1990);
console.log("Your age is approximately: " + myAge);

// 6. Arrow function (modern syntax)
console.log("--- Arrow Function ---");
const subtract = (x, y) => x - y;
console.log("10 - 3 = " + subtract(10, 3));
