#!/usr/bin/python3
const Utils = {
  calculateNumber(type, a, b) {
    a = Math.round(a);
    b = Math.round(b);

    switch (type) {
      case 'SUM':
        return a + b;
      case 'SUBTRACT':
        return a - b;
      case 'DIVIDE':
        if (b === 0) {
          return 'Error';
        }
        return a / b;
      default:
        return null;
    }
  }
};

module.exports = Utils;
