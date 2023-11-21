function convertToUppercase(array) {

    const uppercaseArray = array.map(str => str.toUpperCase());
  
    return uppercaseArray;
  }
  

  const stringsArray = ['apple', 'banana', 'orange', 'grape'];
  const uppercaseStrings = convertToUppercase(stringsArray);
  
  console.log('Original Array:', stringsArray);
  console.log('Uppercase Array:', uppercaseStrings);