// let timeout = setTimeout(() => {
//   console.log("Hello World");
// }, 2000);

// clearTimeout(timeout);

// let intervalId = setInterval(() => {
//   console.log("Hello world !");
// }, 1000);

let counter = 0;
let timeout = setInterval(() => {
  counter++;
  console.log("Number :" + counter);
}, 1000);

setTimeout(() => {
  clearInterval(timeout);
}, 10500);
