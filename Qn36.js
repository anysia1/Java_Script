function countConsonants(str) {
  
    const consonants = 'bcdfghjklmnpqrstvwxyz';
  
    const lowerCaseStr = str.toLowerCase();
  
  
    const consonantArray = Array.from(lowerCaseStr).filter(char => consonants.includes(char));
  

    return consonantArray.length;
  }

  const inputString = 'Hello World';
  const consonantCount = countConsonants(inputString);
  console.log(`Number of consonants: ${consonantCount}`);