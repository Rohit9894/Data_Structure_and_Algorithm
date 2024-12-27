let arr = [1, 2, 3, 4, 5];

function evenArray(arr, index) {
  if (index == arr.length) {
    return;
  }
  if (arr[index] % 2 == 0) {
    console.log(arr[index]);
  }
  return evenArray(arr, index + 1);
}

evenArray(arr, 0);
