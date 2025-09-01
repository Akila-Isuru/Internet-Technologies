console.log("Object file is loaded.....");

let Person = {
  firstName: "Jhon",
  lastName: "Cena",
  age: 30,
  hobbies: ["Music", "Wrestling"],
  address: {
    street: "123 Main street",
    city: "New York",
  },
  getBirthYear: function () {
    return 2025 - this.age;
  },
};

// console.log(Person);

// Accessing Object Properties (Dot Notation)

console.log(Person.firstName);
console.log(Person.lastName);
console.log(Person.address);
console.log(Person.address.city);
console.log(Person.getBirthYear());

console.log("(======================)");

// Bracket Notation

console.log(Person["firstName"]);
console.log(Person["address"]["city"]);
console.log(Person["getBirthYear"]());

console.log("(======================)");

// Adding new Property

Person.phone = "0912258004";

// console.log(Person);

//Modify Properties

Person.firstName = "Akila";
Person.lastName = "Isuru";
// console.log(Person);

//Delete Properties

delete Person.phone;
// console.log(Person);

console.log("(======================)");

// Looping Object Properties

// for (let key in Person) {
//   console.log(key);
//   console.log(Person[key]);
// }

let { firstName, lastName, age, email } = Person;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(email);

// Built-in Object Functions

console.log(Object.keys(Person));

console.log("(======================)");

console.log(Object.values(Person));
console.log("(======================)");

console.log(Object.entries(Person));

let car = {
  brand: "TOyota",
  model: "xyz",
  year: 2022,

  getDescription: function () {
    return `Brand - ${this.brand} ~ model - ${this.model}`;
  },
};
console.log(car.getDescription());

console.log("(======================)");

class Student {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let student = new Student("jhon", "cena", "30");
console.log(student);
