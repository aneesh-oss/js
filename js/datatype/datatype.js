
const name = 'John';
console.log(typeof name); 

const age = 30;
console.log(typeof age); 

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
  console.log(typeof greet); 


const arr = [1, true, 'hello'];
console.log(typeof arr); 
var i 
for(i=10;i<=30;i++){
    if(i%2==0){
        console.log(i)
    }
}
//how many objects we can iterate through loops like array , strings ,objects?
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  console.log(number);
}
const str = "Hello, World!";

for (const char of str) {
  console.log(char);
}
const person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer",
  };
  
  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }