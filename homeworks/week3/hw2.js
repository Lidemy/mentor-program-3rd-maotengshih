function alphaSwap(str) {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    const charCodeNow = str.charCodeAt(i);
    if (charCodeNow >= 65 && charCodeNow <= 90) {
      result += String.fromCharCode(charCodeNow + 32);
    } else if (charCodeNow >= 97 && charCodeNow <= 122) {
      result += String.fromCharCode(charCodeNow - 32);
    } else {
      result += str[i];
    }
  }
  return result;
}

module.exports = alphaSwap;
