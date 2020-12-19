'use strict';

const { expect } = require('chai');
const generateUID = require('../app/snowflake');

describe('App | Generators (Snowflake) in less than 200ms', () => {
  it('Generate 100 UIDs', () => {
    const start = Date.now();
    const uids = Array.from(Array(100)).map(() => generateUID());
    const time = Date.now() - start;

    expect(new Set(uids).size).to.be.deep.equal(100);
    expect(time).to.be.lessThan(200);
  });
});
