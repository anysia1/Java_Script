function removeLastElementAndReturn(array) {
 
    const newArray = array.slice(0, -1);
    return newArray;
  }
  
 
  const inputArray = [1, 2, 3, 4, 5];
  const modifiedArray = removeLastElementAndReturn(inputArray);
  
  console.log('Original Array:', inputArray);
  console.log('Array after removing the last element:', modifiedArray);
  
  
  
  
  