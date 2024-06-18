// Write a code to print the first N fibonacci numbers
// 0, 1, 1, 2, 3, 5, ...
// 15 -> 610

let num = 15
let a = 0 // 3
let b = 1 // 5

for (let i = 1; i < num; i++) {
    let nextNum = a + b
    a = b
    b = nextNum
}

console.log(b);