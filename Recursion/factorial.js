let n = 5;
function factorial(a) {
  if (a == 0 || a == 1) {
    return 1;
  }
  return a * factorial(a - 1);
}
console.log(factorial(n));

/**
 * Important Points
 * Base condition for 0 and 1 return 1;
 * Use Same variable in whole function ;
 */
