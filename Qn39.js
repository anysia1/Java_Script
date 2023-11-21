function isValuePresent(array, value) {
   
    return array.includes(value);
  }
  

  const inputArray = [1, 2, 3, 4, 5];
  const searchValue = 3;
  
  if (isValuePresent(inputArray, searchValue)) {
    console.log(`${searchValue} is present in the array.`);
  } else {
    console.log(`${searchValue} is not present in the array.`);
  }