// Write a code to display the multiplication table of a given integer.

let number = 9

for (let i = 1; i <= 10; i++) {
    // console.log(`${number} x ${i} = ${number * i}`)
    let result = ""
    result += number
    result += " x "
    result += i
    result += " = "
    result += number * i
    console.log(result);
}