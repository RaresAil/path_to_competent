'use strict';

const { EventEmitter } = require('events');
const crypto = require('crypto');
const https = require('https');
const fs = require('fs');

const run = (callback) => {
  const start = Date.now();
  const eventCallBack = new EventEmitter();
  let calls = [];

  let eventCalled = 0;
  eventCallBack.on('exec', (time, name) => {
    eventCalled++;
    calls = [
      ...calls,
      {
        name,
        ms: time - start
      }
    ];

    if (eventCalled === 6) {
      callback(calls);
    }
  });

  const req = () => {
    https
      .request('https://www.google.com', (res) => {
        res.on('data', () => {});
        res.on('end', () => {
          eventCallBack.emit('exec', Date.now(), 'REQUEST');
        });
      })
      .end();
  };

  const createHash = (id) => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
      eventCallBack.emit('exec', Date.now(), `HASH-${id}`);
    });
  };

  const readFile = () => {
    fs.readFile(__filename, 'utf8', () => {
      eventCallBack.emit('exec', Date.now(), 'FS');
    });
  };

  req();

  readFile();

  createHash(1);
  createHash(2);
  createHash(3);
  createHash(4);
};

(async () => {
  await new Promise((resolve) => {
    run((calls) => {
      console.log(
        JSON.stringify({
          UV_THREADPOOL_SIZE: process.env.UV_THREADPOOL_SIZE,
          calls
        })
      );
      resolve();
    });
  });
})();
