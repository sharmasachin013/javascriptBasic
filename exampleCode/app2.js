let arr = [NaN, 0, 15, false, -22, "", undefined, 47, null, 54];

for (let i = arr.length - 1; i >= 0; i--) {
  let value = arr[i];
  if (
    value === 0 ||
    value === false ||
    value === "" ||
    value === undefined ||
    value === null ||
    Number.isNaN(value)
  ) {
    arr.splice(i, 1);
  }
}

console.log(arr);

// NaN === NaN // false // true
