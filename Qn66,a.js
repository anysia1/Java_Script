function arraySum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  const sum = arraySum([1, 2, 3, 4, 5]);
  console.log(sum);