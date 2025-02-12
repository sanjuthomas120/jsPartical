function arrayIntersection(arr1, arr2) {
    let set1 = new Set(arr1)
    const intersection = arr2.filter(value => set1.has(value))
    return intersection
}

console.log(arrayIntersection([1, 2, 2, 3, 4], [2, 3, 3, 5])); 
console.log(arrayIntersection([7, 8, 9, 10], [10, 8, 12, 7, 7]));
console.log(arrayIntersection([1, 2, 3], [4, 5, 6]));

