function modifyObjectValues(obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        if (typeof obj[prop] === 'number') {
          obj[prop] = obj[prop] * obj[prop];
        }
      }
    }
  }
  const sampleObject = { a: 2, b: 3, c: 4 };
  modifyObjectValues(sampleObject);
  console.log(sampleObject);