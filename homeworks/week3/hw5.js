function add(a, b) {
  const result = [];
  let result2 = '';
  let tenDigits = 0;

  const adderALength = a.length;
  const adderBLength = b.length;
  let longerAdderLength = 0;
  if (adderALength >= adderBLength) {
    longerAdderLength = adderALength;
  } else longerAdderLength = adderBLength;

  for (let i = 0; i <= longerAdderLength; i += 1) {
    const adderA = a[a.length - 1 - i] || 0;
    const adderB = b[b.length - 1 - i] || 0;
    let unitDigits = Number(adderA) + Number(adderB) + tenDigits;
    tenDigits = 0;
    if (unitDigits >= 10) {
      unitDigits -= 10;
      tenDigits += 1;
      result.unshift(unitDigits);
    } else {
      result.unshift(unitDigits);
    }
  }
  if (result[0] === 0) {
    result2 = result.shift(0);
  }
  result2 = result.join('');
  return result2;
}

module.exports = add;
