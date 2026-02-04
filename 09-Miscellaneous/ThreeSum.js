/**
 * You're given an array nums and an integer target. You need to find three numbers in nums whose sum is
 * closest to target, and return that sum.
 */

// Inputs
n = 6;
nums = [-1, 2, 1, -4, 5, -3];
target = 1;
let ans = threeClosestSum(nums, target);
console.log(ans);
function threeClosestSum(nums, target) {
  nums.sort((a, b) => a - b);
  let closestSum = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];

      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }

      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
}
