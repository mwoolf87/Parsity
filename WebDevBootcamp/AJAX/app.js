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

fetch("https://swapi.info/api/people/1")
  .then(res => {
    console.log("RESOLVED", res);
    return res.json();
  })
  .then(data => {
    console.log("JSON DONE", data);
    return fetch("https://swapi.info/api/people/2");
  })
  .then(res => {
    console.log(res);
    return res.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(e => {
    console.log("ERROR", e);
  });

const loadStarWarsPeople = async () => {
  const res = await fetch("https://swapi.info/api/people/1");
  const data = await res.json();
  console.log(data);
};

loadStarWarsPeople();
