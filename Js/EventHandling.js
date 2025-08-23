console.log("Event Handlig is loaded");

const btnSave = document.getElementById("btnSave");

btnSave.addEventListener("click", handler);

function handler() {
  console.log("Button Clicked");
}
btnSave.removeEventListener("click", handler);
