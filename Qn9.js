function combineArrays(arrayOne, arrayTwo) {
  const combinedArray = arrayOne.concat(arrayTwo);
  return combinedArray;
}
  const arrayOne = ['1', '2', '3', '4'];
const arrayTwo = ['5', '6', '7'];
const result = combineArrays(arrayOne, arrayTwo);
console.log("Combined array:", result);