function secondLargest(numbers) {
  let max = -Infinity;
  let secondMax = -Infinity;

  if (numbers.length < 2) {
    return null;
  }

  for (let num of numbers) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num !== max) {
      secondMax = num;
    }
  }
  return secondMax === -Infinity ? null : secondMax;
}

console.log(secondLargest([10, 20, 30, 40, 50]));
console.log(secondLargest([5, 5, 5, 5]));
console.log(secondLargest([9]));
console.log(secondLargest([12, 35, 1, 10, 34, 1]));
