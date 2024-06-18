const car = {
  brand: "BMW",
  model: "M4",
  price: 8000000000000,
};
console.log(car); // memanggil semua data
console.log(car.brand); // memanggil nama brand saja
console.log(car.brand, car.price); // memanggil nama brand dan price

// property & method

const user = {
  name: "frangky",
  greet() {
    console.log("Hello " + this.name);
  },
};

user.greet();

// add property

user.hobby = "coding";

console.log(user);

// delete property

delete user.age;

console.log(user);

// ganti data

user.name = "david";

// object di dalam object

const person = {
  name: "john doe",
  age: 30,
  address: {
    city: "Bandung",
    country: "Indonesia",
  },
  number: [1, 2, 3, 4, 5],
};

console.log(person.address.city); // mengambil data city
console.log(person.number[4]); //mengambil angka 5 dalam array
