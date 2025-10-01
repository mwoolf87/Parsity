//----- ARRAY METHODS
//forEach
//Accepts a callback function. Calls the function once per element in the array.

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

nums.forEach(function (n) {
  console.log(n * n);
  //prints: 81, 64, 49, 36, 25, 16, 9, 4, 1
});

nums.forEach(function (el) {
  if (el % 2 === 0) {
    console.log(el);
    //prints: 8,6,4,2
  }
});

const movies = [
  { title: "Amadeus", score: 99 },
  { title: "Stand By Me", score: 85 },
  { title: "Parasite", score: 95 },
  { title: "Alien", score: 90 },
];

movies.forEach(movie => console.log(`${movie.title} - ${movie.score}`));

//map
//Creates a new array with the results of calling a callback on every element in the array

const texts = ["rofl", "lol", "omg", "ttyl"];
const caps = texts.map(t => t.toUpperCase());
console.log(texts); //["rofl", "lol", "omg", "ttyl"];
console.log(caps); //['ROFL', 'LOL', 'OMG', 'TTYL']

const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};

//setTimeout and setInterval
setTimeout(() => {
  console.log("Hello!!!");
}, 3000);

// const id = setInterval(() => {
//   console.log(Math.random());
// }, 2000);

// ---Filter
//Creates a new array with all elements that pass the test implemented by the provided function

const nums2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const odds = nums2.filter(n => {
  return n % 2 === 1; // our callback returns true or false. if it returns true, n is added to the filtered array
});
console.log(odds); //[9,7,5,3,1]

const smallNums = nums2.filter(n => n < 5);
console.log(smallNums); //[4,3,2,1]
