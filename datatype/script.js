// all datatypes example of javascript and also array and a objects and their use cases? 

let name = "John Doe";
console.log(typeof name); // Output: string

let age = 30;
console.log(typeof age); // Output: number

let isStudent = true;
console.log(typeof isStudent); // Output: boolean

let undefinedVar;
console.log(typeof undefinedVar); // Output: undefined

let nullVar = null;
console.log(typeof nullVar); // Output: object (but it's actually null)

let symbol1 = Symbol("symbol");
console.log(typeof symbol1); // Output: symbol

let bigInt = BigInt(123456789012345678901234567890n);
console.log(typeof bigInt); // Output: bigint

let fruits = ["apple", "banana", "orange"];
console.log(fruits.length); // Output: 3
console.log(fruits[1]); // Output: banana

let person = {
    name: "John Doe",
    age: 30,
    isStudent: false
  }

console.log(person.name); // Output: John Doe
console.log(person.age); // Output: 30
console.log(person.isStudent); // Output: false

console.log(person.name); // Output: John Doe
console.log(person["name"]); // Output: John Doe

person.age = 31;
console.log(person.age); // Output: 31

person.address = "123 Main St";
console.log(person.address); // Output: 123 Main St


function Person(name, age, isStudent) {
    this.name = name;
    this.age = age;
    this.isStudent = isStudent;
}
  
let person1 = new Person("Jane Doe", 25, true);
console.log(person1.name); // Output: Jane Doe
console.log(person1.age); // Output: 25
console.log(person1.isStudent); // Output: true

let person2 = new Object();
person2.name = "John Doe";
person2.age = 30;
person2.isStudent = false;
console.log(person2.name); // Output: John Doe
console.log(person2.age); // Output: 30
console.log(person2.isStudent); // Output: false

let person5 = {
    name: "John Doe",
    age: 30,
    isStudent: false
  };
  
  let values = Object.values(person5);
  console.log(values); 

  let person6 = {
    name: "John Doe",
    age: 30,
    isStudent: false
  };
  
  let keys = Object.keys(person6);
  console.log(keys); 




  for (let key of keys) {
    console.log(key, person[key]);
  }
  for (let key in person) {
    console.log(key, person[key]);
  }