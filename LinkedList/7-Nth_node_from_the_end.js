/**
 * Given a linked list consistion of nodes given a number N. The task is find the nth node from the end
 * of the linked List .
 */
const { linkedList } = require("./0-helper_Functions");
let arr = [1, 2, 3];
let list = linkedList.arrayToList(arr);
function Nth_node_from_End(head, position) {
  let pos = head;
  let curr = head;
  let count = 1;

  /**
   * Always Remember if Question want zero indexing the count strats from 0 else for 1 indexing count
   * starts from 0.
   * 
   * Remember one codition when you gave position = 1 : output : 3 
   * so you will relate the things .
   */
  while (count < position) {
    count++;
    pos = pos.next;
  }
 

  while (pos !== null && pos.next != null) {
    pos = pos.next;
    curr = curr.next;
  }
  return curr.data;
}
console.log(Nth_node_from_End(list, 1));
