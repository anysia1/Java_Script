function getFirstNElements(array, n) {
  
    return array.slice(0, n);
  }
  
    const inputArray = [1, 2, 3, 4, 5];
  const n = 3;
  const firstNElements = getFirstNElements(inputArray, n);
  
  console.log(`Original Array: ${inputArray}`);
  console.log(`First ${n} Elements: ${firstNElements}`);