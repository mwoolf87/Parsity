function printHeart() {
  console.log("<3");
}

printHeart();

//-----Terminology
// function functionName("this is called a parameter"){
//     this is where the magic happens
// }

// functionName("this is called an argument")

// function multiply(num1, num2) {
//   if (typeof num1 === "number" && typeof num2 === "number") {
//     return num1 * num2;
//   }
//   return false;
// }

// function isShortsWeather(temperature) {
//   if (temperature >= 75) {
//     return true;
//   }
//   return false;
// }

function lastElement(arr) {
  if (!Array.isArray(arr)) {
    return "Please enter an array";
  } else if (arr.length < 1) {
    return "Argument cannot be an empty array";
  } else {
    return arr[arr.length - 1];
  }
}

function capitalize(str) {
  if (typeof str !== "string" || str.length === 0) {
    return "Invalid Entry, try again";
  }
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

function sumArray(arr) {
  if (!Array.isArray(arr) || arr.length < 1) {
    return "Please enter a populated array";
  }
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function returnDay(number) {
  const week = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 7,
  };
  for (let key in week) {
    if (number === week[key]) {
      return key;
    }
    if (number < 1 || number > 7) {
      return null;
    }
  }
}

// ---------- SCOPE
// refers to Variable Visibility... The location where a variable is defined dictates where we have access to that variable

// example of block scope
let radius = 8;
if (radius > 0) {
  const PI = 3.14159;
  let msg = "HI";
}
console.log(radius); //8
// console.log(PI); // PI is not defined we are unable to access PI as we are outside the "block" which is inbetween the curly bracers
// console.log(msg); // msg is not defined we are unable to access msg as we are outside the "block" which is inbetween the curly bracers

//example of lexical scoping
function bankRobbery() {
  const heroes = ["Spiderman", "Wolverine", "Black Panther"];
  function cryForHelp() {
    for (let hero of heroes) {
      console.log(`PLEASE HELP US ${hero.toUpperCase()}`);
    }
  }
  cryForHelp();
}

bankRobbery();

// function expressions - storing a function in a variable

const add = function (x, y) {
  return x + y;
};
add(3, 4);

const square = function (num) {
  return Math.pow(num, num);
};

// -------- HIGHER ORDER FUNCTIONS
// Functions that operate on/with other functions.
// They can:
//* - Accept other functions as arguments
//* - Return a function

function callTwice(func) {
  func();
  func();
}

function laugh() {
  console.log("HAHAHAHA");
}

callTwice(laugh); //"HAHAHAHA"
//"HAHAHAHA"

//example of a factory function
function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

const isBewteen = makeBetweenFunc(1, 100);
isBewteen(25);

//example of methods
// a method is a function used as a property in objects.

// const math = {
//   multiply: function (x, y) {
//     return x * y;
//   },
//   divide: function (x, y) {
//     return y / x;
//   },
//   square: function (x) {
//     return x * x;
//   },
// };
// math.multiply(2, 4); //8
// math.divide(2, 4); //2
// math.square(2); //4

//---shorthand example
const math = {
  multiply(x, y) {
    return x * y;
  },
  divide(x, y) {
    return y / x;
  },
  square(x) {
    return x * x;
  },
};
math.multiply(2, 4); //8
math.divide(2, 4); //2
math.square(2); //4
