// ===== CONDITIONALS PRACTICE =====
// Use if/else to make decisions in your code

// 1. Simple if statement
console.log("--- If Statement ---");
let age = 20;

if (age >= 18) {
  console.log("You are an adult");
}

// 2. If/else statement
console.log("--- If/Else Statement ---");
let temperature = 15;

if (temperature > 20) {
  console.log("It's warm outside");
} else {
  console.log("It's cold outside");
}

// 3. If/else if/else statement
console.log("--- If/Else If/Else Statement ---");
let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// 4. Checking multiple conditions
console.log("--- Multiple Conditions ---");
let username = "john";
let password = "password123";

if (username === "john" && password === "password123") {
  console.log("Login successful!");
} else {
  console.log("Invalid username or password");
}

// 5. Using OR condition
console.log("--- OR Condition ---");
let userRole = "admin";

if (userRole === "admin" || userRole === "moderator") {
  console.log("You have special permissions");
} else {
  console.log("You are a regular user");
}
