function countWords(sentence) {

    const words = sentence.split(/\s+/);
  
    const filteredWords = words.filter(word => word.length > 0);
  
    return filteredWords.length;
  }
  const inputSentence = "This is a sample sentence.";
  const wordCount = countWords(inputSentence);
  
  console.log(wordCount);