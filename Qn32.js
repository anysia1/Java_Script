function findGreaterNumber(number1, number2) {
  
    return (number1 > number2) ? number1 : number2;
  }
 
  var num1 = 10;
  var num2 = 7;
  var result = findGreaterNumber(num1, num2);
  console.log("The greater number between", num1, "and", num2, "is", result);