// console.log("Arrays page is loaded......");

// // 1. Creating an Array

// // Array Literal
// let colors = ["Red", "Green", "Orange"];
// console.log(colors);

// // Create using new keyword

// let colors2 = new Array("Red", "Blue", "Orange");
// console.log(colors2);

// let myArray = [
//   10,
//   "Kamal",
//   true,
//   undefined,
//   { name: "akila", age: 30 },
//   [1, 2, 3],
// ];

// console.log(myArray);

// //Modify Elments

// colors[0] = "Yellow";
// console.log(colors);

// //Arrays Length

// console.log(colors.length);

let fruits = ["APPLE", "BANANA", "ORANGE", "MANGO"];
console.log(fruits);

//Push -- add new element to the end of the array

fruits.push("GRAPES");
console.log(fruits);

//Pop --  Remove the last element from an array

fruits.pop();
console.log(fruits);

//add a element to the first of and elemtnt

fruits.unshift("STRAWBERRY");
console.log(fruits);

//remove the first element of an array

fruits.shift();
console.log(fruits);

console.log("=================================");

let vegetables = ["TOMATO", "POTOTIO", "ONION"];
let foodItems = fruits.concat(vegetables);
console.log(foodItems);

foodItems.forEach(function (item) {
  console.log(item);
});

foodItems.forEach((item) => {
  console.log(item);
});

lowerCaseItems = foodItems.map((item) => item.toLowerCase());
console.log(lowerCaseItems);

let filteredItems = foodItems.filter((item) => item.length > 5);
console.log(filteredItems);
