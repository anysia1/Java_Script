function displayPattern(rows, columns) {
  for (let i = 0; i < rows; i++) {
    let row = '';
    for (let j = 0; j < columns; j++) {
      row += '* ';
    }
    console.log(row);
  }
}
displayPattern(4, 5);