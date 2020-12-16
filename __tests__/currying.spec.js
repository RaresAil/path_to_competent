const { expect } = require('chai');

const app = require('../app/currying');

describe('App | Currying & Function Composition', () => {
  const expectedOutput = 14;

  it(`The sum of 2, 4, 8 should be ${expectedOutput} with 'sum'`, () => {
    expect(app.sum(2, 4, 8)).to.be.deep.equal(expectedOutput);
  });

  it(`The sum of 2, 4, 8 should be ${expectedOutput} with 'curryingSum'`, () => {
    expect(app.curryingSum(2)(4)(8)).to.be.deep.equal(expectedOutput);
  });

  it(`The sum of 2, 4, 8 should be ${expectedOutput} with 'currying' and 'function composition'`, () => {
    expect(app.currying(app.sum, 2)(4, 8)).to.be.deep.equal(expectedOutput);
  });
});
