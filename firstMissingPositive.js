function firstMissingPositive(arr) {
  let numSet = new Set(arr);
  let missing = 1;

  while (numSet.has(missing)) missing++;

  return missing;
}

console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([1, 2, 0]));
console.log(firstMissingPositive([7, 8, 9, 11, 12]));
