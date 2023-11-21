function removeDuplicates(array) {
  
    const uniqueSet = new Set(array);
  
    const uniqueArray = Array.from(uniqueSet);
  
  
    return uniqueArray;
  }
  
  const inputArray = [1, 2, 3, 4, 2, 3, 5, 6, 7, 7, 8];
  const resultArray = removeDuplicates(inputArray);
  
  console.log('Original Array:', inputArray);
  console.log('Array without Duplicates:', resultArray);