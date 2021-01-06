'use strict';

const app = require('../app/generators');
const { expect } = require('chai');

describe('App | Generators', () => {
  it('Should return 1 and 2 from .next()', () => {
    const iterator = app.someGenerator();
    expect(iterator.next().value).to.be.deep.equal(1);
    expect(iterator.next().value).to.be.deep.equal(2);
  });

  it('Should return "We are done here" after calling .next 2 times.', () => {
    const iterator = app.someGenerator();
    iterator.next();
    iterator.next();
    expect(iterator.next().value).to.be.deep.equal('We are done here.');
    expect(iterator.next().done).to.be.deep.equal(true);
  });
});
