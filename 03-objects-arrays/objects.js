// ===================================
// Objects in JavaScript
// ===================================

console.log("=== CREATING OBJECTS ===\n");

// Object literal
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
  email: "alice@example.com"
};

console.log("Person object:", person);

// Empty object
const empty = {};
console.log("Empty object:", empty);

// Object constructor (less common)
const car = new Object();
car.brand = "Toyota";
car.model = "Camry";
console.log("Car object:", car);

console.log("\n=== ACCESSING PROPERTIES ===\n");

// Dot notation
console.log("person.name:", person.name);
console.log("person.age:", person.age);

// Bracket notation
console.log("person['city']:", person['city']);
console.log("person['email']:", person['email']);

// Using variables as keys
const key = "name";
console.log("person[key]:", person[key]);

console.log("\n=== MODIFYING PROPERTIES ===\n");

// Update existing property
person.age = 31;
console.log("After updating age:", person.age);

// Add new property
person.phone = "555-1234";
console.log("After adding phone:", person.phone);
console.log("Updated person:", person);

// Delete property
delete person.email;
console.log("After deleting email:", person);

console.log("\n=== METHODS IN OBJECTS ===\n");

const student = {
  name: "Bob",
  grade: 85,
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  },
  getInfo: function() {
    return `${this.name} has a grade of ${this.grade}`;
  },
  // Shorthand method syntax
  study() {
    console.log(`${this.name} is studying`);
  }
};

console.log("Student:", student);
student.greet();
console.log(student.getInfo());
student.study();

console.log("\n=== THIS KEYWORD ===\n");

const user = {
  username: "john_doe",
  email: "john@example.com",
  displayInfo: function() {
    console.log(`Username: ${this.username}`);
    console.log(`Email: ${this.email}`);
  }
};

user.displayInfo();

console.log("\n=== NESTED OBJECTS ===\n");

const company = {
  name: "TechCorp",
  location: {
    city: "San Francisco",
    zip: "94102"
  },
  employees: [
    { name: "Alice", role: "Developer" },
    { name: "Bob", role: "Designer" }
  ]
};

console.log("Company:", company);
console.log("Company city:", company.location.city);
console.log("First employee:", company.employees[0]);
console.log("First employee name:", company.employees[0].name);

console.log("\n=== OBJECT METHODS ===\n");

const book = {
  title: "JavaScript Basics",
  author: "John Smith",
  year: 2023
};

// Object.keys - get all keys
const keys = Object.keys(book);
console.log("Keys:", keys);

// Object.values - get all values
const values = Object.values(book);
console.log("Values:", values);

// Object.entries - get [key, value] pairs
const entries = Object.entries(book);
console.log("Entries:", entries);

// Object.assign - copy/merge objects
const updated = Object.assign({}, book, { year: 2024 });
console.log("Updated book:", updated);
console.log("Original unchanged:", book);

console.log("\n=== PROPERTY ITERATION ===\n");

const colors = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF"
};

// for...in loop
console.log("Using for...in:");
for (const color in colors) {
  console.log(`${color}: ${colors[color]}`);
}

// forEach with Object.entries
console.log("\nUsing Object.entries:");
Object.entries(colors).forEach(([color, hex]) => {
  console.log(`${color}: ${hex}`);
});

console.log("\n=== CHECKING PROPERTIES ===\n");

const product = {
  name: "Laptop",
  price: 1200,
  inStock: true
};

// hasOwnProperty - check if object has property
console.log("hasOwnProperty('name'):", product.hasOwnProperty('name')); // true
console.log("hasOwnProperty('discount'):", product.hasOwnProperty('discount')); // false

// in operator
console.log("'price' in product:", 'price' in product); // true
console.log("'color' in product:", 'color' in product); // false

// Checking for undefined
console.log("product.discount:", product.discount); // undefined
console.log("product.discount !== undefined:", product.discount !== undefined); // false

console.log("\n=== OBJECT DESTRUCTURING ===\n");

// Basic destructuring
const { name, age } = person;
console.log("Destructured name:", name);
console.log("Destructured age:", age);

// With default values
const { city, country = "USA" } = person;
console.log("City:", city);
console.log("Country (default):", country);

// Renaming
const { name: personName, grade: studentGrade } = student;
console.log("Renamed name:", personName);

console.log("\n=== SPREAD OPERATOR ===\n");

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Merge objects
const merged = { ...obj1, ...obj2 };
console.log("Merged:", merged);

// Override properties
const updated2 = { ...obj1, b: 99 };
console.log("Updated:", updated2);

console.log("\n=== COMPUTED PROPERTY NAMES ===\n");

const key1 = "firstName";
const key2 = "lastName";

const obj = {
  [key1]: "John",
  [key2]: "Doe",
  [key1.toUpperCase()]: "JOHN"
};

console.log("Object with computed keys:", obj);
