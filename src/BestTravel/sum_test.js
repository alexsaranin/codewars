const assert = require('assert');
const sum = require('./sum.js');

describe('combination', function () {
  it('[1, 2, 3] == 6', function () {
    assert.deepEqual(sum([1, 2, 3]), 6);
  });

  it('[0, -1, 10] == 9', function () {
    assert.deepEqual(sum([0, -1, 10]), 9);
  });
});
