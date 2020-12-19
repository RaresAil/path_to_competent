'use strict';

const { expect } = require('chai');
const app = require('../app/transpiling');

describe.only('App | Transpiling', () => {
  it('Transpile ES6 class and expect an array of 2 car plates', async () => {
    await app.transpile();
    const result = await app.runTranspiledScript();
    expect(result).to.have.lengthOf(2);

    const check = result.map((number) => /^NT[0-9]{3}[A-Z]{3}$/.test(number));
    expect(check).to.be.deep.equal([true, true]);
  });
});
