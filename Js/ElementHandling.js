console.log("Element Handling is loaded");

let newDiv = document.createElement("div");
console.log(newDiv);

newDiv.id = "alert success";
newDiv.style.backgroundColor = "green";
newDiv.style.color = "white";

newDiv.textContent = "Success";
const card = document.querySelector(".card");
card.append(newDiv);

let clonedDiv = newDiv.cloneNode(true);
clonedDiv.id = "alert-error";
clonedDiv.style.backgroundColor = "red";
clonedDiv.textContent = "Error Something wenth wrong";
card.append(clonedDiv);
