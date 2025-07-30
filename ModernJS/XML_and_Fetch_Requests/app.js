// ----- EXAMPLE OF XML REQUEST --- //

// const firstRequest = new XMLHttpRequest();
// firstRequest.addEventListener("load", function () {
//   console.log("FIRST REQUEST WORKED");
//   const data = JSON.parse(this.responseText);
//   const filmURL = data[0].films[0];
//   const filmReq = new XMLHttpRequest();
//   filmReq.addEventListener("load", function () {
//     console.log("SECOND REQUEST WORKED");
//     const filmData = JSON.parse(this.responseText);
//     console.log(filmData.title);
//   });
//   filmReq.addEventListener("error", function (e) {
//     console.log("ERROR!", e);
//   });
//   filmReq.open("GET", filmURL);
//   filmReq.send();
//   //   for (let planet of data) {
//   //     console.log(planet.name);
//   //   }
// });
// firstRequest.addEventListener("error", () => {
//   console.log("ERROR!!!!!");
// });

// firstRequest.open("GET", "https://swapi.info/api/planets");
// firstRequest.send();
// console.log("Request Sent!");

// ---- EXAMPLE OF A FETCH REQUEST ---- //
fetch("https://swapi.info/api/planets")
  .then(response => {
    if (!response.ok) throw new Error(`status code error: ${response.status}`);

    response.json().then(data => {
      for (let planet of data) {
        console.log(planet.name);
      }
    });
  })
  .catch(err => {
    console.log("SOMETHING WENT WRONG WITH THE FETCH!");
    console.log(err);
  });
