// for (let i = 50; i >= 0; i -= 10) {
//   console.log(i);
// }

// for (let i = 0; i < 6; i++) {
//   console.log(i + 1);
// }

// for (let i = 0; i < 6; i++) {
//   console.log("Da ba dee da ba daa");
// }

// for (let i = 100; i >= 0; i -= 10) {
//   console.log(i);
// }

// for (let i = 25; i >= 0; i -= 5) {
//   console.log(i);
// }

const animals = ["lions", "tigers", "bears"];

// for (let i = 0; i < animals.length; i++) {
//   console.log(animals[i]);
// }

// for (let i = animals.length - 1; i >= 0; i--) {
//   console.log(animals[i]);
// }

// for (let i = 0; i < people.length; i++) {
//   let value = people[i];
//   console.log(value.toUpperCase());
// }

// let str = "123";
// for (let i = 0; i <= 4; i++) {
//   console.log("outer:", i);
//   for (let j = 0; j < str.length; j++) {
//     console.log("    Inner:", str[j]);
//   }
// }

// const seatingChart = [
//   ["Kristen", "Erik", "Namita"],
//   ["Geoffrey", "Juanita", "Antonio", "Kevin"],
//   ["Yuma", "Sakura", "Jack", "Erika"],
// ];

// for (let i = 0; i < seatingChart.length; i++) {
//   const row = seatingChart[i];
//   console.log(`ROW #${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }

// ------ While loops
// This is useful where the number of inputs are truly variable ie we wont know how many attempts we need to make
// let num = 0;
// while (num < 10) {
//   num++;
//   console.log(num);
// }

// ----- For Of Loops
// a useful loop for working with Arrays
// const subreddits = ["cringe", "books", "chickens", "funny", "pics", "soccer"];

// for (reddit of subreddits) {
//   console.log(reddit);
// }

// const seatingChart = [
//   ["Kristen", "Erik", "Namita"],
//   ["Geoffrey", "Juanita", "Antonio", "Kevin"],
//   ["Yuma", "Sakura", "Jack", "Erika"],
// ];

// for (let row of seatingChart) {
//   for (let student of row) {
//     console.log(student);
//   }
// }

// for (let char of "hello world") {
//   console.log(char);
// }

// -------- FOR IN LOOPS
// used in iterating over Objects

const testScores = {
  keenan: 81,
  damon: 67,
  kim: 89,
  shawn: 91,
  marlon: 72,
  dwayne: 77,
  nadia: 83,
  elvira: 97,
  diedre: 81,
  vonnie: 60,
};

for (let score in testScores) {
  console.log(testScores[score]);
}
