function commonElements(a, b) {
  const setB = new Set(b);
  const result = [];
  const added = new Set();
  for (const value of a) {
    if (setB.has(value) && !added.has(value)) {
      result.push(value);
      added.add(value);
    }
  }
  return result;
}
console.log(commonElements([1, 2, 3, 4], [3, 4, 5, 6])); // [3,4]
