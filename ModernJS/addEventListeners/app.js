const btn = document.querySelector("button");

btn.addEventListener("mouseover", function () {
  console.log("MOUSE OVER ME");
});

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
