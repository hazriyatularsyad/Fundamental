let data = 'Hello Purwadhika'
let dataUpper = data.toUpperCase().replace("O", "A")
let dataLower = data.toLowerCase().repeat(2)

console.log(data)
console.log(dataUpper)
console.log(dataLower)
console.log(data.charAt(8))
console.log(data.search("r"))
console.log(data.replaceAll("a", "i"))

const message = `hello world ${data}`
let message2 = "hello world " + data
let message3 = "hello world ".concat(data)

console.log(message)
console.log(message2)
console.log(message3)