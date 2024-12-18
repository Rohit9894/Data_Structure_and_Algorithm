const { linkedList } = require("./helper_Functions");
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let list = linkedList.arrayToList(arr);
function delete_node(head, position) {
  let curr = head;
  let count = 1;

  while (count < position) {
    count++;
    curr = curr.next;
  }
 curr.next = curr.next.next;
  return head;
}
const data = delete_node(list, 2);
console.log(linkedList.getAllData(data));
