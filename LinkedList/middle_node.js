/**
 * Slow and Fast Technique
 */
const { linkedList } = require("./helper_Functions");
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let list = linkedList.arrayToList(arr);

function middle_node(head) {
  let slow = head;
  let fast = head;
  if (fast.next == null) {
    return fast;
  }
  /**
   * Question : why we not write Fast.next.next* !=null in the while condition ?
   *  let suppose a example 1 2 3 4 5 : 
   * step - 1
   *  slow=1
   *  fast=1
   * step - 2
   *  slow=2
   *  fast=3
   * step-3 if we check here for Fast.next.next* then step 3 will not execute and middle node becomes 2
   * which is incorrect .
   *  slow=3
   *  fast=5
   */
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow.data;
}

console.log(middle_node(list));
