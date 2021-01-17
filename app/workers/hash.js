'use strict';

process.env.UV_THREADPOOL_SIZE = 1;
const crypto = require('crypto');
const start = Date.now();

const list = [];
const checkDone = (hash) => {
  list.push({
    ms: Date.now() - start,
    hash
  });

  if (list.length === 2) {
    console.log(JSON.stringify(list));
  }
};

crypto.pbkdf2(
  process.env.PASSWORD,
  '%hNYF]haK6?]4(f#',
  100000,
  512,
  'sha512',
  (_, hash) => {
    checkDone(hash.toString('hex'));
  }
);
crypto.pbkdf2(
  process.env.PASSWORD,
  '%hNYF]haK6?]4(f#%hNYF]haK6?]4(f#',
  100000,
  512,
  'sha512',
  (_, hash) => {
    checkDone(hash.toString('hex'));
  }
);
