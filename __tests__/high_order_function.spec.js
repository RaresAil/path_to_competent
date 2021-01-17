'use strict';

const app = require('../app/high_order_function');
const { input: collection, expected } = require('../mocks/store');
const { expect } = require('chai');

describe('App | High Order Functions', () => {
  it('Use the filter function to get only the fruits', () => {
    const fruits = app.getFruits(collection);
    expect(fruits).to.be.deep.equal(expected.fruits);
  });

  it('Use the filter function to get only the vegetables', () => {
    const vegetables = app.getVegetables(collection);
    expect(vegetables).to.be.deep.equal(expected.vegetables);
  });

  it('Use the sort function to get the most expensive fruit', () => {
    const fruits = app.getFruits(collection);
    const mostExpensive = app.getMostExpensive(fruits);

    expect(mostExpensive.pricePerUnit).to.be.deep.equal(14.99);
  });

  it('Use the sort function to get the most expensive vegetable', () => {
    const vegetables = app.getVegetables(collection);
    const mostExpensive = app.getMostExpensive(vegetables);

    expect(mostExpensive.pricePerUnit).to.be.deep.equal(3.99);
  });
});
