function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  for (let i = 0, j = clean.length - 1; i < j; i++, j--) {
    if (clean[i] !== clean[j]) return false;
  }
  return true;
}
console.log(isPalindrome("Madam")); // true
