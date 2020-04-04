const sum = require('./sum');

function* soch(list, count) {
  yield [0, 0, 0];
}

function chooseBestSum(t, k, ls) {
  const countOfTowns = ls.length;

  if (countOfTowns < k) return null;

  const genSoch = soch(ls, k);
  const distances = [...genSoch].map(sum);

  const filter = distances.filter(sum => sum <= t);

  return Math.max(...filter);
}

module.exports = chooseBestSum;
