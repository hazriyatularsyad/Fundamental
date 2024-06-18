let num = "5554441234" // "(555) 444-1234"
let phone = "(***) ***-****"

for (let i = 0; i < num.length; i++) {
    phone = phone.replace("*", num.charAt(i))
    // console.log(phone);
}

console.log(phone);
console.log(`(${num.slice(0, 3)}) ${num.slice(3, 6)}-${num.slice(6)}`)


console.log(num.substring(0, 3))