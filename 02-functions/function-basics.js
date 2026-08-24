// ===================================
// Function Basics in JavaScript
// ===================================

console.log("=== FUNCTION DECLARATION ===\n");

// 1. Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

console.log("Function declaration:");
console.log(greet("Alice"));
console.log(greet("Bob"));

// 2. Function with multiple parameters
function add(a, b) {
  return a + b;
}

console.log("\nFunction with multiple parameters:");
console.log("add(5, 3):", add(5, 3));
console.log("add(10, 20):", add(10, 20));

// 3. Function with default parameters
function introduce(name = "Guest", age = 0) {
  return `My name is ${name} and I'm ${age} years old`;
}

console.log("\nFunction with default parameters:");
console.log(introduce("John", 30));
console.log(introduce("Jane"));           // age defaults to 0
console.log(introduce());                 // both use defaults

console.log("\n=== FUNCTION EXPRESSION ===\n");

// 4. Function Expression
const multiply = function(a, b) {
  return a * b;
};

console.log("Function expression:");
console.log("multiply(4, 5):", multiply(4, 5));

// 5. Anonymous function
const divide = function(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
};

console.log("\nAnonymous function with validation:");
console.log("divide(10, 2):", divide(10, 2));
console.log("divide(10, 0):", divide(10, 0));

console.log("\n=== ARROW FUNCTIONS ===\n");

// 6. Arrow function - concise syntax
const square = (x) => {
  return x * x;
};

console.log("Arrow function:");
console.log("square(5):", square(5));

// 7. Arrow function - implicit return
const cube = (x) => x ** 3;

console.log("Arrow function with implicit return:");
console.log("cube(3):", cube(3));

// 8. Arrow function - single parameter (parentheses optional)
const double = x => x * 2;

console.log("Arrow function with single parameter:");
console.log("double(7):", double(7));

console.log("\n=== FUNCTION WITH MULTIPLE RETURN VALUES ===\n");

// 9. Using object to return multiple values
function getCoordinates() {
  return { x: 10, y: 20 };
}

const coord = getCoordinates();
console.log("getCoordinates():", coord);
console.log("x:", coord.x, "y:", coord.y);

// 10. Using array to return multiple values
function getMinMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

const numbers = [3, 1, 9, 5, 2];
const [min, max] = getMinMax(numbers); // Destructuring
console.log("\ngetMinMax([3, 1, 9, 5, 2]):");
console.log("Min:", min, "Max:", max);

console.log("\n=== FUNCTION SCOPE ===\n");

// 11. Local scope
function localScopeExample() {
  const local = "I'm local";
  console.log("Inside function:", local);
}

localScopeExample();
// console.log(local); // Error: local is not defined outside the function

// 12. Global scope
const global = "I'm global";

function accessGlobal() {
  console.log("Accessing global:", global);
}

accessGlobal();

console.log("\n=== HIGHER-ORDER FUNCTIONS ===\n");

// 13. Function that returns another function
function makeMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const multiplyBy5 = makeMultiplier(5);
console.log("makeMultiplier(5)(10):", multiplyBy5(10));

// 14. Function that takes another function as parameter
function executeOperation(a, b, operation) {
  return operation(a, b);
}

const result = executeOperation(10, 5, add);
console.log("\nexecuteOperation(10, 5, add):", result);

console.log("\n=== REST PARAMETERS ===\n");

// 15. Function with rest parameters (unlimited arguments)
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log("sum(1, 2, 3):", sum(1, 2, 3));
console.log("sum(1, 2, 3, 4, 5):", sum(1, 2, 3, 4, 5));

// Using reduce method
function sumWithReduce(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log("sumWithReduce(2, 4, 6, 8):", sumWithReduce(2, 4, 6, 8));

console.log("\n=== RECURSION ===\n");

// 16. Recursive function
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log("factorial(5):", factorial(5));
console.log("factorial(6):", factorial(6));
