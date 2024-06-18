// Write a code to capitalize the first letter of each word in a string

let str = "hello purwaDhika bandung" // Hello Purwadhika Bandung
let isCapital = true
let result = ""

// for (let i = 0; i < str.length; i++) {
//     if (isCapital == true) {
//         result += str.charAt(i).toUpperCase()
//         isCapital = false
//     } else {
//         result += str.charAt(i).toLowerCase()
//     }

//     if (str.charAt(i) == ' ') {
//         isCapital = true
//     }
// }

for (let i = 0; i < str.length; i++) {
    if (i == 0 || str.charAt(i - 1) == ' ') {
        result += str.charAt(i).toUpperCase()
    } else {
        result += str.charAt(i).toLowerCase()
    }
}

console.log(result);

for (let i = 10; i >= 0; i--) {
    console.log(i);
}

