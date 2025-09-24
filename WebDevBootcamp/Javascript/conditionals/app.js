//  ---- IF STATEMENT
// console.log("BEFORE CONDITIONAL");
// if (1 + 2 === 2) {
//   console.log("MATH STILL WORKS");
// }
// console.log("AFTER CONDITIONAL");

// ----- ELSE IF STATEMENT

// const dayOfWeek = "Monday";

// if (dayOfWeek === "Monday") {
//   console.log("UGGGHHH I HATE MONDAYS!!");
// } else if (dayOfWeek === "Saturday") {
//   console.log("YES! I LOVE SATURDAYS!!!");
// }

// 0-5 - FREE
// 5 - 10 CHILD $10
// 10-65 ADULT $20
// 65+ SENIOR $10

// const age = 8;
// if (age < 5) {
//   console.log("you are a baby you get in for free");
// } else if (age < 10) {
//   console.log("you are a child, you pay $10");
// } else if (age < 65) {
//   console.log("you are an adult. you pay $20");
// }

// const password = prompt("please enter a new password");
// // password must be 6+ characters
// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) {
//     console.log("good job, no space");
//   } else {
//     console.log("valid password");
//   }
// } else {
//   console.log("password too short! must be 6+ characters");
// }

// ----- truthy and falsy values
// * All JS values have an inherent truthyness or falsyness about them
// * Falsey Values:
//     * false
//     * 0
//     * "" (empty string)
//     * null
//     * undefined
//     * NaN
// * Everything else is truthy!

if (0) {
  console.log("Truthy");
} else {
  console.log("Falsey");
}

// 0-5 - FREE
// 5 - 10 CHILD $10
// 10-65 ADULT $20
// 65+ SENIOR FREE

const age = 11;

if ((age >= 0 && age < 5) || age >= 65) {
  console.log("FREE");
} else if (age >= 5 && age < 10) {
  console.log("$10");
} else if (age >= 10 && age < 65) {
  console.log("20");
} else {
  console.log("invalid age");
}
