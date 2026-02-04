/**
 * You are given an array of integers and a target sum. Determine if there existsa subset of the array
 * whose elements add up to the target sum.
 */
let target=6;
function subSet(arr, new_str, index) {
  if (new_str.length !== 0) {
    let sum = new_str.reduce((a, i) => a + i, 0);
  if(sum==target){
    console.log("🎉🎉🎉 Wow! you solve the problem")
  }
  }
  if (index == arr.length) {
    return;
  }
  for (let i = index; i < arr.length; i++) {
    new_str.push(arr[i]);
    subSet(arr, new_str, i + 1);
    new_str.pop();
  }
}
let arr = [1, 2, 3];
let new_str = [];
subSet(arr, new_str, 0);
