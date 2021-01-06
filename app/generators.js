function* someGenerator() {
  for (let i = 1; i <= 2; i++) {
    yield i;
  }

  return 'We are done here.';
}

module.exports = {
  someGenerator
};
