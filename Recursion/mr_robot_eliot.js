/**
Mr.Robot needs an encryption method, so Elliott was there to help him. At the same time, 
Richard wrote a paper on encryption. Elliott then start of paper from Richard but he needs
your help in implementing. The algorithm is like this:

Given an input string, the encrypted string will start with the middle character of the 
string and will be formed henceforth with the middle charactethe middle character of the word)
 and so on. Take a look at the explanation of the sample test case for better understanding.
*/

// input            output
// abcd             bacd

function robot_eliot(str, low, high) {
  if (low > high) {
    return "";
  }
  let mid = Math.floor((low + high) / 2);
  // Recursively get the left and right substrings and combine them with the mid character
  return (
    str[mid] +
    robot_eliot(str, low, mid - 1) +
    robot_eliot(str, mid + 1, high)
  );
}

let str = "abcd";
let low = 0;
let high = str.length - 1;
console.log(robot_eliot(str, low, high));