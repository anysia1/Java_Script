function sumOfArray(arr) {
    var sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
    return sum;
  }
  const myArray = [1, 3, 5, 3, 5];
  console.log(sumOfArray(myArray));