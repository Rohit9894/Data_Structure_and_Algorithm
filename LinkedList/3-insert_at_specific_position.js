const { linkedList, createNode } = require("./0-helper_Functions");
let arr = [1, 2, 3, 4, 5, 6, 7, 8]; // according to indexing
let list = linkedList.arrayToList(arr);

function insertAtPosition(head, position, data) {
  let node = createNode(data);
  let prev = null;
  let curr = head;
  let count = 0;
  while (count < position) {
    prev = curr;
    curr = curr.next;
    count++;
  }
 node.next = prev.next;
  prev.next = node;
  return head;
}
const data = insertAtPosition(list, 4, 10);
console.log(linkedList.getAllData(data));
