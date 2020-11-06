function caesarCipherEncryptor(string, key) {
  let result = '';
  for (let i = 0; i < string.length; i += 1) {
    let temp = string.charCodeAt(i);
    let newKey = parseInt(key % 26);
    let newValue = temp + newKey;
    if (newValue > 122) {
      newValue -= 26;
    }
    result += String.fromCharCode(newValue);
  }
  return result;
}

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;
