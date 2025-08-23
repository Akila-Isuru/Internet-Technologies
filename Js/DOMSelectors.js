console.log("DOMSELECTORS.Js file is loaded");
console.log(document);

//1Selectors using element Id
const heading = document.getElementById("heading");
console.log(heading);

//2 Select element by using their class names
const paragraph = document.getElementsByClassName("paragreaph");
console.log(paragraph);

const allparagrapch = document.getElementsByTagName("p");
console.log(allparagrapch);

const querySelector = document.querySelector(".box h2");
console.log(querySelector);

const selectors = document.querySelectorAll(".box h2");
console.log(selectors);
