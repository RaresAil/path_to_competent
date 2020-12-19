'use strict';

const AddEntriesFromIterable = require('es-abstract/2020/AddEntriesFromIterable');
const CreateDataPropertyOrThrow = require('es-abstract/2020/CreateDataPropertyOrThrow');
const RequireObjectCoercible = require('es-abstract/2020/RequireObjectCoercible');
const ToPropertyKey = require('es-abstract/2020/ToPropertyKey');

const adder = function addDataProperty(key, value) {
  const O = this;
  const propertyKey = ToPropertyKey(key);
  CreateDataPropertyOrThrow(O, propertyKey, value);
};

module.exports = function fromEntries(iterable) {
  RequireObjectCoercible(iterable);
  return AddEntriesFromIterable({}, iterable, adder);
};
