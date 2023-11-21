function calculateSquareRoot(number) {
    if (number < 0) {
      return "Invalid input. Square root of a negative number is not a real number.";
    }
  
    return Math.sqrt(number);
  }
  
  var inputNumber = 25;
  var result = calculateSquareRoot(inputNumber);
  console.log("Square root of", inputNumber, "is", result);