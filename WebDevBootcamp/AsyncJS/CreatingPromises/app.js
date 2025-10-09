const fakeRequest = url => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand < 0.7) {
        resolve("Your Fake data here!");
      }
      reject("Request ERROR!");
    }, 1000);
  });
};

fakeRequest("/dogs/1")
  .then(data => {
    console.log("DONE WITH REQUEST");
    console.log("data is:", data);
  })
  .catch(err => {
    console.log("OH NO", err);
  });
