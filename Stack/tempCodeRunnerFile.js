let stack = [];
function reduce_string(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
  if (stack.length == 0) {
    return "Stack is empty";
  } else {
    return stack;
  }
}
let str = "aaabbccdd";
console.log(reduce_string(str));
