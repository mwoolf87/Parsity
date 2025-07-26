//const btn = document.querySelector("button");

// ---- NOT RECOMMENDED
// btn.onclick = function () {
//   console.log("YOU CLICKED ME, GO AWAY");
// };

// btn.onclick = function () {
//   console.log("second time!!!");
// };

//  --- RECOMMENDED WAY OF EVENT HANDLING ---  //

// btn.addEventListener("click", function () {
//   alert("clicked");
// });

// btn.addEventListener("click", function () {
//   console.log("second thing!!!");
// });

// btn.addEventListener("mouseover", function () {
//   console.log("MOUSED OVER ME!!");
//   const height = Math.floor(Math.random() * window.innerHeight);
//   const width = Math.floor(Math.random() * window.innerWidth);
//   btn.style.left = `${width}px`;
//   btn.style.top = `${height}px`;
// });

// const colors = [
//   "red",
//   "orange",
//   "yellow",
//   "green",
//   "blue",
//   "purple",
//   "indigo",
//   "violet",
// ];
// const changeColor = function () {
//   const h1 = document.querySelector("h1");
//   h1.style.color = this.style.backgroundColor;
// };
// const container = document.querySelector("#boxes");
// for (let color of colors) {
//   const box = document.createElement("div");
//   box.style.backgroundColor = color;
//   box.classList.add("box");
//   container.appendChild(box);
//   box.addEventListener("click", changeColor);
// }

// document.body.addEventListener("keypress", function (e) {
//   console.log(e);
// });
// const input = document.querySelector("#username");

// input.addEventListener("keydown", function () {
//   console.log("KEY DOWN");
// });
// input.addEventListener("keyup", function () {
//   console.log("KEY UP!");
// });

// const addItemInput = document.querySelector("#addItem");
// const itemsUL = document.querySelector("#items");

// addItemInput.addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//     if (!this.value) return;
//     //add new item to list
//     const newItemText = this.value;
//     const newItem = document.createElement("li");
//     newItem.innerText = newItemText;
//     itemsUL.appendChild(newItem);
//     this.value = "";
//   }
// });

const creditCardInput = document.querySelector("#cc");
const termsCheckbox = document.querySelector("#terms");
const veggieSelect = document.querySelector("#veggie");

const form = document.querySelector("#signup-form");

form.addEventListener("submit", function (e) {
  alert("SUBMITTED THE FORM!");
  console.log("cc", creditCardInput.value);
  console.log("terms", termsCheckbox.checked);
  console.log("veggieSelect", veggieSelect.value);
  e.preventDefault();
});

const formData = {};
for (let input of [creditCardInput, termsCheckbox, veggieSelect]) {
  input.addEventListener("change", ({ target }) => {
    const { name, type, value, checked } = target;
    formData[name] = type === "checkbox" ? checked : value;
    console.log(formData);
  });
}

// creditCardInput.addEventListener("input", e => {
//   console.log("Credit Card Changed", e);
//   formData["cc"] = e.target.value;
// });
// veggieSelect.addEventListener("input", e => {
//   console.log("veggie select Changed", e);
//   formData["veggie"] = e.target.value;
// });
// termsCheckbox.addEventListener("input", e => {
//   console.log("Terms Changed", e);
//   formData["isChecked"] = e.target.checked;
// });
