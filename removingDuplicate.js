// function removeDuplicates(num) {
//   let seen = {};
//   let newArray = [];

//   for (let i of num) {
//     if (!seen[i]) {
//       seen[i] = "Present";
//       newArray.push(i);
//     }
//   }
//   return newArray
// }

function removeDuplicates(num) {
  let itemsCount = {};
  let newArray = [];

  for (let i of num) {
    itemsCount[i] = (itemsCount[i] || 0) + 1;
  }

  for (let i of num) {
    if (itemsCount[i] === 1) {
      newArray.push(i);
    }
  }
  return newArray;
}

//easy way
// function removeDuplicates(num) {
//   let newArray = [];
//   for (let i of num) {
//     if (!newArray.includes(i)) newArray.push(i);
//   }
//   return newArray;
// }

const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10];

console.log(removeDuplicates(numbers));
