function findGreatestValue(arr) {
  
  const greatestValue = Math.max(...arr);
  return greatestValue;
}
const myArray = [9, 5, 8, 6, 15];
const result = findGreatestValue(myArray);
console.log("Greatest value in the array:", result);
