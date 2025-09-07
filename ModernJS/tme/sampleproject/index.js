module.exports = {
  forEach(arr, fun) {
    for (let element of arr) {
      fun(element);
    }
  },
};
