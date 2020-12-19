'use strict';

const chars = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

const randomLetter = () => chars[Math.floor(Math.random() * 26)];

module.exports = (region) => {
  const code = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, '0');

  return `${region}${code}${randomLetter()}${randomLetter()}${randomLetter()}`;
};
