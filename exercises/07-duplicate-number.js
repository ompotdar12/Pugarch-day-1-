function findDuplicate(numbers) {
  const seen = new Set();
  for (const n of numbers) {
    if (seen.has(n)) return n;
    seen.add(n);
  }
  return undefined;
}
console.log(findDuplicate([4, 2, 7, 3, 2, 9])); // 2
