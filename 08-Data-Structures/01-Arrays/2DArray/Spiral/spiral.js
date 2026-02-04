let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

let top = 0;
let left = 0;
let bottom = arr.length - 1;
let right = arr[0].length - 1;
let count = 0;
let ans = "";
let total = arr.length * arr[0].length;

while (count < total) {
  for (let i = top; i <= bottom && count < total; i++) {
    ans += arr[i][left] + " ";
    count++;
  }
  left++;
  for (let i = left; i <= right && count < total; i++) {
    ans += arr[bottom][i] + " ";
    count++;
  }
  bottom--;
  for (let i = bottom; i >= top && count < total; i--) {
    ans += arr[i][right] + " ";
    count++;
  }
  right--;
  for (let i = right; i >= left && count < total; i--) {
    ans += arr[top][i] + " ";
    count++;
  }
  top++;
}

console.log(ans);
