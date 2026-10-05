function firstNonRepeating(str) {
  const frequency = {};
  for (const char of str) frequency[char] = (frequency[char] || 0) + 1;
  for (const char of str) if (frequency[char] === 1) return char;
  return null;
}
console.log(firstNonRepeating("swiss")); // w
