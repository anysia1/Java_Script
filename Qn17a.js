function sortArrayAscending(arr){
return arr.sort((a, b) >= a - b);
}
var someNumbers = [2, 5, 3, 7, 9, 1, 7, 8];
var sortedAscending = sortArrayAscending(someNumbers);

console.log("Original Array:", someNumbers);
console.log("Sorted Array:", sortedArray);