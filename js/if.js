var x = 34
var y = 45
function  check(){
    let a = 12
    let b = 30
    if(a > b){
        console.log(`${a} is greater than ${b}`)
    }else{
        console.log(`${b} is greater than ${a}`)
    }
    if(x==y){
        console.log(`${x} and ${y} are equal`)
    } else {
        console.log(`${x} is not equal to ${y}`)
    }
}
check()
let  obj = {name:"John",age:30,city:"New York"}
console.log(obj)
for (let key in obj){
    console.log(`${key}: ${obj[key]}`)
}
var i = 8
var j = 12
if(i<j && i>6){
    console.log("i is between  6 and 12")
}else{
    console.log("i is out of the range")
}
function logical(){
    if(i&&j>0){
        console.log("Both conditions are true")
    }else if(i||j%2==0){
        console.log("One condition is true")
    }else{
        console.log("None of the conditions are true")
    }
}
let m = 5;
let n = 10;

if (m > 0 || n % 2 == 0) {
  console.log("One condition is true");
}

let arr = [1,4,9];
let sum=0;
for(let k=0 ; k <arr.length ; k++){
    sum += arr[k]
}
console.log(sum/arr.length)

let nums = [1,2,3,4,5,6,7,8,9];
nums.forEach((val)=>{
    if(val%2===0){
        console.log(`${val} is even`)
    } else {
        console.log(`${val} is odd`)
    }
})