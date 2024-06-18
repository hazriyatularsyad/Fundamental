for (let i = 1; i <= 10; i++) {
    console.log(i)
}
for (let i = 11; i > 0; i -= 2) {
    console.log(`Hello World ke-${i}`)
}


let i = 1
while (i <= 0) {
    console.log("Hello");
    i++
}

do {
    console.log("Hello");
    i++
} while (i <= 0);

while (true) {
    console.log(i)

    if (i == 10) break

    i++
}

for (let i = 1; i <= 5; i++) {
    if (i % 2 != 0) continue
    console.log(i)
}

let n = 5

for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(i))
}

for (let i = n; i > 0; i--) {
    let star = ""
    for (let j = 1; j <= i; j++) {
        star += "*"
    }
    console.log(star);
}