let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let ans = "";
for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 0) {
    for (let j = 0; j < arr.length; j++) {
      ans += arr[i][j] + " ";
    }
  } else {
    for (let j = arr.length - 1; j >= 0; j--) {
      ans += arr[i][j] + " ";
    }
  }
}
console.log(ans);
