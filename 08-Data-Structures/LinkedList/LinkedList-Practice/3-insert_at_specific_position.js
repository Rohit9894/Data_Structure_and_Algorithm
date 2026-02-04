const { linkedList, createNode } = require("./0-helper_Functions");
let arr = [1, 2, 3]; // according to indexing
let list = linkedList.arrayToList(arr);

function insertAtPosition(head, position, data) { 
  // position 1
  let node = createNode(data) // 10 -> 2 → 3 → None
  let prev = null; // 1 → 10 -> 2 → 3 → None
  let curr = head; // 2 → 3 → None
  let count = 0;  // 1
  while (count < position) {
    prev = curr;
    curr = curr.next;
    count++;
  }
 node.next = prev.next;
  prev.next = node;
  return head;
}
const data = insertAtPosition(list, 1, 10);
console.log(linkedList.getAllData(data));
