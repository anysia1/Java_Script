function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNum = generateRandomNumber(1, 100);
console.log(randomNum);