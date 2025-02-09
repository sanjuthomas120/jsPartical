function majorityElement(arr) {
  const eachCount = {};
  const majorityCount = Math.floor(arr.length / 2);

  for (let i of arr) {
    eachCount[i] = (eachCount[i] || 0) + 1;
  }

  for (let i of arr) {
    if (eachCount[i] > majorityCount) {
      return i;
    }
  }
  return null;
}

console.log(majorityElement([3, 3, 4, 2, 3, 3, 3, 1]));
console.log(majorityElement([1, 2, 3, 4, 5]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
