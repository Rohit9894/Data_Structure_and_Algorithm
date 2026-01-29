function maxOnes(arr, k) {
  let res = 0;

  // Exploring all subarrays
  for (let i = 0; i < arr.length; i++) {
    // Counter for zeroes
    let cnt = 0;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] === 0) cnt++;
      if (cnt <= k) res = Math.max(res, j - i + 1);
    }
  }

  return res;
}

const arr = [1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1];
const k = 2;
console.log(maxOnes(arr, k));
