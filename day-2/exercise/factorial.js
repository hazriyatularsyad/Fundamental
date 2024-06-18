// Write a code to find factorial of a number

let num = 6 // 6 x 5 x 4 x 3 x 2 x 1 = 720
let result = 1

for (let i = num; i > 1; i--) {
    result = result * i
}

console.log(result);