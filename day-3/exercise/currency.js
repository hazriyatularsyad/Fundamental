// Write a code to format number as currency (IDR)

let number = 1234567890 // 1.234.567
let strNumber = number.toString() // "1.234.576"
let count = 0
let rupiah = ""

for (let i = strNumber.length; i > 0; i--) { // 7, 6 ...
    rupiah = strNumber.charAt(i - 1) + rupiah
    count++
    if (count % 3 == 0 && strNumber.length != count) {
        rupiah = "." + rupiah
    }
}

let rupiah2 = new Intl.NumberFormat("id", {
    style: 'currency',
    currency: 'IDR'
}).format(number)

let rupiah3 = number.toLocaleString('id', {
    style: 'currency',
    currency: 'IDR'
})

console.log(`Rp. ${rupiah},00`);
console.log(rupiah2.replace('Rp', 'Rp.'))
console.log(rupiah3.replace('Rp', 'Rp.'));
