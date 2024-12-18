const { linkedList, createNode } = require("./helper_Functions");
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let list = linkedList.arrayToList(arr);
function reverse_list(head) {
  let prev = null;
  while (head != null) {
    let future = head.next;
    head.next = prev;
    prev = head;
    head = future;
  }
  return prev;
}

let data = reverse_list(list);
console.log(linkedList.getAllData(data));
