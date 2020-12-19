'use strict';

const privateSymbol = Symbol('private');

const object = {
  [privateSymbol]: 'Private value',
  publicKey1: 'public value',
  publicKey2: 'public value'
};

const lib1Prop = Symbol('meta');
const lib2Prop = Symbol('meta');
const libObj = {
  meta: 1,
  [lib1Prop]: 2,
  [lib2Prop]: 3
};

module.exports = {
  privateSymbol,
  lib1Prop,
  lib2Prop,
  libObj,
  object
};
