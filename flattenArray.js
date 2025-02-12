function flattenArray(arr) {
  // let flattenArray = arr.flat(Infinity)
  // return flattenArray;

  let flatArray = [];

  for (let i of arr) {
    if (Array.isArray(i)) {
     flatArray = flatArray.concat(flattenArray(i))
    } else {
      flatArray.push(i);
    }
  }
  return flatArray;
}

console.log(flattenArray([1, [2, 3, [4, 5]], 6]));
console.log(flattenArray([[1, 2], [3, [4, [5]]], 6]));
