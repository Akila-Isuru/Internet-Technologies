console.log("ContentModifications.js is loaded");

const headng = document.getElementById("heading");
console.log(headng);
console.log(headng.textContent);
headng.textContent = "hello world";

const card = document.querySelector(".card");
// console.log(card);
// console.log(card.innerHTML);
// card.innerHTML = "";

//3.innerText

console.log(card.innerText);
card.inerText = "jsut rhe tetxt";

const value = document.querySelector('inputValue[type="text"]');
console.log(value);
value.value = "IJSE";
