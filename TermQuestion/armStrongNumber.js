// Explain : https://www.notion.so/Term-Question-19ede32f92fe80fcae7bc96cf18276b1?pvs=4
// An Armstrong number of order 𝑛
// n is a number in which the sum of its digits each raised to the power of 𝑛
// n (the number of digits) equals the number itself.

function isArmstrongNumber(n) {
  let len = n.toString().length;
  let original = n;
  let sum = 0;
  while (n > 0) {
    let a = n % 10;
    sum += Math.pow(a, len);
    n = Math.floor(n / 10);
  }

  return sum == original;
}

console.log(isArmstrongNumber(153)); // true
console.log(isArmstrongNumber(9474)); // true
console.log(isArmstrongNumber(123)); // false
