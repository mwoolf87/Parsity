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

let str = "123";
for (let i = 0; i <= 4; i++) {
  console.log("outer:", i);
  for (let j = 0; j < str.length; j++) {
    console.log("    Inner:", str[j]);
  }
}

const seatingChart = [
  ["Kristen", "Erik", "Namita"],
  ["Geoffrey", "Juanita", "Antonio", "Kevin"],
  ["Yuma", "Sakura", "Jack", "Erika"],
];

for (let i = 0; i < seatingChart.length; i++) {
  const row = seatingChart[i];
  console.log(`ROW #${i + 1}`);
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}
