'use strict';

const { expect } = require('chai');

const app = require('../app/immutability');
const deepFreeze = require('../utils/deepFreeze');

describe('App | Immutability', () => {
  it("Changing a parent's key should change the same key from the root for the shallow cloned object", () => {
    const clone = app.parent;
    expect(clone.a).to.be.deep.equal(1);

    app.parent.a = 2;
    expect(clone.a).to.be.deep.equal(2);
  });

  it("Changing a parent's key should not change the same key from the root for the shallow cloned object", () => {
    app.parent.a = 1;
    /**
     * By using spread operator will create a clone that does not mutate the object
     */
    const clone = { ...app.parent };
    expect(clone.a).to.be.deep.equal(1);

    app.parent.a = 3;
    expect(clone.a).to.be.deep.equal(1);
  });

  it("Changing a parent's key should change the same key from the root child for the shallow cloned object", () => {
    app.parent.deep = { a: 10 };

    const clone = { ...app.parent };
    expect(clone.deep.a).to.be.deep.equal(10);

    app.parent.deep.a = 20;
    expect(clone.deep.a).to.be.deep.equal(20);
  });

  it("Changing a parent's key should not change the same key from the root child for the deep cloned object", () => {
    app.parent.deep = { a: 10 };

    const deepClone = {
      a: app.parent.a,
      deep: {
        a: app.parent.deep.a
      }
    };

    expect(deepClone.deep.a).to.be.deep.equal(10);

    app.parent.deep.a = 20;
    expect(deepClone.deep.a).to.be.deep.equal(10);
  });

  it('Changing the object should fail', () => {
    try {
      const clone = Object.freeze({
        a: 1,
        b: 2,
        c: {
          d: 1
        }
      });

      clone.a = 2;

      throw new Error();
    } catch ({ message }) {
      expect(message).to.be.deep.equal(
        "Cannot assign to read only property 'a' of object '#<Object>'"
      );
    }
  });

  it("Changing the object's child should not fail", () => {
    const clone = Object.freeze({
      a: 1,
      b: 2,
      c: {
        d: 1
      }
    });

    expect(clone.c.d).to.be.deep.equal(1);
    clone.c.d = 2;
    expect(clone.c.d).to.be.deep.equal(2);
  });

  it("Changing the object's child should fail", () => {
    try {
      const clone = deepFreeze({
        a: 1,
        b: 2,
        c: {
          d: 1
        }
      });

      clone.c.d = 2;

      throw new Error();
    } catch ({ message }) {
      expect(message).to.be.deep.equal(
        "Cannot assign to read only property 'd' of object '#<Object>'"
      );
    }
  });
});
