function isPalindrome(string) {
  let reverseString = '';
  for (let i = string.length - 1; i >= 0; i -= 1) {
    reverseString += string[i];
  }
  if (string === reverseString) {
    return true;
  } else {
    return false;
  }
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;
