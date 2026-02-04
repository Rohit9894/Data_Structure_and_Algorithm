/**
You are given a 2D array, whose dimensions are stored in two variables with the name N and M
The value stored in N denotes the number of rows, and the value in M denotes the number of columns
The 2D array is stored in a variable with the name arr
For all columns, you have to print the sum of even elements present in the column
For example, consider the value stored in N = 3 , M = 3 , and the array is arr = [1,2,3],[4,5,6],[7,8,9] , then the required output will be


4 (Even numbers in the column are, [4]. Therefore, the sum becomes 4)
10 (Even numbers in the row are, [2,8]. Therefore, the sum becomes 10)
6 (Even numbers in the row are, [6]. Therefore, the sum becomes 6)
 */

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function even_sum(index, arr, N, M) {
  if (index == M) {
    return;
  }
  let sum = 0;
  for (let i = 0; i < N; i++) {
    let num = arr[i][index];
    if (num % 2 == 0) {
      sum += num;
    }
  }
  console.log(sum);
  return even_sum(index + 1, arr, N, M);
}
let N = arr.length;
let M = arr[0].length;
even_sum(0, arr, N, M);
