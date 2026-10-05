function findMissingNumber(numbers) {
  const n = numbers.length + 1;
  const expected = n * (n + 1) / 2;
  const actual = numbers.reduce((sum, value) => sum + value, 0);
  return expected - actual;
}
console.log(findMissingNumber([1, 2, 3, 5])); // 4
