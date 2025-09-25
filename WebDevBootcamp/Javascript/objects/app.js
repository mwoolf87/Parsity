// Objects are collections of properties
// Properties are a key: value pair
// Instead of accessing data using an index we use custom keys.

const fitBitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: "5 of 7",
  avgGoodSleep: "2:13",
};

// two ways of accessing object values.. dot notation and bracket notation
console.log(fitBitData.totalSteps); //308727
console.log(fitBitData["totalSteps"]); //308727
