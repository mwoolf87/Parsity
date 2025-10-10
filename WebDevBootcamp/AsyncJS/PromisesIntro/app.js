// ----- PROMISES - a promise is an object representing the eventual completion or failure of an asynchronous operation

// const fakeRequestCallback = (url, success, failure) => {
//   const delay = Math.floor(Math.random() * 4500) + 500;
//   setTimeout(() => {
//     if (delay > 4000) {
//       failure("Connection Timeout :(");
//     } else {
//       success(`Here is your fake data from ${url}`);
//     }
//   }, delay);
// };
// fakeRequestCallback(
//   "books.com",
//   function (response) {
//     console.log("It worked!");
//     console.log(response);
//   },
//   function (err) {
//     console.log("ERROR", err);
//   }
// );

const fakeRequest = url => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

// fakeRequestPromise("yelp.com/api/coffee/page1")
//   .then(() => {
//     console.log("IT WORKED!!!! Page (1)");
//     fakeRequestPromise("yelp.com/api/coffee/page2")
//       .then(() => {
//         console.log("IT WORKED!!!! Page (2)");
//       })
//       .catch(() => {
//         console.log("ERROR on page 2");
//       });
//   })
//   .catch(() => {
//     console.log("ERROR on page 1");
//   });

// ----- promises can be resolved or rejected or resolved with values (parameters) passed to it
// fakeRequestPromise("yelp.com/api/coffee/page1")
//   .then(data => {
//     console.log("IT WORKED!!!! Page (1)");
//     console.log(data);
//     return fakeRequestPromise("yelp.com/api/coffee/page2");
//   })
//   .then(data => {
//     console.log("IT WORKED!!!! Page (2)");
//     console.log(data);
//     return fakeRequestPromise("yelp.com/api/coffee/page3");
//   })
//   .then(data => {
//     console.log(data);
//     console.log("IT WORKED!!!! Page (3)");
//   })
//   .catch(() => {
//     console.log("OH NO a request failed!");
//   });

// ------ Await keyword
//* await will pause the execution of the function, waiting for a promise to be resolved.

async function makeTwoRequests() {
  try {
    let data1 = await fakeRequest("/page1");
    console.log(data1);
    let data2 = await fakeRequest("/page2");
    console.log(data2);
  } catch (e) {
    console.log("CAUGHT AN ERROR!");
    console.log("error is:", e);
  }
}

makeTwoRequests();
