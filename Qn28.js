function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    return cleanedStr === cleanedStr.split('').reverse().join('');
  }
  
  const palindromeString = "A man, a plan, a canal, Panama!";
  const nonPalindromeString = "Hello, World!";
  
  console.log(isPalindrome(palindromeString)); 
  console.log(isPalindrome(nonPalindromeString));