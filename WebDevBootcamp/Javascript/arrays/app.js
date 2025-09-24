const { arrayBuffer } = require("stream/consumers");

// an array is a list of varying data types.
const daysOfWeek = ["Monday", "Tuesday", "Wednesday"];
daysOfWeek[0]; // Monday
daysOfWeek[3]; // undefined

// ---- ARRAY Methods
//push - add to end
// pop - remove from end
// shift - remove from start
// unshift - add to start
let movieLine = [];
movieLine.push("Ted, Corey, Lambo, Sean");
console.log(movieLine); //['Ted, Corey, Lambo, Sean']
movieLine.pop();
console.log(movieLine); //['Ted, Corey, Lambo]

// Additional Methods
// concat - merge arrays
// includes - look for value
// indexOf - just like string.indexOf
// join - creates a string from an array
// reverse -  reverses an array
// slice - copies a portion on an array
// splice - removes/replaces elements
// sort - sorts an array
