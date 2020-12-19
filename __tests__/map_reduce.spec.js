'use strict';

const { expect } = require('chai');

const storeData = require('../mocks/store');
const app = require('../app/map_reduce');

describe('App | Map', () => {
  it('Should convert object to map', async () => {
    const input = {
      a: 1,
      b: 2,
      c: 3
    };

    const expected = new Map();
    expected.set('a', 1);
    expected.set('b', 2);
    expected.set('c', 3);

    const result = app.objectToMap(input);

    expect(input instanceof Map).to.be.deep.equal(false);
    expect(result instanceof Map).to.be.deep.equal(true);
    expect(expected).to.be.deep.equal(result);
  });

  it('Should convert map to object', async () => {
    const input = new Map();
    input.set('a', 1);
    input.set('b', 2);
    input.set('c', 3);

    const result = app.mapToObject(input);

    const expected = {
      a: 1,
      b: 2,
      c: 3
    };

    expect(input instanceof Map).to.be.deep.equal(true);
    expect(result instanceof Map).to.be.deep.equal(false);
    expect(expected).to.be.deep.equal(result);
  });

  it('Should group the store object to a map by type', async () => {
    const input = app.groupByType(storeData.input);
    const expected = app.objectToMap(storeData.expected);

    expect(input).to.be.deep.equal(expected);
  });
});
