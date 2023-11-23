function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}
const sortedArray = sortArray([5, 2, 9, 1, 5, 6]);
console.log("Sorted array:", sortedArray);
