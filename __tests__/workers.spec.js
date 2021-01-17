'use strict';

const { expect, wa } = require('chai');

const app = require('../app/workers');

describe('App | Workers', () => {
  it('Create 2 hashes using different Workers', (done) => {
    const start = Date.now();
    let ms1 = Infinity;
    let ms2 = Infinity;

    app.createHashWorker('test', () => {
      ms1 = Date.now() - start;
    });
    app.createHashWorker('test', () => {
      ms2 = Date.now() - start;
    });

    setTimeout(() => {
      expect(ms1).to.be.lessThan(900);
      expect(ms2).to.be.lessThan(900);
      done();
    }, 900);
  });

  it('Create 2 hashes using the event loop', (done) => {
    app.create2Hashes('test', (hashes) => {
      expect(hashes[0].ms).to.be.lessThan(900);
      expect(hashes[1].ms).to.be.greaterThan(hashes[0].ms * 1.5);
      expect(hashes[1].ms).to.be.lessThan(3000);
      done();
    });
  });
});
