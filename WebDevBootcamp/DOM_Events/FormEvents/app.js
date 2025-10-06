const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let catName = input.value;
  const newLI = document.createElement("li");
  newLI.innerText = catName;
  list.append(newLI);
  input.value = "";
});

// const product = document.querySelector("#product");
// const qty = document.querySelector("#qty");

// form.addEventListener("submit", e => {
//   e.preventDefault();
//   let productVal = product.value;
//   let qtyVal = qty.value;
//   const newLI = document.createElement("li");
//   newLI.innerText = `${qtyVal} ${productVal}`;
//   list.append(newLI);
//   product.value = "";
//   qty.value = "";
// });

// const h1 = document.querySelector("h1");
// const input = document.querySelector("#username");

// input.addEventListener("input", () => {
//   h1.innerText = `Welcome, ${input.value}`;
//   if (input.value === "") {
//     h1.innerText = "Enter Your Username";
//   }
// });
