let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
// Add all the which are not lie on the border .
let n = arr.length;
let m = arr[0].length;
let sum = 0;
for (let i = 1; i < n - 1; i++) {
  for (let j = 1; j < m - 1; j++) {
    sum += arr[i][j];
  }
}
console.log(sum);
