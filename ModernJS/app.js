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
// let animals = ["shark", "salmon", "whale", "bear", "lizard", "turtoise"];

// let swimmers = animals.slice(0, 3); //[ 'shark', 'salmon', 'whale' ]
// console.log(swimmers);

// ---- splice --- //
// removes, replaces, or adds new items to an array
// has three arguments (start index, how many things you want to delete, and anything you want to instert)
// animals.splice(1, 0, "octopus");
// returns ['shark', 'octopus', 'salmon', 'whale', 'bear', 'lizard', 'turtoise']
// console.log(animals);

// const animalPairs = [
//   ["doe", "buck"],
//   ["ewe", "ram"],
//   ["peahen", "peacock"],
// ];

// ---- Object --- //

// const fitBitData = {
//   totalSteps: 308727,
//   totalMiles: 211.7,
//   avgCalorieBurn: 5755,
//   workoutsThisWeek: "5 of 7",
//   avgGoodSleep: "2:13",
//   45: "forty-five",
// };

// const numbers = {
//   100: "one hundred",
//   16: "sixteen",
// };

// const pallette = {
//   red: "#eb4d4b",
//   yellow: "#f9ca24",
//   blue: "#30336b",
// };

// let mysteryColor = "yellow";

// //pallette[mysteryColor]; // #f9ca24

// const userReviews = {};
// userReviews.mrWoolf87 = 9.8;

// --- Reference Types --- //

//let nums = [1, 2, 3];
//let mystery = [1, 2, 3];
//let moreNums = nums;

// They 'look' the same, but refer to different arrays
//nums === mystery; //false

// These two arrays reference the exact same array, so we get true
//nums === moreNums; //true

// ----- LOOOOOOOOOOPS -----//

// ----- for loops
// for([initialExpression][condition][incrementExpression])

// for (let i = 1; i <= 10; i += 3) {
//   console.log("Hello:", i);
// }

// for (let num = 1; num <= 20; num++) {
//   console.log(`${num}x${num} = ${num * num}`);
// }

// for (let i = 200; i >= 0; i -= 25) {
//   console.log(i);
// } //200...175...150...

// const examScores = [98, 77, 84, 97, 57, 66];

// for (let i = 0; i < examScores.length; i++) {
//   console.log(i, examScores[i]);
// }

// const myStudents = [
//   {
//     firstName: "Zeus",
//     grade: 86,
//   },
//   {
//     firstName: "Artemis",
//     grade: 97,
//   },
//   {
//     firstName: "Hera",
//     grade: 72,
//   },
//   {
//     firstName: "Apollo",
//     grade: 90,
//   },
// ];
// let total = 0;
// for (let i = 0; i < myStudents.length; i++) {
//   let student = myStudents[i];
//   total += student.grade;
// }
// console.log(total / myStudents.length);
// for (let i = 0; i < myStudents.length; i++) {
//   let student = myStudents[i];
//   console.log(`${student.firstName} scored ${student.grade}`);
// }

// const word = "stressed";

// for (let i = word.length - 1; i >= 0; i--) {
//   console.log(i, word[i]);
// }

// --- nested for loop

// const gameBoard = [
//   [4, 32, 8, 4],
//   [64, 8, 32, 2],
//   [8, 32, 16, 4],
//   [2, 8, 4, 2],
// ];
// let totalScore = 0;
// for (let i = 0; i < gameBoard.length; i++) {
//   let row = gameBoard[i];
//   for (let j = 0; j < row.length; j++) {
//     totalScore += row[j];
//   }
// }
// console.log(totalScore);

// --- while loops

// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// } //1..2..3..4..5

// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);
// while (guess !== target) {
//   console.log(guess);
//   guess = Math.floor(Math.random() * 10);
// }
// console.log(`Target: ${target} Guess: ${guess}`);

// ---- FOR OF LOOP ---- //
// for(variable of iterable){
//   statement
// }

// let subreddits = ["soccer", "popheads", "cringe", "books"];

// for (let sub of subreddits) {
//   console.log(sub);
// }

// for (let char of "cockadoodledoo") {
//   console.log(char.toUpperCase());
// }

// const magicSquare = [
//   [2, 7, 6],
//   [9, 5, 1],
//   [4, 3, 8],
// ];

// for (let i = 0; i < magicSquare.length; i++) {
//   let row = magicSquare[i];
//   let sum = 0;
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//     sum += row[j];
//   }
//   console.log(`${row} summed to ${sum}`);
// }

// for (let row of magicSquare) {
//   let sum = 0;
//   for (let num of row) {
//     sum += num;
//   }
//   console.log(`${row} summed to ${sum}`);
// }

