/**
 * Add 1 to linked List .
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.data = val;
    this.next = next;
  }
}

const { linkedList } = require("./0-helper_Functions");
let arr = [9, 9, 9];
let list = linkedList.arrayToList(arr);
function reverse_list(head) {
  let prev = null;
  while (head !== null) {
    let future = head.next;
    head.next = prev;
    prev = head;
    head = future;
  }
  return prev;
}
function add_1(head) {
  let carry = 1;
  let rhead = reverse_list(head);
  let curr = rhead;

  while (curr) {
    let sum = curr.data + carry;
    curr.data = sum % 10;
    carry = Math.floor(sum / 10);
    if (!curr.next && carry) {
      curr.next = new ListNode(carry);
      carry = 0;
    }
    curr = curr.next;
  }
  return reverse_list(rhead);
}
let ans = add_1(list);
console.log(linkedList.getAllData(ans));
