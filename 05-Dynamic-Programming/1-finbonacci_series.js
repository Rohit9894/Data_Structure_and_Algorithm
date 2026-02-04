/**
 * Series  is 0 1 1 2 3;
 */

function fib(n) {
  let arr = [];
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

let ans = fib(4);
console.log(ans);
