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
        "/users/1": {
          id: 1,
          username: "Bilbo",
          upvotes: 360,
          city: "Lisbon",
          topPostId: 454321,
        },
        "/users/5": {
          id: 5,
          username: "Esmerelda",
          upvotes: 571,
          city: "Honolulu",
        },
        "/posts/454321": {
          id: 454321,
          title: "Ladies & Gentlemen, may I introduce my pet pig, Hamlet",
        },
        "/about": "This is the about page!",
      };
      const data = pages[url];
      if (data) {
        resolve({ status: 200, data });
      } else {
        reject({ status: 404 });
      }
    }, 1000);
  });
};

fakeRequest("/users")
  .then(res => {
    console.log(res);
    const id = res.data[0].id;
    return fakeRequest(`/users/${id}`);
  })
  .then(res => {
    console.log(res);
    const postId = res.data.topPostId;
    return fakeRequest(`/posts/${postId}`);
  })
  .then(res => console.log(res))
  .catch(error => {
    console.log("OH NO!, ERROR!!!", error);
  });

// fakeRequest("/users")
//   .then(res => {
//     console.log("Status code", res.status);
//     console.log("Status code", res.data);
//     console.log("REQUEST WORKED!");
//   })
//   .catch(res => {
//     console.log(res.status);
//     console.log("REQUEST FAILED");
//   });
