function calculateAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    
  }
  return sum / arr.length;
}
const myNumbers = [10, 10, 10, 20, 10];
const result =  calculateAverage(myNumbers);
console.log(result);