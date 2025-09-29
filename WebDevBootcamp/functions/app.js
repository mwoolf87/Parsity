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
