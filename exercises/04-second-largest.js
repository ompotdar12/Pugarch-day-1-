function secondLargest(numbers) {
  const unique = [...new Set(numbers)];
  if (unique.length < 2) return undefined;
  let largest = -Infinity, second = -Infinity;
  for (const n of unique) {
    if (n > largest) {
      second = largest;
      largest = n;
    } else if (n > second) {
      second = n;
    }
  }
  return second;
}
console.log(secondLargest([10, 5, 20, 20, 8])); // 10
