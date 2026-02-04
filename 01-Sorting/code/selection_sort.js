let arr = [1, 2, 3, 2, 3, 2, 1];
for (let i = 0; i < arr.length; i++) {
    let min = i;
  for (let j = i+1; j < arr.length; j++) {
    if (arr[min] > arr[j]) {
      min = j;
    }
  }
  swap(arr, min, i);
}
console.log(arr);
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

/**
 * 
 */