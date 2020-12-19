'use strict';

const { expect } = require('chai');

const app = require('../app/this_arrow_function');

describe('App | `this` with Arrow Functions', () => {
  it('Function `globalScopeArrow` should have `globalOne` variable defined', () => {
    const { globalOne } = app.globalScopeArrow();

    expect(globalOne).to.be.deep.equal('Global Scope');
  });

  it('Function `globalObject.globalMethod` should return the same value as `globalScopeArrow`', () => {
    const scope1 = app.globalScopeArrow();
    const scope2 = app.globalObject.globalMethod();

    expect(scope1).to.be.deep.equal(scope2);
  });

  it('Function `globalObject.objectMethod` should return a diff value from `globalObject.globalMethod`', () => {
    const scope1 = app.globalObject.globalMethod();
    const scope2 = app.globalObject.objectMethod();

    expect(scope1).to.not.be.deep.equal(scope2);
  });

  it('Function `globalObject.objectMethod` should return `globalObject`', () => {
    const scope = app.globalObject.objectMethod();

    expect(scope).to.be.deep.equal(app.globalObject);
  });
});
