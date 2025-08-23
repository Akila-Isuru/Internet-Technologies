console.log("Class Manipulation is Loaded");

const heading = document.getElementById("heading");
console.log(heading);

heading.classList.add("new-class");
console.log(heading.classList);

heading.classList.toggle("active");
console.log(heading.classList);
