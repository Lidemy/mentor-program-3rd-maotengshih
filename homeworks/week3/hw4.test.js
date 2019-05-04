const isPalindromes = require('./hw4');

describe('hw4', () => {
  it('should return correct answer when str = abcdcba', () => {
    expect(isPalindromes('abcba')).toBe(true);
  });
  it('should return correct answer when str = abcdcba', () => {
    expect(isPalindromes('apple')).toBe(false);
  });
  it('should return correct answer when str = abcdcba', () => {
    expect(isPalindromes('aaaaa')).toBe(true);
  });
  it('should return correct answer when str = abcdcba', () => {
    expect(isPalindromes('applppa')).toBe(true);
  });
});
