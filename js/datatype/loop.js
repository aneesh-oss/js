let x  = ['one',2,true]
var y = [...x]; // creates a new array with the elements of x
console.log(y);
for(var i=0;i<y.length;i++) {
    console.log(`Element at index ${i} is ${y[i]}`)
}

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