'use strict';

const { exec } = require('child_process');
const path = require('path');

const file = path.join('app', 'transpiling', 'input.js');
const outFile = path.join('app', 'transpiling', 'input.transpiled.js');

const transpile = async () => {
  await new Promise((resolve, reject) => {
    exec(
      `./node_modules/.bin/babel "${file}" -o "${outFile}"`,
      (error, stdout, stderr) => {
        try {
          if (error) {
            return reject(error);
          }

          if (stderr) {
            return reject(stderr);
          }

          resolve();
        } catch (err) {
          return reject(err);
        }
      }
    );
  });
};

const runTranspiledScript = () =>
  new Promise((resolve, reject) =>
    exec(`node ${outFile}`, (error, stdout, stderr) => {
      try {
        if (error) {
          return reject(error);
        }

        if (stderr) {
          return reject(stderr);
        }

        resolve(JSON.parse(stdout));
      } catch (err) {
        return reject(err);
      }
    })
  );

module.exports = {
  runTranspiledScript,
  transpile
};
