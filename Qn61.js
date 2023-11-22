function onlyDigits(str) {
    return /^\d+$/.test(str);
  }
  const inputString = "12345";
  const result = onlyDigits(inputString);
  
  console.log(result);