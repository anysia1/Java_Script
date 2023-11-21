function reverseArray(array) {
    const reversedArray = array.slice().reverse();
  
   
  
    return reversedArray;
  }
  
  
  const originalArray = [1, 2, 3, 4, 5];
  const reversedArray = reverseArray(originalArray);
  
  console.log('Original Array:', originalArray);
  console.log('Reversed Array:', reversedArray);