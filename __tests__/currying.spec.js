const { expect } = require('chai');

const app = require('../app/currying');

describe('App | Currying & Function Composition', () => {
  const numbers = [2, 4, 8];
  const expectedOutput = 14;

  it(`The sum of ${numbers.join(
    ', '
  )} should be ${expectedOutput} with 'sum'`, () => {
    const sum = app.sum(...numbers);

    expect(sum).to.be.deep.equal(expectedOutput);
  });

  it(`The sum of ${numbers.join(
    ', '
  )} should be ${expectedOutput} with 'curryingSum'`, () => {
    const sum = app.curryingSum(numbers[0])(numbers[1])(numbers[2]);

    expect(sum).to.be.deep.equal(expectedOutput);
  });

  it(`The sum of ${numbers.join(
    ', '
  )} should be ${expectedOutput} with 'currying' and 'function composition'`, () => {
    const [_, ...restNumbers] = numbers;

    const sum = app.currying(app.sum, numbers[0])(...restNumbers);

    expect(sum).to.be.deep.equal(expectedOutput);
  });
});
