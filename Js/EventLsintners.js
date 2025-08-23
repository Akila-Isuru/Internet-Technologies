console.log("Event listnor loaded");
// const box = document.querySelector(".box");

// =======Mouse Events =========

// ======1 single click listners=======

// box.addEventListener("click", function () {
//   console.log("clicked the box");
// });

// ======2 double click listners ========

// box.addEventListener("dblclick", function () {
//   console.log("double clicked the box");
// });

// ======3. Mouse down =======

// box.addEventListener("mousedown", function () {
//   console.log("Mouse Pressed");
// });

// =====4. Mouse up =====

// box.addEventListener("mouseup", function () {
//   console.log("Mouse Released");
// });

// 5.=====Mouse move =====
// box.addEventListener("mousemove", function () {
//   console.log("Mouse Moved");
// });

// 6.======Mouse over======

// box.addEventListener("mouseover", function () {
//   console.log("Mouse Over");
// });

// 7======Mouse Out event========

// box.addEventListener("mouseout", function () {
//   console.log("Mouse Out");
// });

// ======Key event========

let textField = document.getElementById("input");

// ===========1key down ===========

// textField.addEventListener("keydown", function (event) {
//   console.log("Key Pressed");
// });

// ===========2.key up ===========

// textField.addEventListener("keyup", function (event) {
//   console.log("Key Released");
// });

// ===========1key down ===========

// textField.addEventListener("keydown", function (event) {
//   console.log(event);
//   if (event.key == "Enter") {
//     alert("enter pressed");
//   }
// });

textField.addEventListener("keydown", function (event) {
  console.log(event.keyCode);
  if (keyCode >= 48 && keyCode <= 57) {
    return;
  }
});
