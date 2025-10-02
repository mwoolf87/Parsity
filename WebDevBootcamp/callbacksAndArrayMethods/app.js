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
// setTimeout(() => {
//   console.log("Hello!!!");
// }, 3000);

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

// ---- Every and Some
// Every - tests whether all elements in the array pass the provided functions. Returns true or false.

// Some - returns true if ANY of the array elements pass the test function

const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];

console.log(exams.every(score => score >= 75));

const allEvens = arr => {
  return arr.every(num => num % 2 === 0);
};

// ---- Reduce
[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

// let total = 0;
// for (let price of prices) {
//   total += price;
// }
// console.log(total);

const totalPrice = prices.reduce((total, price) => (total += price));
console.log(totalPrice);

const minPrice = prices.reduce((min, curr) => {
  if (curr < min) {
    return curr;
  }
  return min;
});
console.log(minPrice);

const highestRated = movies.reduce((bestMovie, currMovie) => {
  if (currMovie.score > bestMovie.score) {
    return currMovie;
  }
  return bestMovie;
});

console.log(highestRated);

const evens = [2, 4, 6, 8];

evens.reduce((sum, num) => sum + num, 0);
