console.log("Variable.js loaded");

// ========== 1. let ==========

// let x = 10;
// console.log(x);

// function testLet() {
//   let y = 20;
//   console.log(y);

//   if (true) {
//     console.log(x);
//     console.log(y);
//     let z = 30;
//     console.log(z);
//   }
//   console.log(x);
//   console.log(y);
//   console.log(z);
// }

// =========== 2. const -  ===========

// const x = 25;
// console.log(x);
// x = 35;
// console.log(x);

// =========== 3.Var - function scope variable ===========

var x = 10;

function testVar() {
  console.log(x);
  var z = 30;
  console.log(z);

  if (true) {
    var y = 20;
    console.log(y);
  }
}
testVar();
