let arr = [1, 2, 5, 3, 5, 4];

for (let i = 0; i < arr.length; i++) {
  let swap = false;
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      swap(arr, j, j + 1);
      swap = true;
    }
  }
  if (swap) {
    break;
  }
}
console.log(arr);

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
/**
 * Time Complexity :
 * Best Case : O(n);  It is important to set swap flag  otherwise it will always take O(n)^2;
 *
 *
 *
 * Space Complexity :
 *
 * Point To Remember :
 */
