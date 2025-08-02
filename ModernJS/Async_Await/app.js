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

// async function getPlanets() {
//   try {
//     const res = await axios.get("https://swapi.info/api/planets");
//     console.log(res.data);
//   } catch (e) {
//     console.log("IN CATCH!!!", e);
//   }
// }

// getPlanets();

// --- SEQUENTIAL REQUEST ---- //
// async function get3Pokemon() {
//   const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
//   const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
//   const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");
//   console.log(poke1.data);
//   console.log(poke2.data);
//   console.log(poke3.data);
// }

// get3Pokemon();

// ---- PARALLELL REQUEST ---- //
// async function get3Pokemon() {
//   const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
//   const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
//   const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
//   const poke1 = await prom1;
//   const poke2 = await prom2;
//   const poke3 = await prom3;
//   console.log(poke1.data);
//   console.log(poke2.data);
//   console.log(poke3.data);
// }

// get3Pokemon();

// ---- PROMISE.ALL EXAMPLE ---- //
async function get3Pokemon() {
  const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
  const results = await Promise.all([prom1, prom2, prom3]);
  printPokemon(results);
}

function printPokemon(results) {
  for (let pokemon of results) {
    console.log(pokemon.data.name);
  }
}

get3Pokemon();
