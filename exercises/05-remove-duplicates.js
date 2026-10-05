function removeDuplicates(numbers) {
  const result = [];
  const seen = new Set();
  for (const n of numbers) {
    if (!seen.has(n)) {
      seen.add(n);
      result.push(n);
    }
  }
  return result;
}
console.log(removeDuplicates([1, 2, 2, 3, 1, 4])); // [1,2,3,4]
