let arr = ["A", "B", "C", "D", "E"]
let arr2 = new Array("A", "B", "C", "D", "E")

console.log(arr);
console.log(arr2);

// console.log(arr[1], arr[3])
// console.log(arr[0])


// adding value
arr.push("F") // dibelakang
arr.unshift("X") // didepan

// deleting value
arr.pop() // dibelakang
arr.shift() // didepan

let strJoin = arr.join(", ")
console.log(strJoin)

console.log(arr.reverse().join(""))
console.log(arr.length)


console.log(arr)

let num = [12, 11, 13]
let arrName = ["Budi", "Caca", "Andi", "Ahmad"]

num.sort((a, b) => a - b)
arrName.sort()

// console.log(num);
// console.log(arrName);


const fruits = ['Apple', 'Mango', 'Banana', 'Durian']
const fruits2 = [...fruits]

fruits.splice(1, 2) // hapus ditengah
fruits.splice(0, 0, 'Kiwi', 'Lemon', 'Melon') // tambah ditengah

console.log(fruits);
console.log(fruits2);
// console.log(deletedFruits)

let str = 'Budi'
let newStr = str

str = 'Andi'

console.log(str);
console.log(newStr);
