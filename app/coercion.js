'use strict';

module.exports = {
  implicitInt: 10 / '5',
  implicitStringNull: null + 'mocha',
  implicitIntToString: 123 + '',
  explicitIntToString: String(123),

  implicitSymbolToString: () => Symbol('') + '',
  explicitSymbolToString: String(Symbol(''))
};
