function findMissingNumber(numbers) {
  let prevNumber = numbers[0] - 1;
  for (let i of numbers) {
    if (prevNumber + 1 !== i) {
      return prevNumber + 1;
    } else {
      prevNumber = i;
    }
  }
  return null;
}

console.log(findMissingNumber([1, 2, 3, 4, 5, 6]));
console.log(findMissingNumber([10, 11, 12, 14, 15]));
console.log(findMissingNumber([100, 101, 102, 103, 105]));
