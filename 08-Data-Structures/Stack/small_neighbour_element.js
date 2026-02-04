/**
 * We have array of size n and contain n number of element we have to find if smaller element is exist
 * in left side then we that element inside the array otherwise add -1 ;
 * i  --- element index;
 * j  --- smaller element index;
 * j < i ;
 * arr[j] < arr[i];
 */
//input                                                                   // output
// 39 27 11 4 24 32 32 1                                                  // -1 -1 -1 -1 4 24 24 -1
/**
 * Important points
 * *check stack's peek element is greater than to current element then pop the stack because when no
 * element is present less then current element in stack so we put -1 in the answer array;
 */
let arr = [39, 27, 11, 4, 24, 32, 32, 1];
let ans = [];
let stack = [];


function smallerElement() {
  for (let i = 0; i < arr.length; i++) {
    while (stack.length != 0 && arr[i] < stack[stack.length - 1]) {
      stack.pop();
    }
    if (stack.length == 0) {
      ans.push(-1);
    } else {
      ans.push(stack[stack.length - 1]);
    }
    stack.push(arr[i])
  }
  console.log(ans);
}
smallerElement();
