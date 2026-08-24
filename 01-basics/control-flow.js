// ===================================
// Control Flow in JavaScript
// ===================================

console.log("=== IF/ELSE STATEMENTS ===\n");

const age = 25;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

// Multiple conditions
const score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

console.log("\n=== SWITCH STATEMENT ===\n");

const day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(`Day ${day} is ${dayName}`);

// Switch with multiple cases
const fruit = "apple";

switch (fruit) {
  case "apple":
  case "orange":
  case "banana":
    console.log("It's a fruit!");
    break;
  case "carrot":
  case "broccoli":
    console.log("It's a vegetable!");
    break;
  default:
    console.log("Unknown item");
}

console.log("\n=== FOR LOOP ===\n");

// Traditional for loop
console.log("Counting 1 to 5:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// For loop with array
const fruits = ["apple", "banana", "orange"];
console.log("\nFruits:");
for (let i = 0; i < fruits.length; i++) {
  console.log(`${i}: ${fruits[i]}`);
}

console.log("\n=== WHILE LOOP ===\n");

let count = 0;
console.log("While loop (count from 0 to 3):");
while (count <= 3) {
  console.log(count);
  count++;
}

console.log("\n=== DO...WHILE LOOP ===\n");

let num = 0;
console.log("Do...While loop (executes at least once):");
do {
  console.log(num);
  num++;
} while (num <= 3);

console.log("\n=== FOR...OF LOOP ===\n");

const colors = ["red", "green", "blue"];
console.log("For...of loop:");
for (const color of colors) {
  console.log(color);
}

console.log("\n=== FOR...IN LOOP ===\n");

const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};

console.log("For...in loop:");
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

console.log("\n=== BREAK AND CONTINUE ===\n");

// Break - exits the loop
console.log("Loop with break (stop at 3):");
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break; // exits loop
  }
  console.log(i);
}

// Continue - skips current iteration
console.log("\nLoop with continue (skip 3):");
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // skips to next iteration
  }
  console.log(i);
}

console.log("\n=== NESTED LOOPS ===\n");

console.log("Multiplication table (3x3):");
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

console.log("\n=== PRACTICAL EXAMPLES ===\n");

// Find even numbers in array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Even numbers:");
for (const num of numbers) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

// Search for value in array
const target = 6;
console.log(`\nSearching for ${target}:`);
let found = false;
for (const num of numbers) {
  if (num === target) {
    found = true;
    break;
  }
}
console.log(found ? "Found!" : "Not found");

// Count occurrences
const letters = ['a', 'b', 'a', 'c', 'a', 'b'];
let countA = 0;
for (const letter of letters) {
  if (letter === 'a') {
    countA++;
  }
}
console.log(`\nLetter 'a' appears ${countA} times in the array`);
