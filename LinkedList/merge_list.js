const { linkedList } = require("./helper_Functions");
let arr1 = [1, 3, 5, 8];
let arr2 = [7, 8, 9, 10];
let list1 = linkedList.arrayToList(arr1);
let list2 = linkedList.arrayToList(arr2);
/**
 * Both list1 and list2 must be sorted .
 */
function merge_list(list1, list2) {
  let curr = null;
  let newHead = null;
  let p1 = list1;
  let p2 = list2;
  /**
   * Step - 1 
   * Finding a newHead Once we get a newHead then we consider newHead as a Head and assign the value
   * curr .
   */
  if (p1.data < p2.data) {
    newHead = p1;
    p1 = p1.next;
    curr = newHead;
  } else {
    newHead = p2;
    p2 = p2.next;
    curr = newHead;
  }
/**
 * Now we are comparing the value assiging to newHead .
 */
  while (p1 != null && p2 != null) {
    if (p1.data < p2.data) {
      curr.next = p1;
      curr = curr.next;
      p1 = p1.next;
    } else {
      curr.next = p2;
      p2 = p2.next;
      curr = curr.next;
    }
  }

  /**
   * Now we are Handeling the Rest of the data if remaining in the anyone of the linked list.
   */
  if (p1 != null) {
    curr.next = p1;
  }
  if (p2 != null) {
    curr.next = p2;
  }
  return newHead;
} 
let ans = merge_list(list1, list2);
console.log(linkedList.getAllData(ans));
