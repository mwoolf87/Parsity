// ----- The Async Keyword
//* Async functions always return a promise.
//* If the function returns a value, the promise will be resolved with that value.
//* If the function throws an exception, the promise will be rejected

async function hello() {}

const sing = async () => {
  throw new Error("AHHHH");
  return "LA LA LA LA";
};

// sing()
//   .then(data => {
//     console.log("Promise resolved with: ", data);
//   })
//   .catch(err => {
//     console.log("OH NO, PROMISE REJECTED");
//     console.log(err);
//   });

const login = async (username, password) => {
  if (!username || !password) throw "Missing Credentials";
  if (password === "unit") return "Welcome!";
  throw "Invalid Password";
};

login("akjsfhnshbfu")
  .then(msg => {
    console.log("Logged in");
    console.log(msg);
  })
  .catch(err => {
    console.log("ERROR");
    console.log(err);
  });
