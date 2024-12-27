/**
 * In mathematics, the Fibonacci numbers, commonly denoted F(n) form a 
 * sequence, called the Fibonacci sequence, such that each number is the
   from 0 and 1. That is
   F (0) = 0 , F (1) = 1
   and
   F (n) = F (n − 1) + F (n − 2) ,
   for n > 1.
   Your task is to write a program that calculates n-th fibonacci
   numbers when you are provided with n
 */

function fibonacci(n) {
  if (n == 0 || n == 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
let ans = fibonacci(4);
console.log(ans);
