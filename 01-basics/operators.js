// ===================================
// Operators in JavaScript
// ===================================

console.log("=== ARITHMETIC OPERATORS ===\n");

// Addition
console.log("10 + 5 =", 10 + 5);

// Subtraction
console.log("10 - 5 =", 10 - 5);

// Multiplication
console.log("10 * 5 =", 10 * 5);

// Division
console.log("10 / 5 =", 10 / 5);

// Modulo (remainder)
console.log("10 % 3 =", 10 % 3);

// Exponentiation
console.log("2 ** 3 =", 2 ** 3);

console.log("\n=== ASSIGNMENT OPERATORS ===\n");

let x = 10;
console.log("x = 10:", x);

x += 5; // x = x + 5
console.log("x += 5:", x);

x -= 3; // x = x - 3
console.log("x -= 3:", x);

x *= 2; // x = x * 2
console.log("x *= 2:", x);

x /= 4; // x = x / 4
console.log("x /= 4:", x);

console.log("\n=== COMPARISON OPERATORS ===\n");

// Equal value
console.log("5 == '5':", 5 == '5');      // true (loose equality)
console.log("5 === '5':", 5 === '5');    // false (strict equality)

// Not equal
console.log("5 != '5':", 5 != '5');      // false
console.log("5 !== '5':", 5 !== '5');    // true

// Greater than
console.log("10 > 5:", 10 > 5);          // true
console.log("10 > 15:", 10 > 15);        // false

// Less than
console.log("10 < 5:", 10 < 5);          // false
console.log("10 < 15:", 10 < 15);        // true

// Greater than or equal
console.log("10 >= 10:", 10 >= 10);      // true
console.log("10 >= 5:", 10 >= 5);        // true

// Less than or equal
console.log("10 <= 10:", 10 <= 10);      // true
console.log("10 <= 5:", 10 <= 5);        // false

console.log("\n=== LOGICAL OPERATORS ===\n");

// AND (&&) - both must be true
console.log("true && true:", true && true);      // true
console.log("true && false:", true && false);    // false
console.log("false && false:", false && false);  // false

// OR (||) - at least one must be true
console.log("true || false:", true || false);    // true
console.log("false || false:", false || false);  // false
console.log("true || true:", true || true);      // true

// NOT (!) - inverts boolean
console.log("!true:", !true);                    // false
console.log("!false:", !false);                  // true

// Practical examples
const age = 25;
const hasLicense = true;

console.log("\nPractical example:");
console.log("age >= 18 && hasLicense:", age >= 18 && hasLicense); // true (can drive)

const hasJob = false;
const hasMoney = true;
console.log("hasJob || hasMoney:", hasJob || hasMoney); // true (has resources)

console.log("\n=== INCREMENT/DECREMENT OPERATORS ===\n");

let count = 5;
console.log("count:", count);

// Pre-increment
console.log("++count:", ++count);        // increments then returns (6)
console.log("count after ++count:", count); // 6

// Post-increment
console.log("count++:", count++);        // returns then increments (6)
console.log("count after count++:", count); // 7

// Pre-decrement
console.log("--count:", --count);        // decrements then returns (6)
console.log("count after --count:", count); // 6

// Post-decrement
console.log("count--:", count--);        // returns then decrements (6)
console.log("count after count--:", count); // 5

console.log("\n=== TERNARY OPERATOR ===\n");

// condition ? valueIfTrue : valueIfFalse
const age2 = 20;
const status = age2 >= 18 ? "Adult" : "Minor";
console.log("Age 20 status:", status);

const score = 85;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log("Score 85 grade:", grade);

console.log("\n=== STRING OPERATORS ===\n");

const firstName = "John";
const lastName = "Doe";

// Concatenation with +
const fullName = firstName + " " + lastName;
console.log("Concatenation:", fullName);

// Template literals (backticks)
const message = `Hello, ${firstName} ${lastName}!`;
console.log("Template literal:", message);

console.log("\n=== OPERATOR PRECEDENCE ===\n");

// Multiplication and division before addition and subtraction
console.log("2 + 3 * 4:", 2 + 3 * 4);    // 14 (not 20)
console.log("(2 + 3) * 4:", (2 + 3) * 4); // 20

// Exponentiation before multiplication
console.log("2 * 3 ** 2:", 2 * 3 ** 2);  // 18 (not 36)
console.log("(2 * 3) ** 2:", (2 * 3) ** 2); // 36

console.log("\n=== TYPEOF OPERATOR ===\n");

console.log("typeof 42:", typeof 42);
console.log("typeof 'hello':", typeof 'hello');
console.log("typeof true:", typeof true);
console.log("typeof undefined:", typeof undefined);
console.log("typeof {}:", typeof {});
console.log("typeof []:", typeof []);
console.log("typeof null:", typeof null);  // quirk: returns 'object'
console.log("typeof (() => {}):", typeof (() => {}));
