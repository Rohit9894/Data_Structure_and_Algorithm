const { linkedList, createNode } = require("./0-helper_Functions");
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let list = linkedList.arrayToList(arr);
let count = 0;

let curr = list;
while (curr.next) {
  curr = curr.next;
  count++;
}
console.log(count);
