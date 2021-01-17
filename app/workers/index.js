'use strict';

const { Worker } = require('worker_threads');
const { exec } = require('child_process');
const path = require('path');

const createHashWorker = (password, callback) => {
  const worker = new Worker(
    `
    process.env.UV_THREADPOOL_SIZE = 1;
    const { parentPort } = require('worker_threads');
    const crypto = require('crypto');
    parentPort.once('message', (password) => {
      crypto.pbkdf2(password, '%hNYF]haK6?]4(f#', 100000, 512, 'sha512', (_, hash) => {
        parentPort.postMessage(hash.toString('hex'))
      });
    })
  `,
    {
      eval: true
    }
  );

  worker.postMessage(password);

  worker.once('message', (hash) => {
    worker.terminate();
    callback(hash);
  });
};
const create2Hashes = (password, callback) => {
  exec(
    `cd ${path.join(__dirname)} && PASSWORD=${password} node hash.js`,
    (error, stdout, stderr) => {
      try {
        if (error) {
          return callback(null, error);
        }

        if (stderr) {
          return callback(null, stderr);
        }

        callback(JSON.parse(stdout));
      } catch (error) {
        return callback(null, error);
      }
    }
  );
};

module.exports = {
  create2Hashes,
  createHashWorker
};
