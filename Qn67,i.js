const unsortedObject = { c: 3, a: 1, b: 2 };
const sortedObject = Object.keys(unsortedObject).sort().reduce((acc, key) => {
  acc[key] = unsortedObject[key];
  return acc;
}, {});

console.log(sortedObject);