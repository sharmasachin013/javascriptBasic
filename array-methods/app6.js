// array.lastIndexOf(searchElement, fromIndex)
//searchElement → The element to search for.

//fromIndex (optional) → The index to start searching backward from (default is the last index).
const numbers = [2, 5, 9, 5, 2];
console.log(numbers.lastIndexOf(5)); // Output: 3
console.log(numbers.lastIndexOf(2)); // Output: 4
console.log(numbers.lastIndexOf(7)); // Output: -1
console.log(numbers.lastIndexOf(5, 2)); // Output: 1 (searching backward from index 2)
console.log(numbers.lastIndexOf(2, 2));
