// function multiplier(factor) {
//     return function(x) {
//         return x * factor;
//     };
// }

// // Function returned as a result
// const double = multiplier(2);
// console.log(double(5)); // Output: 10


//higher order function
function greet(name, callback) {
    return callback(name);
}

// Function passed as an argument
function sayHello(name) {
    return 'Hello, ' + name + '!';
}

// Calling the higher-order function
const greeting = greet('Aneesh', sayHello);
console.log(greeting); 

//immediatly invoked function expression
(function() {
    var message = "Hello, world!";
    console.log(message);
})();

// IIFE for calculation
var result = (function() {
    var num1 = 10;
    var num2 = 5;
    return num1 + num2;
})();

console.log("The result is: " + result);

function* generator(i) {
    yield i;
    yield i + 10;
  }
   
  const gen = generator(10);
   
  console.log(gen.next().value);
  // Expected output: 10
   
  console.log(gen.next().value);
  // Expected output: 20

  console.log(gen.next().value);
  // Expected output: 20


