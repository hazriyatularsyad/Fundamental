// Write a code to check whether a string is a palindrome or not.
// madam, malam, katak, kasur rusak, 

let str = "kasur rusak"
let reverseStr = ""

// reverse a string
for (let i = str.length; i > 0; i--) { // 5, 4, 3, 2, 1
    reverseStr += str.charAt(i - 1)
}

console.log(str == reverseStr ? 'Palindrome' : 'Not Palindorme')

// let num = 10

// num *= 2