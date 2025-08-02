// async function greet() {
//   return "HELLO";
// }

// greet().then(val => {
//   console.log(`PROMISE RESOLVED WITH: `, val);
// });

// async function add(x, y) {
//   if (typeof x !== "number" || typeof y !== "number") {
//     throw "X and Y must be numbers!";
//   }
//   return x + y;
// }

// function add(x, y) {
//   return new Promise((resolve, reject) => {
//     if (typeof x !== "number" || typeof y !== "number") {
//       reject("X and Y must be numbers!");
//     }
//     resolve(x + y);
//   });
// }

// add(5, 6)
//   .then(val => {
//     console.log("PROMISE RESOLVED WITH:", val);
//   })
//   .catch(err => {
//     console.log("PROMISE REJECTED WITH", err);
//   });

// function getPlanets() {
//   return axios.get("https://swapi.info/api/planets");
// }

// getPlanets().then(res => {
//   console.log(res.data);
// });

async function getPlanets() {
  const res = await xios.get("https://swapi.info/api/planets");
  console.log(res.data);
}
