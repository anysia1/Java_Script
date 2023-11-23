function searchElementIndex(arr, target) {
    const index = arr.indexOf(target);
    return index !== -1 ? index : "Element not found";
}
const searchResult = searchElementIndex([1, 2, 3, 4, 5], 3);
console.log("Index of element:", searchResult);