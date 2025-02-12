function rotateArray(arr, noOfRotation) {
  let n = arr.length;
  noOfRotation = noOfRotation % n;

  return [...arr.slice(-noOfRotation), ...arr.slice(0, n - noOfRotation)];
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
console.log(rotateArray([10, 20, 30, 40, 50], 3));
console.log(rotateArray([7, 8, 9], 1));
