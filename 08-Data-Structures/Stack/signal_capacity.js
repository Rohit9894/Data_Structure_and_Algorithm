// There are many signal towers present in Bangalore.Towers are aligned in a straight horizontal
// line(from left to right) and each tower transmits a Tower X shall block the signal of Tower Y if
// Tower X is present to the left of Tower Y and Tower X is taller than Tower Y.
// So,the power of a signal {(the number of contiguous towers just to the left of the given tower
// height is less than or equal to the height of the given tower) + 1}.
// You need to write a program that finds the power of each tower.

let ans = [];
let stack = [];
let arr = [100, 80, 60, 70, 60, 75, 85];
function signalCapacity() {
  for (let i = 0; i < arr.length; i++) {
    while (stack.length != 0 && arr[i] >= arr[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length == 0) {
      ans.push(i + 1);  // Because How many index ahead is current element . 
    } else {
      ans.push(i - stack[stack.length - 1]);
    }
    stack.push(i);
  }
  console.log(ans.join(" "));
}
signalCapacity();

/**
 * Results :
 * curr element should be greater than to stack peek element then only signal intensity will incresse 
 */