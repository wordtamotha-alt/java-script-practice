// ===================================
// Arrays in JavaScript
// ===================================

console.log("=== CREATING ARRAYS ===\n");

// Array literal
const numbers = [1, 2, 3, 4, 5];
console.log("Array literal:", numbers);

// Array with mixed types
const mixed = [1, "hello", true, null, undefined, { name: "John" }];
console.log("Mixed array:", mixed);

// Empty array
const empty = [];
console.log("Empty array:", empty);

// Array constructor (less common)
const arr = new Array(3); // Creates array with 3 empty slots
console.log("Array constructor:", arr);

console.log("\n=== ACCESSING ELEMENTS ===\n");

const fruits = ["apple", "banana", "orange", "grape"];
console.log("Array:", fruits);

console.log("Index 0:", fruits[0]);      // apple
console.log("Index 2:", fruits[2]);      // orange
console.log("Length:", fruits.length);

console.log("\n=== MODIFYING ARRAYS ===\n");

// Change element
fruits[1] = "mango";
console.log("After changing index 1:", fruits);

// Add element at end
fruits[fruits.length] = "kiwi";
console.log("After adding at end:", fruits);

console.log("\n=== ARRAY METHODS ===\n");

// Push - adds element to end
const nums = [1, 2, 3];
console.log("Original:", nums);
nums.push(4, 5);
console.log("After push(4, 5):", nums);

// Pop - removes last element
const popped = nums.pop();
console.log("Popped:", popped);
console.log("After pop():", nums);

// Unshift - adds element to beginning
nums.unshift(0);
console.log("After unshift(0):", nums);

// Shift - removes first element
const shifted = nums.shift();
console.log("Shifted:", shifted);
console.log("After shift():", nums);

// Slice - returns portion without modifying original
const slice = nums.slice(1, 3);
console.log("slice(1, 3):", slice);
console.log("Original unchanged:", nums);

// Splice - modifies array (add/remove elements)
const spliced = nums.splice(2, 1, 99); // Remove 1 element at index 2, insert 99
console.log("Removed:", spliced);
console.log("After splice(2, 1, 99):", nums);

console.log("\n=== SEARCHING IN ARRAYS ===\n");

const animals = ["cat", "dog", "bird", "dog", "fish"];

// IndexOf - finds first occurrence
console.log("indexOf('dog'):", animals.indexOf('dog'));      // 1
console.log("indexOf('lion'):", animals.indexOf('lion'));    // -1 (not found)

// LastIndexOf - finds last occurrence
console.log("lastIndexOf('dog'):", animals.lastIndexOf('dog')); // 3

// Includes - checks if element exists
console.log("includes('bird'):", animals.includes('bird'));  // true
console.log("includes('zebra'):", animals.includes('zebra')); // false

// Find - returns first element that matches condition
const found = animals.find(animal => animal.length > 3);
console.log("First animal with length > 3:", found);

// FindIndex - returns index of first matching element
const foundIndex = animals.findIndex(animal => animal === 'bird');
console.log("Index of 'bird':", foundIndex);

console.log("\n=== HIGHER-ORDER ARRAY METHODS ===\n");

const numbers2 = [1, 2, 3, 4, 5];

// Map - transforms each element
const doubled = numbers2.map(num => num * 2);
console.log("Original:", numbers2);
console.log("Doubled:", doubled);

// Filter - returns elements that match condition
const evens = numbers2.filter(num => num % 2 === 0);
console.log("Even numbers:", evens);

// Reduce - accumulates values into single result
const sum = numbers2.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);

const product = numbers2.reduce((acc, num) => acc * num, 1);
console.log("Product:", product);

// ForEach - executes function for each element (no return value)
console.log("ForEach output:");
numbers2.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});

console.log("\n=== ARRAY METHODS - CHECKING ===\n");

const scores = [85, 90, 78, 92, 88];

// Every - checks if all elements match condition
const allPassing = scores.every(score => score >= 70);
console.log("All scores >= 70:", allPassing); // true

// Some - checks if any element matches condition
const hasHigh = scores.some(score => score >= 90);
console.log("Any score >= 90:", hasHigh); // true

console.log("\n=== ARRAY METHODS - TRANSFORMATION ===\n");

const words = ["hello", "world", "javascript"];

// Join - combines elements into string
const sentence = words.join(" ");
console.log("join(' '):", sentence);

// Split - converts string to array
const chars = "cat".split("");
console.log("'cat'.split(''):", chars);

// Reverse - reverses array
const reversed = [1, 2, 3].reverse();
console.log("Reverse [1,2,3]:", reversed);

// Sort - sorts elements
const unsorted = [3, 1, 4, 1, 5, 9];
console.log("Original:", unsorted);
const sorted = [...unsorted].sort((a, b) => a - b); // Spread to avoid modifying original
console.log("Sorted (numeric):", sorted);

console.log("\n=== MULTIDIMENSIONAL ARRAYS ===\n");

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("Matrix:", matrix);
console.log("matrix[1][2]:", matrix[1][2]); // 6

// Flatten - removes nesting
const nested = [1, [2, 3], [4, [5, 6]]];
console.log("Nested:", nested);
console.log("flat():", nested.flat());
console.log("flat(2):", nested.flat(2)); // 2 levels deep

console.log("\n=== COPYING ARRAYS ===\n");

const original = [1, 2, 3];

// Shallow copy
const copy1 = [...original]; // Spread operator
const copy2 = original.slice(); // Slice method
const copy3 = Array.from(original); // Array.from()

console.log("Original:", original);
console.log("Copy with spread:", copy1);
console.log("Modifying copy doesn't affect original");

copy1[0] = 999;
console.log("After modifying copy:", copy1);
console.log("Original unchanged:", original);