// --- for of with objects

// const movieReviews = {
//   Arrival: 9.5,
//   Alien: 9,
//   Amelie: 8,
//   "In Bruges": 9,
//   Amadeus: 10,
//   "Kill Bill": 8,
// };

// for (let movie of Object.keys(movieReviews)) {
//   console.log(movie, movieReviews[movie]);
// }

// const ratings = Object.values(movieReviews);
// let total = 0;
// for (let r of ratings) {
//   total += r;
// }

// let avg = total / ratings.length;
// console.log(avg);

// ---- for in loops ---- //

// const movieReviews = {
//   Arrival: 9.5,
//   Alien: 9,
//   Amelie: 8,
//   "In Bruges": 9,
//   Amadeus: 10,
//   "Kill Bill": 8,
// };

// for (key in movieReviews) {
//   console.log(`${key} - ${movieReviews[key]}`);
// }

// for (let k in [88, 99, 77, 66]) {
//   console.log(k);
// }

// ----- FUNCTIONS ---- //

// function grumpus() {
//   console.log("ugh.. you again!");
//   console.log("LEAVE");
// }

// grumpus();

// function rollDie() {
//   let roll = Math.floor(Math.random() * 6) + 1;
//   console.log(`Rolled: ${roll}`);
// }

// function throwDice() {
//   rollDie();
//   rollDie();
//   rollDie();
//   rollDie();
//   rollDie();
//   rollDie();
// }

// throwDice();

// function square() {
//   console.log(num * num);
// }

// function sum(x, y) {
//   console.log(x + y);
// }

// function divide(a, b) {
//   console.log(a / b);
// }
// divide(1, 4);

//Write an isValidPassword function
//It accepts two arguments: password and username
//Password must:
// - be at least 8 characters
// - cannot contain spaces
// - cannot contain username
// if all requirements are met return true
// otherwise: false

// function isValidPassword(password, username) {
//   return (
//     password.length >= 8 &&
//     !password.includes(username) &&
//     !password.includes(" ")
//   );
// }

//isValidPassword("89Fjj1nms", "dogLuvr");
//isValidPassword("dogLuvr123", "dogLuvr");

//Write a function to find the average value in an array of numbers
// function avg(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   let average = total / arr.length;
//   return average;
// }

// function avg2(arr) {
//   let total = 0;
//   for (let num of arr) {
//     total += num;
//   }
//   let result = total / arr.length;
//   return result;
// }

//avg([0, 50]) - 25;
//avg([75,76,80,95,100])

// a panram is a sentence that contains every letter of the alphabet, like:
// "The quick brown fox jumps over the lazy dog"

//Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet. Make sure you ignore string casing!

// function isPangram(sentence) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   const lowerCased = sentence.toLowerCase();

//   for (let char of alphabet) {
//     if (!lowerCased.includes(char)) {
//       return false;
//     }
//   }
//   return true;
// }

// function pick(arr) {
//   const idx = Math.floor(Math.random() * arr.length);
//   return arr[idx];
// }
// function getCard() {
//   let values = [
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "J",
//     "Q",
//     "K",
//     "A",
//   ];

//   let suits = ["clubs", "spades", "hearts", "diamonds"];

//   const value = pick(values);

//   const suit = pick(suits);
//   return { value, suit };
// }

// getCard();

// function doubleArr(arr) {
//   const result = [];
//   for (let num of arr) {
//     let double = num * 2;
//     result.push(double);
//   }
//   return result;
// }

// doubleArr();

// ---- function expression --- //

// function add(x, y) {
//   return x + y;
// }

// const sum = function (x, y) {
//   return x + y;
// };

// const product = function multiply(x, y) {
//   return x * y;
// };

// function add(x, y) {
//   return x + y;
// }
// function subtract(x, y) {
//   return x - y;
// }
// function multiply(x, y) {
//   return x * y;
// }
// function divide(x, y) {
//   return x / y;
// }

// const operations = [add, subtract, multiply, divide];

// for (let func of operations) {
//   let result = func(30, 5);
//   console.log(result);
// }

// const thing = {
//   doSomething: multiply,
// };

//  ---- higher order functions ---- //

// function callThreeTimes(f) {
//   f();
//   f();
//   f();
// }

// function gratitude() {
//   console.log("I am Thankful for this opportunity to change my life");
// }

// function repeatNTimes(action, num) {
//   for (let i = 0; i < num; i++) {
//     action();
//   }
// }

//repeatNTimes(gratitude, 10);

function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

const triple = multiplyBy(3);
const double = multiplyBy(2);
