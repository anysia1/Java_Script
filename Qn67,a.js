function printObjectProperties(obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        console.log(prop);
      }
    }
  }
  const sampleObject = { a: 1, b: 'hello', c: true };
  printObjectProperties(sampleObject);