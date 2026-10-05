function characterFrequency(str) {
  const frequency = {};
  for (const char of str.toLowerCase()) {
    if (char === " ") continue;
    frequency[char] = (frequency[char] || 0) + 1;
  }
  return frequency;
}
console.log(characterFrequency("hello")); // { h: 1, e: 1, l: 2, o: 1 }
