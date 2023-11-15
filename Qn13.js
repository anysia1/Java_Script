function displayPattern(rows, cols) {
    for (let i = 0; i < rows; i++) {
      let row = "";
      for (let j = 0; j < cols; j++) {
        row += j < cols - i ? "1 " : "0 ";
      }
      console.log(row);
    }
  }
  displayPattern(5,5);