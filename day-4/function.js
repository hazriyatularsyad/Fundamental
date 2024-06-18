let num1 = 10
let num2 = 15

// let sum = num1 + num2
// let sum2 = 13 + 12

console.log(penjumlahan(1, 1))

// declaration
function penjumlahan(a, b) {
    return a + b
}

// console.log(penjumlahan(2, 3))
// console.log(penjumlahan(3, 5))
// console.log(penjumlahan(13, 12))
// console.log(penjumlahan(num1, num2))


// expression
const square = function(a) {
    return a * a
}

console.log(square(10))

// default parameter
function multiply(a, b = 1) {
    return a * b
}

console.log(multiply(2, 4))

function oddEven(num) {
    // if (num % 2 == 0) {
    //     return 'even'
    // } else {
    //     return 'odd'
    // }
    return num % 2 == 0 ? 'even' : 'odd'
}

console.log(oddEven(11))


// nested function
function getMessage(firstName) {
    function sayHello() {
        return "Hello " + firstName + ". "
    }

    function welcomePurwadhika() {
        return "Welcome to Purwadhika"
    }

    return sayHello() + welcomePurwadhika()
}
console.log(getMessage("John"))

// closure function
function greeting(name) {
    let defaultmessage = "Hello "

    return function() {
        return defaultmessage + name
    }
}

const greetingDavid = greeting("David")
console.log(greetingDavid())

// currying function
function multiplier(factor) {
    return function (number) {
        return number * factor
    }
}
// f(a, b) -> f(a)(b)
const mul3 = multiplier(3)
const mul2 = multiplier(2)

console.log(mul3(4))
console.log(mul3(5))

// recursive function
function countDown(fromNumber) {
    console.log(fromNumber)

    let nextNumber = fromNumber - 1

    if (nextNumber > 0) {
        countDown(nextNumber)
    }
}

countDown(5)

// arrow function

// function sum(a, b) {
//     return a + b
// }

const sum = (a = 1, b = 1) => a + b

console.log(sum(12, 4))


let numStr = "123"
console.log(parseInt(numStr))

console.log(isNaN(2))