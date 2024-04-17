// Traditional function expression
const add1 = function(a, b) {
    return a + b;
};
console.log(add1(19, 22))

// Arrow function
const add2 = (i, j) => i + j;
console.log(add2(34, 45))

// 2. Callback function
function myFunc(a, b, callback) {
    return callback(a, b);
}
console.log(myFunc(10, 20, add2))

// 3. Function returning function
function myFunc1() {
    return function () {
        console.log("Hello World")
    }
}
myFunc1()()

// 4. Function as a parameter
function myFunc2(callback) {
    callback()
}
myFunc2(function () {
    console.log("Hello World")
})

// 5. Function as a parameter
function myFunc3(callback) {
    callback()
}
myFunc3(function () {
    console.log("Hello World")
})

// 6. Function as a parameter
function myFunc4(callback) {
    callback()
}
myFunc4(function () {
    console.log("Hello World")
})

// 7. Function as a parameter
function myFunc5(callback) {
    callback()
}
myFunc5(function () {
    console.log("Hello World")
})

// 8. Function as a parameter
function myFunc6(callback) {
    callback()
}
myFunc6(function () {
    console.log("Hello World")
})

// 9. Function as a parameter
function myFunc7(callback) {
    callback()
}
myFunc7(function () {
    console.log("Hello World")
})