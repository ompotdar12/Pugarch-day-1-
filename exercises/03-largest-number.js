function largestNumber(numbers) {
  if (numbers.length === 0) return undefined;
  let largest = numbers[0];
  for (const n of numbers) if (n > largest) largest = n;
  return largest;
}
console.log(largestNumber([12, 45, 7, 31])); // 45
