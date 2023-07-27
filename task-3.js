const mostFrequent = arr =>
  Object.entries(
    arr.reduce((a, v) => {
      a[v] = a[v] ? a[v] + 1 : 1;
      return a;
    }, {})
  ).reduce((a, v) => (v[1] >= a[1] ? v : a), [null, 0])[0];

const inputArr = mostFrequent([3, 2, 5, 3, 3, 1, 4, 5]);
console.log(inputArr)