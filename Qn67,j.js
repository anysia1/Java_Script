function transformObjectValuesToUpperCase(obj) {
    const transformedObject = {};
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        transformedObject[prop] = String(obj[prop]).toUpperCase();
      }
    }
    return transformedObject;
  }
  const sampleObject = { a: 'hello', b: 'world' };
  const transformedObject = transformObjectValuesToUpperCase(sampleObject);
  console.log(transformedObject);