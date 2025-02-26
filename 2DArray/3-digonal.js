let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
/**
 * Left Digonal : 1 6  11 16;
 * Right Digonal: 4 7 10 13;
 */
let n = arr.length;
let m = arr[0].length - 1;
// left digonal --
for (let i = 0; i < n; i++) {
  console.log(arr[i][i]);
}
// right digonal --
for (let i = 0; i < n; i++) {
  let x = i;
  let y = m - i;
  console.log(arr[x][y]);
}
