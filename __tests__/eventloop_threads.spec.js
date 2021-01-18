'use strict';

const { exec } = require('child_process');
const { expect } = require('chai');
const path = require('path');

const execScript = (threads, callback) => {
  exec(
    `cd ${path.join(
      __dirname,
      '/../app'
    )} && UV_THREADPOOL_SIZE=${threads} node eventloop_threads.js`,
    (error, stdout, stderr) => {
      try {
        if (error) {
          return callback(null, error);
        }

        if (stderr) {
          return callback(null, stderr);
        }

        callback(JSON.parse(stdout));
      } catch (err) {
        return callback(null, err);
      }
    }
  );
};

describe('App | Event Loop & Threads', () => {
  it('Check execution order on 4 Threads | FS should be called between index 2 and 4', (done) => {
    execScript(4, (info, error) => {
      if (error) {
        return done(error);
      }

      const fsIndex = info.calls.findIndex(({ name }) => name === 'FS');
      const requestIndex = info.calls.findIndex(
        ({ name }) => name === 'REQUEST'
      );

      expect(info.UV_THREADPOOL_SIZE).to.be.deep.equal('4');
      expect(requestIndex).to.be.deep.equal(0);
      expect(fsIndex >= 2 && fsIndex <= 4).to.be.deep.equal(true);
      done();
    });
  });

  it('Check execution order on 10 Threads | FS should be called first', (done) => {
    execScript(10, (info, error) => {
      if (error) {
        return done(error);
      }

      const fsIndex = info.calls.findIndex(({ name }) => name === 'FS');
      const requestIndex = info.calls.findIndex(
        ({ name }) => name === 'REQUEST'
      );

      expect(info.UV_THREADPOOL_SIZE).to.be.deep.equal('10');
      expect(requestIndex).to.be.deep.equal(1);
      expect(fsIndex).to.be.deep.equal(0);
      done();
    });
  });
});
