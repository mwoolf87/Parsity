// ------- AJAX
// stands for Asynchronous Javascript And XML
// ----- AJAJ later, JSON replaced XML
// JSON stands for Java Script Oject Notation

// example of JSON
// {
//     "squadName": "Super Hero guys",
//     "hometown": "Flavortown",
//     "formed": 2025,
//     "members": [
//         "Shredward",
//         "Hawk",
//         "Lambo",
//     ],
// }

//JSON.parse(data)  takes JSON and turns it into an object which allows developers to work with and manupulate data

//JSON.stringify(data) useful if we are trying to send data to an API

// GET REQUEST - get data
// POST REQUEST - send data
// PUT REQUEST - update data
// DELETE REQUEST - delete data

// --------- FETCH API

// fetch("https://swapi.info/api/people/1")
//   .then(res => {
//     console.log("RESOLVED", res);
//     return res.json();
//   })
//   .then(data => {
//     console.log("JSON DONE", data);
//     return fetch("https://swapi.info/api/people/2");
//   })
//   .then(res => {
//     console.log(res);
//     return res.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(e => {
//     console.log("ERROR", e);
//   });

// const loadStarWarsPeople = async () => {
//   try {
//     const res = await fetch("https://swapi.info/api/people/1");
//     const data = await res.json();
//     console.log(data);
//     const res2 = await fetch("https://swapi.info/api/people/2");
//     const data2 = await res2.json();
//     console.log(data2);
//   } catch (e) {
//     console.log("ERROR", e);
//   }
// };

// loadStarWarsPeople();

// ------- AXIOS

// axios
//   .get("https://swapi.info/api/people/1")
//   .then(res => {
//     console.log(res);
//   })
//   .catch(e => {
//     console.log("ERROR!", e);
//   });

// const getStarWaresPerson = async id => {
//   try {
//     const res = await axios.get(`https://swapi.info/api/people/${id}`);
//     console.log(res.data);
//   } catch (e) {
//     console.log(e);
//   }
// };

// getStarWaresPerson(1);
// getStarWaresPerson(10);
// getStarWaresPerson(15);

const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLI = document.createElement("li");
  newLI.append(jokeText);
  jokes.append(newLI);
};

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com", config);
    return res.data.joke;
  } catch (e) {
    return "No Jokes Available! Sorry!";
  }
};
button.addEventListener("click", addNewJoke);
getDadJoke();
