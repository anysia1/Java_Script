function findDuplicateElements(arr) {
    const uniqueSet = new Set();
    const duplicates = arr.filter(num => {
        if (uniqueSet.has(num)) {
            return true;
        }
        uniqueSet.add(num);
        return false;
    });
    
    return duplicates;
}
const duplicateElements = findDuplicateElements([1, 2, 3, 4, 2, 5, 6, 3]);
console.log("Duplicate elements:", duplicateElements);