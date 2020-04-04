const assert = require('assert');
const combination = require('./combination.js');

const comb_5_3 = [
  [0, 1, 2], // 11100
  [0, 1, 3],
  [0, 1, 4],
  [0, 2, 3],
  [0, 2, 4],
  [1, 3, 4],
  [1, 2, 3],
  [1, 2, 4],
  [2, 3, 4],
];

const comb_6_3 = [
  [0, 1, 2], // 111000 3
  [0, 1, 3], // 110100 1
  [0, 1, 4], // 110010 1
  [0, 1, 5], // 110001 1
  [0, 2, 3], // 101100 2
  [0, 2, 4], // 101010 1
  [0, 2, 5], // 101001 1
  [0, 3, 4], // 100110 2
  [0, 3, 5], // 100101 1
  [0, 4, 5], // 100011 2
  [1, 2, 3], // 011100 3
  [1, 2, 4], // 011010 1
  [1, 2, 5], // 011001 1
  [1, 3, 4], // 010110 2
  [1, 3, 5], // 010101 1
  [1, 4, 5], // 010011 2
  [2, 3, 4], // 001110 3
  [2, 3, 5], // 001101 1
  [2, 4, 5], // 001011 2
  [3, 4, 5], // 000111 3
];

// 1000
// 0100
// 0010
// 0001

// 11000 2
// 10100 1
// 10010 1
// 10001 1
// 01100 2
// 01010 1
// 01001 1
// 00110 2
// 00101 1
// 00011 2

describe('combination', function () {
  it('Сочетание из 5 по 3', function () {
    assert.deepEqual(combination(5, 3), comb_5_3);
  });

  it('Сочетание из 6 по 3', function () {
    assert.deepEqual(combination(6, 3), comb_6_3);
  });
});