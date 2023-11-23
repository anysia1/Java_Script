function findMaxAndMin(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return { max, min };
}
const numbers = [2, 8, 1, 5, 9];
const result = findMaxAndMin(numbers);
console.log(result);