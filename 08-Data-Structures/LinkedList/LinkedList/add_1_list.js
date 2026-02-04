/**
 * Add 1 to linked List .
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.data = val;
    this.next = next;
  }
}

const { linkedList } = require("./helper_Functions");
let arr = [9, 9, 9];
let list = linkedList.arrayToList(arr);
function reverse_list(head) {
  let prev = null;
  let future = null;
  let rHead = head;
  while (rHead != null) {
    future = rHead.next;
    rHead.next = prev;
    prev = rHead;
    rHead = future;
  }
  return prev;
}
function add_1(head) {
  let carry = 1;
  let reverseHead = reverse_list(head);
  let curr = reverseHead;
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
  return reverse_list(reverseHead);
}
let ans = add_1(list);
console.log(linkedList.getAllData(ans));
