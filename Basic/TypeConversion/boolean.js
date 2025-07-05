// Quokka.js:
// To convert a value to a boolen , JS provides only 1 way:

// 1. Using the global function called Boolean( )
// IMPORTANT POINTS:

// 1. Any value can be converted to boolean passing it to Boolean().
// 2. All values will resolve to true except FALSY VALUES, which are
// 0,””,NaN,null and undefined
let n = Boolean(25);
console.log(n);
n = Boolean(0);
console.log(n);
n = Boolean("Sachin");
console.log(n);
n = Boolean("");
console.log(n);
n = Boolean(NaN);
console.log(n);
n = Boolean(null);
console.log(n);
n = Boolean(" ");
console.log(n);
n = Boolean(undefined);
console.log(n);
