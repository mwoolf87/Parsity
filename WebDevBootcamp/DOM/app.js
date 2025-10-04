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

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const allSpans = document.querySelectorAll("span");
for (let i = 0; i < allSpans.length; i++) {
  allSpans[i].style.color = colors[i];
}

// in the above example I am looping over all span tags and setting their colors to the values of the colors array
