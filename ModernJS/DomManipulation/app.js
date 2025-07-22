const allLis = document.querySelectorAll("li");
const h1 = document.querySelector("h1");
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
// for (let i = 0; i < allLis.length; i++) {
//   allLis[i].innerText = "WE ARE THE CHAMPIONS";
// }

// for (let li of allLis) {
//   li.innerHTML = "WE ARE <b>THE CHAMPIONS</b>";
// }

// inline style is most specifc class style
allLis.forEach((li, i) => {
  const color = colors[i];
  li.style.color = color;
});
