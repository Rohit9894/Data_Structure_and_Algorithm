const { linkedList } = require("./0-helper_Functions");
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// output: 1 2 4 5 6 7 8
let list = linkedList.arrayToList(arr);
function delete_node(head, position) {
  let curr = head;
  let count = 1;
  while (count < position) {
    curr = curr.next;
    count++;
  }
  curr.next = curr.next.next;
  return head;
}
const data = delete_node(list, 2);
console.log(linkedList.getAllData(data));
