const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should return 4 for inputs (1, 3)', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 for inputs (1, 3.7)', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 for inputs (1.2, 3.7)', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 for inputs (1.5, 3.7)', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return 0 for inputs (0.1, -0.1)', () => {
    assert.strictEqual(calculateNumber(0.1, -0.1), 0);
  });

  it('should return -3 for inputs (-1.6, -1.4)', () => {
    assert.strictEqual(calculateNumber(-1.6, -1.4), -3);
  });
});
