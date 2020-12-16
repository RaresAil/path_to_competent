const { expect } = require('chai');

const app = require('../app/immutability');

describe('App | Immutability', () => {
  it("Changing a parent's key should change the same key for the clone object", () => {
    const clone = app.parent;
    expect(clone.a).to.be.deep.equal(1);

    app.parent.a = 2;
    expect(clone.a).to.be.deep.equal(2);
  });

  it("Changing a parent's key should not change the same key for the clone object", () => {
    app.parent.a = 1;
    /**
     * By using spread operator will create a clone that does not mutate the object
     */
    const clone = { ...app.parent };
    expect(clone.a).to.be.deep.equal(1);

    app.parent.a = 3;
    expect(clone.a).to.be.deep.equal(1);
  });
});
