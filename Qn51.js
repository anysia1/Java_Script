function filterOutNegatives(arr) {
  
    return arr.filter(number => number >= 0);
  }
  
  const inputArray = [1, -2, 3, -4, 5, -6];
  const resultArray = filterOutNegatives(inputArray);
  
  console.log(resultArray); 