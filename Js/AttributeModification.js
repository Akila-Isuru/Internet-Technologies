console.log("Attribute Modification.js is loaded");

const link = document.querySelector("a");
console.log(link.getAttribute("href"));

link.setAttribute("href", "https://www.facevook.com");

console.setAttribute("target", 'blank');
console.log(link.getAttribute("target"));
