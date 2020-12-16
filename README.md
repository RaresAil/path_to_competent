# Path to Competent

![CI/CD Testing](https://github.com/RaresAil/path_to_competent/workflows/CI/CD%20Testing/badge.svg)

## Why CI/CD Testing?
The reason for CI/CD testing is to run the tests on node versions 10, 12 and 14 to check if all the tests are compatible and with older version of node.

The function `Object.fromEntries` was not in node v10 so i had to Polyfill that function, the polyfilled function can be found [Here](polyfill/fromEntries.js)
