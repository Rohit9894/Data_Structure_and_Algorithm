/**
 * Is the string is balanced
 */
function reverse(inp) {
  if (inp == ")") {
    return "(";
  } else if ((inp = "]")) {
    return "[";
  } else {
    return "{";
  }
}
let stack = [];
let flag = 0;
function is_balanced(str) {
  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    if (curr == "(" || curr == "[" || curr == "{") {
      stack.push(str[i]); // this is the important line.
    } else {
      let x = reverse(str[i]);
      if (stack[stack.length - 1] == x) {
        stack.pop();
      } else {
        flag = 1;
        break;
      }
    }
  }
  if (stack.length === 0 && flag == 0) {
    console.log("balanced");
  } else {
    console.log("unbalanced");
  }
}
is_balanced("[({)]");
