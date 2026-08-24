// ===== LOOPS PRACTICE =====
// Loops repeat code multiple times

// 1. For loop - repeat a set number of times
console.log("--- For Loop ---");
for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}

// 2. Print numbers 0-9
console.log("--- Numbers 0-9 ---");
for (let num = 0; num < 10; num++) {
  console.log(num);
}

// 3. While loop - repeat while condition is true
console.log("--- While Loop ---");
let counter = 1;
while (counter <= 3) {
  console.log("While loop iteration: " + counter);
  counter++;
}

// 4. Loop through an array
console.log("--- Loop Through Array ---");
let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit: " + fruits[i]);
}
