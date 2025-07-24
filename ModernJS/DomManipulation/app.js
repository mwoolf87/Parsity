const allLis = document.querySelectorAll("li");
const h1 = document.querySelector("h1");
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
const todo = document.querySelector("#todos .todo");
const parentUL = document.querySelector("ul");
const newLi = document.createElement("li");
newLi.innerText = "I AM A NEW LI";
const firstLi = document.querySelector("li.todo");
const ul = document.querySelector("section ul");
const removeMe = ul.querySelector(".special");
parentUL.insertBefore(newLi, firstLi);
h1.remove();
ul.removeChild(removeMe);
// for (let i = 0; i < allLis.length; i++) {
//   allLis[i].innerText = "WE ARE THE CHAMPIONS";
// }

// for (let li of allLis) {
//   li.innerHTML = "WE ARE <b>THE CHAMPIONS</b>";
// }

// inline style is most specifc class style
// allLis.forEach((li, i) => {
//   const color = colors[i];
//   li.style.color = color;
// });
