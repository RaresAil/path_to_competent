'use strict';

const { expect } = require('chai');
const app = require('../app/coercion');

describe('App | Coercion', () => {
  describe('Implicit Conversions', () => {
    it('Should return 2 as an Int from string', () => {
      expect(app.implicitInt).to.be.deep.equal(2);
    });

    it('Should return "nullmocha" as string from null with string', () => {
      expect(app.implicitStringNull).to.be.deep.equal('nullmocha');
    });

    it('Should return "123" as string from int to string', () => {
      expect(app.implicitIntToString).to.be.deep.equal('123');
    });

    it("Should throw an error because Symbols can't be converted implicitly to string", () => {
      try {
        app.implicitSymbolToString();
      } catch ({ message }) {
        expect(message).to.be.deep.equal(
          'Cannot convert a Symbol value to a string'
        );
      }
    });
  });

  describe('Explict Conversions', () => {
    it('Should return "123" as string from int to string', () => {
      expect(app.explicitIntToString).to.be.deep.equal('123');
    });

    it('Should return "Symbol()" as string from Symbol to string conversion', () => {
      expect(app.explicitSymbolToString).to.be.deep.equal('Symbol()');
    });
  });
});
