const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

const allButtons = document.querySelectorAll("button");

for (let button of allButtons) {
  button.addEventListener("click", colorize);
}

function colorize() {
  this.style.backgroundColor = makeRandomColor();
}
