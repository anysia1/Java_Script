function sortArrayAscending(array) {
  
    const sortedArray = array.slice().sort((a, b) => a - b);
  
    return sortedArray;
  }
  
 
  const inputArray = [5, 2, 8, 1, 3];
  const sortedArray = sortArrayAscending(inputArray);
  
  console.log('Original Array:', inputArray);
  console.log('Sorted Array (Ascending):', sortedArray);