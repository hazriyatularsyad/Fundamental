let age = 15

if (age >= 17) { // false
    console.log('You can now create an Id Card')
} else {
    console.log('You are not old enough to create an Id Card')
}

let kondisi = "LAPAR"

// if (kondisi.toLowerCase() == "laPar".toLowerCase()) {
//     console.log('Makan bang')
// } else {
//     console.log('Jangan Makan')
// }



let grade = "B"

if (grade == "A") {
    console.log("Excellent Result!")
} else if (grade == "B") {
    console.log("Great Result!")
} else if (grade == "C") {
    console.log("Average Result!")
} else {
    console.log("Invalid Grade!")
}

// switch (grade) {
//     case "A": 
//         console.log("Excellent Result!")
//         break
//     case "B": 
//         console.log("Great Result!")
//         break
//     case "C": 
//         console.log("Average Result!")
//         break
//     default:
//         console.log("Invalid Grade!")
// }


// console.log("1" * "10")
// console.log(10 * "a")
// console.log(Boolean(NaN))


let ganteng = true
let kaya = false

if (ganteng || kaya) {
    console.log('Jadian');
} else {
    console.log('Temenan');
}

const str = "Javascript"

console.log(str == "Javascript" ? "Javascript" : "Not Javascript")
console.log(ganteng || kaya ? "Jadian" : "Temenan")
console.log(grade == "A" ? "Excellent" : grade == "B" ? "Great" : "Invalid")