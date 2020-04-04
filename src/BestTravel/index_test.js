const assert = require('assert');
const chooseBestSum = require('./index.js');

describe("chooseBestSum", function () {
  it("Basic tests ", function () {
    assert(chooseBestSum(163, 3, [50, 55, 56, 57, 58]), '163');
    assert(chooseBestSum(163, 3, [50]), 'null');
    assert(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]), '228');
  })
});
