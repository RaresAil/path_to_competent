'use strict';

const crypto = require('crypto');
let lastCreatedID = '';

/**
 * Unused        48 Bits           10 Bits         12 Bits
 * -------------------------------------------------------------
 * |     |                     |              |                |
 * |  0  |  000000....0000000  |  0000000000  |  000000000000  |
 * |     |                     |              |                |
 * -------------------------------------------------------------
 */
const createUID = (workerId, sequenceId) =>
  crypto
    .createHash('md5')
    .update(
      parseInt(
        `0${Date.now().toString(2).padStart(48, '0')}${(workerId || 0)
          .toString(2)
          .padStart(10, '0')}${(sequenceId || 0)
          .toString(2)
          .padStart(12, '0')}`,
        2
      ).toString()
    )
    .digest('hex');

const generateUID = (workerId, sequenceId) => {
  if (workerId < 0 || workerId > 1023) {
    throw new Error('The worker id must be between 0 and 1023');
  }

  if (sequenceId < 0 || sequenceId > 4095) {
    throw new Error('The sequence id must be between 0 and 4095');
  }

  let uid = '';
  do {
    uid = createUID(workerId, sequenceId);
  } while (lastCreatedID === uid);
  lastCreatedID = uid;
  return uid;
};

module.exports = generateUID;
