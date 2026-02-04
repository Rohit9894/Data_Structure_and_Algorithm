/**
 * You have given a array . find the sum of absolute difference .
 * 1 2 3
 * 1-2=1
 * 2-3=1
 * sum=2;
 */

function sumAgain(arr, N) {
  if (N <= 2) {
    return Math.abs(arr[0] - arr[1]);
  }
  return Math.abs(arr[N - 1] - arr[N - 2]) + sumAgain(arr,N-1);
}

let arr = [1, 2, 3];
let n = arr.length;
console.log(sumAgain(arr, n));
