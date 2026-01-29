const { linkedList } = require("./helper_Functions");
let arr = [1, 2, 3];
let withoutCycle = linkedList.arrayToList(arr);
let circularList = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 3,
      next: {
        data: 4,
        next: null, // This will point back to the head to make it circular
      },
    },
  },
};
// Make it circular
circularList.next.next.next.next = circularList;

function detect_cycle(head) {
  if (!head || !head.next) return false;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false; // No cycle
}
let ans = detect_cycle(withoutCycle);
console.log(ans ? "Cycle present" : "Cycle not present");
