function squareArrayElements(array) {
  
    const squaredArray = array.map(element => element * element);
  
    return squaredArray;
  }
  

  const inputArray = [1, 2, 3, 4, 5];
  const squaredArray = squareArrayElements(inputArray);
  
  console.log('Original Array:', inputArray);
  console.log('Squared Array:', squaredArray);