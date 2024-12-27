let count = 0;
function findLength(str, index) {
  if (str[index]) {
    count++;
  } else {
    return count;
  }
  return findLength(str, index + 1);
}

let str = "RohitGupta";
console.log(findLength(str, 0));
