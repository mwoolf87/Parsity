// const willGetYouADog = new Promise((resolve, reject) => {
//   const rand = Math.random();
//   if (rand < 0.5) {
//     resolve();
//   } else {
//     reject();
//   }
// });
// willGetYouADog.then(() => {
//   console.log("YAY WE GOT A DOG");
// });
// willGetYouADog.catch(() => {
//   console.log(":( No dog");
// });

// const makeDogPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const rand = Math.random();
//       if (rand < 0.5) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 5000);
//   });
// };
// makeDogPromise()
//   .then(() => {
//     console.log("YAY WE GOT A DOG!!!");
//   })
//   .catch(() => {
//     console.log(":( NO DOG");
//   });

const fakeRequest = url => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, username: "Bilbo" },
          { id: 5, username: "Esmerelda" },
        ],
        "/about": "This is the about page!",
      };
      const data = pages[url];
      if (data) {
        resolve({ status: 200, data });
      } else {
        reject({ status: 404 });
      }
    }, 2000);
  });
};

fakeRequest("/users")
  .then(res => {
    console.log("Status code", res.status);
    console.log("Status code", res.data);
    console.log("REQUEST WORKED!");
  })
  .catch(res => {
    console.log(res.status);
    console.log("REQUEST FAILED");
  });
