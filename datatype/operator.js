// Arithmetic operators
let a = 5;
let b = 3;
console.log("Addition:", a + b); // Addition: 8
console.log("Subtraction:", a - b); // Subtraction: 2
console.log("Multiplication:", a * b); // Multiplication: 15
console.log("Division:", a / b); // Division: 1.6666666666666667
console.log("Modulus:", a % b); // Modulus: 2
console.log("Increment:", a++); // Increment: 5
console.log("Decrement:", a--); // Decrement: 6

// Comparison operators
console.log("Equal to:", a == "5"); // Equal to: true
console.log("Not equal to:", a!= "5"); // Not equal to: false
console.log("Strict equal to:", a === "5"); // Strict equal to: false
console.log("Strict not equal to:", a!== "5"); // Strict not equal to: true
console.log("Greater than:", a > b); // Greater than: true
console.log("Less than:", a < b); // Less than: false
console.log("Greater than or equal to:", a >= b); // Greater than or equal to: true
console.log("Less than or equal to:", a <= b); // Less than or equal to: false

// Logical operators
console.log("Logical AND:", true && true); // Logical AND: true
console.log("Logical OR:", true || false); // Logical OR: true
console.log("Logical NOT:",!true); // Logical NOT: false

// Ternary operator
let age = 18;
console.log("Ternary operator:", age >= 18? "You can vote" : "You cannot vote"); // Ternary operator: "You can vote"

// Unary operators
let obj = {property: "value"};
console.log("Delete:", delete obj.property); // Delete: true
console.log("Void:", void expression); // Void: undefined
console.log("Typeof:", typeof "hello"); // Typeof: "string"
console.log("Plus:", + "-5"); // Plus: -5
console.log("Minus:", -5); // Minus: -5