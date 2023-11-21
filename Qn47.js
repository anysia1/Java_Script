function getRandomNumber(min, max) {
  
    const randomFraction = Math.random();
  
  
    const randomNumber = Math.floor(randomFraction * (max - min + 1)) + min;
  
    return randomNumber;
  }

  const minRange = 5;
  const maxRange = 10;
  const randomNum = getRandomNumber(minRange, maxRange);
  
  console.log(`Random number between ${minRange} and ${maxRange}: ${randomNum}`);
