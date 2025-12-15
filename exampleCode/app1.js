// User enters 5 names // User then enters another name to search
// Program prints all index positions where that name occurs
const prompt = require("prompt-sync")();
let names = [];
let i;

for (i = 0; i < 5; i++) {
  names[i] = prompt("enter name " + (i + 1));
}

let serachName = prompt("Enter name to search!");
let index = names.indexOf(serachName);

let found = false;

while (index !== -1) {
  console.log("Name found at index: " + index);
  found = true;
  index = names.indexOf(serachName, index + 1);
}

if (!found) {
  console.log("name not found!");
}
