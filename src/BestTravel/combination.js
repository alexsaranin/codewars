module.exports = function combination(n, k) {
  // const iterator = fillArray(k);
  const startCombination = fillArray(k);
  const res = [startCombination];
  // const res = [startCombination];
  // let nextComb = [...startCombination];

  // let START = k - 1;
  // nextComb = [...nextComb];

  // while (true) {
  //   iterator[k - 1]++;
  //   res.push([...iterator]);
  //
  //   if (iterator[0] === n - k && iterator[k - 1] === n - 1) break;
  // }

  iterate()

  return res;
};

function fillArray(n) {
  return Array(n).fill(0).map((_, index) => index);
}

function iterate() {

  // const res = [];
  // const smth = iterate();
  //
  // for (let i = START; i < n; i++) {
  //   res.push()
  // }

  const res = [];

  res.push(startArray);

  iterate(index)

  return res;
}
