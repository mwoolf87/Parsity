//----- THE DOM
// The Dom (or Document Object Model) contains representations of all the content on a page, plus tons of userful methods and properties

document.getElementById("id"); //gets a specific element by its ID
document.getElementsByTagName("div"); // gets all elements with the tag name "div"
document.getElementsByClassName("unit"); // gets all elements that have the class attribute "unit"

const allImages = document.getElementsByTagName("img");

for (let img of allImages) {
  console.log(img.src);
}

// The GOAT selector methods
document.querySelector("#unit"); // allows you to select by any style selecter you want "#idExample" .classExample if multiple gives you the first match
document.querySelectorAll(".unit");

document.querySelector("a[title=Java]"); // an example of selecting an "a" tag with the attribute title "Java"

document.querySelector("p").innerHTML; //used when you want to update the HTML
document.querySelector("p").innerText; // used when you just want to update the text within

document.querySelector("span").innerText = "Disgusting";

const image = document.querySelector("img");
image.src =
  "https://images.unsplash.com/photo-1581061090142-c2cd0ec9f021?w=200";
image.alt = "chicken";

const allLinks = document.querySelectorAll("a");

for (link of allLinks) {
  link.style.color = "rgb(0,108,134)";
  link.style.textDecorationColor = "magenta";
  link.style.textDecorationStyle = "wavy";
}

// const div = document.querySelector("#container");
// div.style.textAlign = "center";

const image2 = document.querySelector("img");
image2.style.width = "150px";
image2.style.borderRadius = "50%";

// in the below example I am looping over all span tags and setting their colors to the values of the colors array

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const allSpans = document.querySelectorAll("span");
for (let i = 0; i < allSpans.length; i++) {
  allSpans[i].style.color = colors[i];
}

// in the below example I am looping over all li tags and toggling on/off a class of "highlight based off its current value"

const allLis = document.querySelectorAll("li");
for (let li of allLis) {
  li.classList.toggle("highlight");
}
const p = document.querySelector("p");
p.append("I am new text YESSSSS");
const newB = document.createElement("b");
newB.append("Hi!");
p.prepend(newB);

// an example of adding a sibling to the h1 element "Silkie Chickens"
const h2 = document.createElement("h2");
h2.append("are adorable chickens");
const h1 = document.querySelector("h1");
h1.insertAdjacentElement("afterend", h2);
const h3 = document.createElement("h3");
h3.innerText = "I am an H3 Element";
h1.after(h3);

//the below examples slecs a div element. loops 100 times and creates a button i times/applies inner text i times and appends the buttons to the div element
const div = document.querySelector("div");
for (let i = 0; i < 100; i++) {
  const button = document.createElement("button");
  button.innerText = "I'm a button";
  div.append(button);
}
//selects all buttons and removes them from the div element
allbuttons = document.querySelectorAll("button");
div.remove(allbuttons);
