function isLeapYear(year) {
  
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
  const inputYear = 2024;
  const result = isLeapYear(inputYear);
  
  console.log(result); 