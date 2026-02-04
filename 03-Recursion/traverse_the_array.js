let arr = [1, 2, 3, 4, 5];
/**
 * Always rember length spell must be correct not lenght;
 * Remember base condition ;
 */
function traverse(arr, index) {
  if (index == arr.length) {
    return;
  }
  console.log(arr[index]);
  return traverse(arr, index + 1);
}

traverse(arr, 0);
