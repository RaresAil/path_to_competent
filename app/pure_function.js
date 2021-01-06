'use strict';

const isHigher = (a, b) => a > b;

let c = 0;

const sum = (a) => a + c;
const updateC = () => {
  c = Math.floor(Math.random() * 100) + 1;
};

module.exports = {
  isHigher,
  updateC,
  sum
};
