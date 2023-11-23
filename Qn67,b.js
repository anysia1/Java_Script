function printObjectValues(obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        console.log(obj[prop]);
      }
    }
  }
  const sampleObject = { a: 1, b: 'hello', c: true };
  printObjectValues(sampleObject);