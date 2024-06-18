const number = [1, 2, 3, 4]

console.log(number);

const sumNumber = number.reduce((a, b) => a + b)
console.log(sumNumber);

number.push(5)
console.log(number);

const fruits = ['Apple', 'Mango', 'Banana', 'Durian']

fruits.forEach((item) => {
    console.log(item);
})

fruits.map((item) => { // membuat array baru
    console.log(item);
})

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

const newNumber = number.map((item) => {
    return item * 10
})
console.log(newNumber);

const newNumber2 = []
number.forEach((item) => {
    newNumber2.push(item * 10)
})

console.log(newNumber2)

for (let item of fruits) {
    console.log(item);
}
