function areElementsPositive(array) {
  
    return array.every(element => element > 0);
  }
  
  
  const positiveArray = [1, 2, 3, 4, 5];
  const negativeArray = [-1, 2, 3, 4, 5];
  
  console.log('All elements positive (Positive Array):', areElementsPositive(positiveArray));
  console.log('All elements positive (Negative Array):', areElementsPositive(negativeArray));