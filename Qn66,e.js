function arrayAverage(arr) {
    const sum = arraySum(arr);
    return sum / arr.length;
  }
  const average = arrayAverage([1, 2, 3, 4, 5]);
  console.log(average);