let fruits = ["apple", "banana",  "cherry", "mango"];

fruits.push("orange"); //add element at last
console.log(fruits); 

fruits.pop();  //remove the last element from array
console.log(fruits);


let sliced = fruits.slice(1, 3); // create a new array from index 1 to 3 but exclude the 3 index element
console.log(sliced);

fruits.splice(1, 1);    // remove one element from index 1 and replace it with nothing (remove only)
console.log(fruits); 

console.log(fruits.at(-1));//give the element at specific index

fruits.unshift("grapes");
console.log(fruits);

fruits.shift();
console.log(fruits); 

let vegetables = ["carrot", "potato"];

let allFoods = fruits.concat(vegetables);
console.log(allFoods);

let fruitsString = fruits.toString();
console.log(fruitsString); 

let fruitsJoin = fruits.join("-");
console.log(fruitsJoin);