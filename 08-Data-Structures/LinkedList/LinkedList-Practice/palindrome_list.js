const { linkedList, createNode } = require("./helper_Functions");
let arr = [1, 2, 3, 4, 3, 2, 1];
let list = linkedList.arrayToList(arr);

function is_palindrom(head) {
  /**
   * Step -1
   * find the middle Node .
   */
  let p1 = head;
  let fast = head;
  let slow = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  /**
   * Step -2
   * Reverse the second half of the Linked List .
   */
  let prev = null;
  let future = null;
  let curr = slow;
  while (curr != null) {
    future = curr.next;
    curr.next = prev;
    prev = curr;
    curr = future;
  }
  let p2 = prev;
  /**
   * Now we have two pointer P1 and P2
   * Step - 3
   * Compare the linked List .
   */
  while (p2 != null) {
    if (p1.data != p2.data) {
      return false;
    }
    p1 = p1.next;
    p2 = p2.next;
  }
  return true;
}
let ans = is_palindrom(list);
if (ans) {
  console.log("List is Palindrome");
} else {
  console.log("Lit is not Palindrome");
}

/**
 * 🎉🎉🎉🎉 Congratulatios you successfully solve the difficult problem .
 */