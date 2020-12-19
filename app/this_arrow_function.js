'use strict';
const toExport = {};
/**
 * Arrow functions do not bind their own this, instead,
 * they inherit the one from the parent scope, which is
 * called "lexical scoping"
 */

this.globalOne = 'Global Scope';

toExport.globalScopeArrow = () => this;

toExport.globalObject = {
  globalMethod: () => this,
  objectMethod: function () {
    return this;
  },
  bindGlobalMethod: function () {
    return toExport.globalScopeArrow.bind(toExport.globalObject)();
  }
};

module.exports = toExport;
