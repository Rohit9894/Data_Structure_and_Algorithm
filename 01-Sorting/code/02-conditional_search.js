let custome_Order = {
  b: 1,
  a: 2,
  d: 3,
  e: 4,
  c: 5,
  n: 6,
  p: 7,
};

let arr = ["cat", "ball", "apple", "dog", "elephant", "ant"];

// Sort based on the first letter of each word using custom order
arr.sort((a, b) => custome_Order[a[0]] - custome_Order[b[0]]);

console.log(arr);
