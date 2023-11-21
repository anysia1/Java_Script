function customSortAndDisplay(arr) {

    arr.sort((a, b) => a - b);
  
    
    const first3 = arr.slice(0, 3);
    const last3 = arr.slice(-3);
  
  
    const modifiedArray = [...first3, ...arr, ...last3];
    console.log("Modified Array:", modifiedArray);
  
    const first3FromSorted = arr.slice(0, 3);
    console.log("First 3 numbers from sorted array:", first3FromSorted);
  }
  const someNumbers = [3, 8, 2, 1, 2, 2, 3, 4];
  customSortAndDisplay(someNumbers);