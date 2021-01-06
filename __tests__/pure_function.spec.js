'use strict';

const { expect } = require('chai');

const app = require('../app/pure_function');

/**
 * A function is only pure if, given the same input,
 * it will always produce the same output.
 */

describe('App | Pure Functions', () => {
  it('Should return true for all the function calls', () => {
    expect(app.isHigher(2, 1)).to.be.deep.equal(true);
    expect(app.isHigher(9999, 99)).to.be.deep.equal(true);
    expect(app.isHigher(Number.MAX_VALUE, Number.MIN_VALUE)).to.be.deep.equal(
      true
    );
  });

  it('Should return false for all the function calls', () => {
    expect(app.isHigher(1, 2)).to.be.deep.equal(false);
    expect(app.isHigher(99, 9999)).to.be.deep.equal(false);
    expect(app.isHigher(Number.MIN_VALUE, Number.MAX_VALUE)).to.be.deep.equal(
      false
    );
  });

  it('Should not return the same value because function is not pure', () => {
    expect(app.sum(-1)).to.be.deep.equal(-1);

    app.updateC();

    expect(app.sum(-1)).to.not.be.deep.equal(-1);
  });
});
