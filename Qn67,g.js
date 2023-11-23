function getObjectSize(obj) {
    return Object.keys(obj).length;
  }
  const sampleObject = { a: 1, b: 'hello', c: true };
  console.log(getObjectSize(sampleObject)); 