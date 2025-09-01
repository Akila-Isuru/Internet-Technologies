console.log("Functions.js file is loaded.......");

// 1. Functions Decleration

function greet(firstName) {
  if (typeof firstName === "undefined") {
    console.log("Hello World!");
  } else {
    console.log("Hello " + firstName);
  }
}

// greet();
// greet("Akila");

console.log("==============================");

// 2 . Function Expression

let greet2 = function (firstName) {
  console.log("Hello " + firstName);
};

greet2("ABC");

console.log("==============================");

// Arrow Functions without Parameters

let greet3 = (firstName) => {
  console.log(`Hello ${firstName}`);
};

greet3("XYZ");

let greet4 = (firstName) => console.log(`Hello ${firstName}`);
greet4("Kamal");

let greet5 = () => console.log("Hello World");
greet5();

let greet6 = (firstName = "Amal") => {
  console.log(`Hello ${firstName}`);
};

greet6();
greet6("Nimal");
