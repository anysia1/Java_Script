function stringModifier(inputString, position, replacementChar) {
   
    if (position < 0 || position >= inputString.length) {
      return "Invalid position. Please provide a valid position within the string.";
    }
 
    var modifiedStringArray = inputString.split('');
    modifiedStringArray[position] = replacementChar;
  
    var modifiedString = modifiedStringArray.join('');
    return modifiedString;
  }
  
  var originalString = "example";
  var modifiedPosition = 2;
  var replacementCharacter = "X";
  var result = stringModifier(originalString, modifiedPosition, replacementCharacter);
  
  console.log("Original string:", originalString);
  console.log("Modified string:", result);