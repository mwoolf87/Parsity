//  --- PRIMITIVE TYPES --- //
// STRINGS - immutable
// "string" 'string' `string`
// NUMBERS
// 123
// BIGINT
// 45464512315645613215615151568435168412541231812352181;
// BOOLEAN
// true false
// UNDEFINED

// NULL
// null
// SYMBOL
// let id = Symbol("id")
// if (1 === 2) {
//   console.log("its true!!!");
// } else {
//   console.log("its false");
// }

// let num = 38;
// if (num % 2 !== 0) {
//   console.log("odd number");
// }

// let nums = 11;

// if (nums >= 1 && nums <= 10) {
//   console.log("number is between 1 and 10");
// } else {
//   console.log("number is out of range");
// }

// console.log(!true);

// let loggedInUser;

// if (!loggedInUser) {
//   console.log("GET OUT OF HERE");
// }

// ------ SWITCH STATEMENT ----- //
// let day = 3;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// Ternary Operator

// let num = 5;

// num >= 5 ? console.log("This passes") : console.log("This fails");

// let status = "offline";
// let color;
// if (status === "offline") {
//   color = "red";
// } else {
//   color = "green";
// }

// let color = status === "offline" ? "red" : "green";

//  ----- ARRAYS ----- //

// let shoppingList = ["cereal", "cheese", "ice"];

// console.log(shoppingList);

// let shoppingList = ["Cheddar Cheese", "2% Milk"];

//  -- PUSH, POP, SHIFT, UNSHIFT -- //

// let topSongs = [
//   "First Time Ever I Saw Your Face",
//   "God Only Knows",
//   "A Day In The Life",
//   "Life On Mars",
// ];

// topSongs.push("Fortunate Son");

// topSongs.unshift("Big Willy Style");

// console.log(topSongs);

// shift removes from start
// unshift adds to start

//  --- concat --- //

// let fruits = ["apple", "organge", "banana"];
// let veggies = ["carrot", "broccoli", "squash"];
// let fruitsAndVeggies = fruits.concat(veggies);
// console.log(fruitsAndVeggies);

//  --- slice -- //
//  slice is array.slice(starting index,up to but not including index ) if you dont list an end point it will run all the way to the end of the array. This will make a copy of the array
let animals = ["shark", "salmon", "whale", "bear", "lizard", "turtoise"];

// let swimmers = animals.slice(0, 3); //[ 'shark', 'salmon', 'whale' ]
// console.log(swimmers);

// ---- splice --- //
// removes, replaces, or adds new items to an array
// has three arguments (start index, how many things you want to delete, and anything you want to instert)
animals.splice(1, 0, "octopus");
// returns ['shark', 'octopus', 'salmon', 'whale', 'bear', 'lizard', 'turtoise']
console.log(animals);
