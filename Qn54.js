function capitalizeEachWord(sentence) {
    const words = sentence.split(' ');

    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    const capitalizedSentence = capitalizedWords.join(' ');
  
    return capitalizedSentence;
  }
  
  const inputSentence = "hello world, how are you?";
  const result = capitalizeEachWord(inputSentence);
  
  console.log(result);