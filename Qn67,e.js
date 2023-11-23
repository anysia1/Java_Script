function filterObject(obj, condition) {
    const filteredObject = {};
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop) && condition(obj[prop])) {
        filteredObject[prop] = obj[prop];
      }
    }
    return filteredObject;
  }
  const sampleObject = { a: 1, b: 5, c: 10 };
  const filteredObject = filterObject(sampleObject, value => value > 3);
  console.log(filteredObject);