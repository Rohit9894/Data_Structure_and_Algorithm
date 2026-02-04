/**
 * 🧗‍♂️ Climbing Stairs — Problem Statement
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 step or 2 steps.

In how many distinct ways can you climb to the top?

🧠 Example 1:
Input: n = 2
Output: 2
Explanation:

1 step + 1 step

2 steps

🧠 Example 2:
Input: n = 3
Output: 3
Explanation:

1 + 1 + 1

1 + 2

2 + 1
*/


function climbStairs(n) {
  if (n <= 1) return 1;  // Base case
  
  let dp = new Array(n + 1);
  dp[0] = 1;  // 1 way to be at ground (step 0)
  dp[1] = 1;  // 1 way to reach step 1
  
  // Build solution iteratively
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];  // Ways to reach step i
  }
  
  return dp[n];
}

// Example Usage:
console.log(climbStairs(3)); // Output: 3
console.log(climbStairs(4)); // Output: 5

