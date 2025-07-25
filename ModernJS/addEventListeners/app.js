const btn = document.querySelector("button");

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

btn.addEventListener("mouseover", function () {
  console.log("MOUSED OVER ME!!");
  const height = Math.floor(Math.random() * window.innerHeight);
  const width = Math.floor(Math.random() * window.innerWidth);
  btn.style.left = `${width}px`;
  btn.style.top = `${height}px`;
});
