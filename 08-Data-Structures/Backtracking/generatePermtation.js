/**
 * Permutaions : It is a arrangemet ;
 * Total no arrangement : N factorial;
 * [1,2,3] = N = 3;
 * 6 no. of permutation create.
 */
let ans = [];
function generatePermutation(arr, index) {
  if (index == arr.length) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
      temp.push(arr[i]);
    }
    console.log(temp)
    ans.push(temp);
    return;
  }
  for (let i = index; i < arr.length; i++) {
    swap(arr, i, index);
    generatePermutation(arr, index + 1);
    swap(arr, i, index);
  }
}
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
generatePermutation([1, 2, 3], 0);
console.log(ans.sort().length);
