function isSortedAscending(array) {
  
    return array.every((element, index) => index === 0 || element >= array[index - 1]);
  }
  
  const ascendingArray = [1, 2, 3, 4, 5];
  const unsortedArray = [1, 3, 2, 4, 5];
  
  console.log('Is the array sorted in ascending order? (Ascending Array):', isSortedAscending(ascendingArray));
  console.log('Is the array sorted in ascending order? (Unsorted Array):', isSortedAscending(unsortedArray));