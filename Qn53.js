// Write a function that finds the median of an array of numbers.
function median(arr) {
    const mid = Math.floor(arr.length / 2);
    const sortedArr = arr.sort((a, b) => a - b);
  
    if (arr.length % 2 === 0) {
       return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
    } else {
       return sortedArr[mid];
    }
 }
 const arr = [11, 12, 13, 14, 15, 16, 17, 18, 19];
 console.log(median(arr));
