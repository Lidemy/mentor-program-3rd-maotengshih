function isPrime(n) {
  const factorArray = [];
  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) {
      factorArray.push(i);
    }
  }
  if (factorArray.length === 2) {
    return true;
  } return false;
}

module.exports = isPrime;
