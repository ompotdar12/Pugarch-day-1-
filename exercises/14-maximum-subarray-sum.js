function maxSubarraySum(numbers) {
  if (numbers.length === 0) return 0;
  let current = numbers[0];
  let best = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    current = Math.max(numbers[i], current + numbers[i]);
    best = Math.max(best, current);
  }
  return best;
}
console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
