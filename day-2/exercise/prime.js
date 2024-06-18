// Write a code to check whether the number is prime number or not


let number = 13
let divider = 0

for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
        console.log(i)
        divider++
    }
}

console.log(
    divider == 2 ? 
    `${number} is prime number` : 
    `${number} is not prime number`
);
