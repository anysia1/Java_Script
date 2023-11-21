function findIndexOfCharacter(str, char) {
    const index = str.indexOf(char);
  
    return index;
  }
  
 
  const inputString = 'Hello World';
  const searchChar = 'o';
  const charIndex = findIndexOfCharacter(inputString, searchChar);
  
  if (charIndex !== -1) {
    console.log(`Index of '${searchChar}' in the string: ${charIndex}`);
  } else {
    console.log(`'${searchChar}' not found in the string.`);
  }