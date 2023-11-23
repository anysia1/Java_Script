function searchKeyInObject(obj, key) {
    return key in obj;
  }
  const sampleObject = { a: 1, b: 'hello', c: true };
  console.log(searchKeyInObject(sampleObject, 'b'));