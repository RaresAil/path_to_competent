const { expect } = require('chai');

const app = require('../app/symbol');

describe('App | symbol.js', () => {
  it("Symbols can't be equal", () => {
    expect(Symbol('')).to.not.be.deep.equal(Symbol(''));
  });

  it('Symbols are not visible with Object.keys', () => {
    expect(Object.keys(app.object)).to.be.deep.equal([
      'publicKey1',
      'publicKey2'
    ]);

    expect(app.object[app.privateSymbol]).to.be.deep.equal('Private value');
  });

  it('Symbols are not visible with Reflect.own', () => {
    expect(Reflect.ownKeys(app.object)).to.be.deep.equal([
      'publicKey1',
      'publicKey2',
      app.privateSymbol
    ]);
  });

  it('Use Symbols to prevent Name Collisions', () => {
    // Symbols can be used to add properties to some objects
    // without the risk of having name collisions.

    expect(app.libObj.meta).to.be.deep.equal(1);
    expect(app.libObj[app.lib1Prop]).to.be.deep.equal(2);
    expect(app.libObj[app.lib2Prop]).to.be.deep.equal(3);
  });
});
