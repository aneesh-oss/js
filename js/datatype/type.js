
const name = 'John';
console.log(typeof name); // "string"

const age = 30;
console.log(typeof age); // "number"
// Type Casting - converting one data type to another
// let x = '15';
// console.log(typeof x); // string

// x = Number(x);
// console.log(typeof x); // number

// x = String(x);
// console.log(typeof x); // string

const bigInt = BigInt(123456789012345678901234567890n);
console.log(typeof bigInt); // "bigint"
const isDone = false;
console.log(typeof isDone); // "boolean"
let store;
console.log(typeof store); // "undefined"
const nullValue = null;
console.log(typeof nullValue); // "object"
const symbol1 = Symbol('foobar');
console.log(typeof symbol1); // "symbol"
const obj = { name: 'John', age: 30 };
console.log(typeof obj); // "object"
function greet() {
    console.log('Hello, world!');
  }
  console.log(typeof greet); // "function"
//array in javascript
const arr = [1, true, 'hello'];
console.log(typeof arr); // object
