/**
Sandhya is running up a staircase with N steps, and can hop(jump) either 1 step, 2 steps or 3 steps 
at a time. You have to count, how many way sandhy can run up stairs.
*/

function ways(n) {
  if (n == 0) {
    return 1;
  }
  if (n < 0) {
    return 0;
  }
  return ways(n - 1) + ways(n - 2) + ways(n - 3);
}
console.time("ways")
let ans=ways(4);
console.timeEnd("ways")
console.log(ans)

/**
 * Results :
 * Always remember the base condition .
 * Never the large input value to the recursion function .
 */