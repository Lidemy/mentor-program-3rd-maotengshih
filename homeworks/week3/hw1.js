function stars(n) {
  const result = [];
  let temp = '';
  for (let i = 0; i < n; i += 1) {
    temp += '*';
    result.push(temp);
  }
  return result;
}

module.exports = stars;
