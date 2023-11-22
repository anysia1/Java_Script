function filterArray(arr) {
    return arr.filter(num => num >= 10);
  }
  const filteredArray = filterArray([5, 8, 12, 3, 15, 7]);
  console.log(filteredArray);