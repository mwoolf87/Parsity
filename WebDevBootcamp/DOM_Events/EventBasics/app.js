const btn = document.querySelector("#v2");

btn.onclick = function () {
  console.log("You clicked me");
  console.log("I hope it worked!");
};

function scream() {
  console.log("AHHHHH!!");
  console.log("STOP TOUCHING ME!");
}

btn.onmouseenter = scream;

//addEventListener example - specify the event type and a callback to run on the event
const btn3 = document.querySelector("#v3");
btn3.addEventListener("dblclick", function () {
  alert("CLICKED");
});

const tasButton = document.querySelector("#tas");

const twist = () => {
  console.log("TWIST");
};
const shout = () => {
  console.log("SHOUT");
};

// tasButton.onclick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener("click", twist);
tasButton.addEventListener("click", shout);
