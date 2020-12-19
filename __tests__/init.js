'use strict';

const fromEntriesPolyfill = require('../polyfill/fromEntries');
const define = require('define-properties');

if (!Object.fromEntries) {
  define(Object, {
    fromEntries: fromEntriesPolyfill
  }, {
    fromEntries: function () {
      return Object.fromEntries !== fromEntriesPolyfill;
    }
  });
}
