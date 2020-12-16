const sum = (a, b, c) => {
  return a + b + c;
};

const curryingSum = (a) => (b) => (c) => sum(a, b, c);

const currying = (fn, ...args) => (..._args) => fn(...args, ..._args);

module.exports = {
  curryingSum,
  currying,
  sum
};
