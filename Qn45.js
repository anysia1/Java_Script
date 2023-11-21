function sumOfEvenNumbers(array) {

    const sum = array.reduce((accumulator, current) => {
      if (current % 2 === 0) {
        return accumulator + current;
      } else {
        return accumulator;
      }
    }, 0);
  
    return sum;
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenSum = sumOfEvenNumbers(numbers);
  
  console.log('Array:', numbers);
  console.log('Sum of Even Numbers:', evenSum);