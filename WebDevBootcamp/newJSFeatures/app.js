// ----- Default Parameters
function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}

function greet(person, msg = "Hey There!") {
  console.log(`${msg}, ${person}`);
}

greet("Mike");

// ---- Spread
/* Spread syntax allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected */

// spread in functions
const nums = [9, 3, 2, 8];
Math.max(nums); //NaN - will not work
Math.max(...nums); // 9

// spread in array literals
const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Cleo", "Mr. Big", "Bruiser"];
const catsCopy = [...cats]; // creates a copy of the cats array
const allPets = [...cats, ...dogs]; // spreads in BOTH cats and dogs

// spread in object literals
const feline = { legs: 4, family: "Felidae" };
const canine = { family: "Caninae", furry: true };

const dog = { ...canine, isPet: true }; //{family: "Caninae", furry: true, isPet: true}
const catDog = { ...feline, ...canine }; // combines both objects

const dataFromForm = {
  email: "blueman@gmail.com",
  password: "tobias123!",
  username: "tfunke",
};

const newUser = { ...dataFromForm, id: 2345, isAdmin: false };

// ---- Rest
//* - Available inside every function
//* - Its an array-like object
//* - Has a length property
//* - Does not have array methods like push/pop
//* - Contains all the argumenets passed to the function
//* - Not available inside of arrow functions!

function sumAll(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
