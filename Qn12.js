function displayPattern(rows) {
    for (let i = rows; i > 0; i--) {
        let pattern = '';
        for (let j = 0; j < i; j++) {
            pattern += '1 ';
        }
        console.log(pattern.trim());
    }
}
displayPattern(5)