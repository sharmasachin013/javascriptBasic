// splice(): changes the contents of an array by removing or replacing //existing elements and/or adding new elements.
//Syntax:
//  arr.splice(start[, deleteCount, elem1, ..., elemN])
// 1. Remove (Delete) Elements
// let fruits = ["apple", "banana", "cherry", "date", "mango"];
// let remove = fruits.splice(0,2);
// console.log(remove);
// console.log(fruits);

// 2. Add Elements

// let colors = ["red", "blue", "green"];
// colors.splice(1, 0, "yellow", "purple");
// console.log(colors);

// 3. Replace Elements

// let numbers = [10, 20, 30, 40, 50];
// numbers.splice(2, 2, 100, 200);
// console.log(numbers);

// 4. Insert at the End
// let pets = ["dog", "cat"];
// pets.splice(pets.length, 0, "parrot");
// console.log(pets);

// 5. Insert at the Beginning
let tech = ["React", "Vue"];

// insert "Angular" at the start
tech.splice(0, 0, "Angular");

console.log(tech); // ["Angular", "React", "Vue"]
