let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];
// output : 5 1 5 1 6 3 8 4 8 4 --
let n = matrix.length;
let m = matrix[0].length;
let ans = "";
for (let i = m - 1; i >= 0; i--) {
  ans += matrix[i][0] + " ";
}
for (let i = 1; i < n; i++) {
  ans += matrix[i][i] + " ";
}
for (let j = m - 2; j >= 0; j--) {
  ans += matrix[j][m - 1] + " ";
}
console.log(ans);
