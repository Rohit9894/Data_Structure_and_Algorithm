/**
 * Linked List Node
 */
class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertAtHead(data) {
    let newNode = new LinkedListNode(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  getAllData() {
    let current = this.head;
    let result = "";

    while (current) {
      result += current.data + " "; // Append data with space
      current = current.next;
    }

    return result.trim(); // Trim to remove trailing space
  }
  getAllDataInOrder(list) {
    let current = list;
    let result = [];

    while (current) {
      result.push(current.data); // Push data into array
      current = current.next;
    }

    return result.reverse().join(" "); // Reverse the array and join with space
  }
}

let list = new LinkedList();
list.insertAtHead(5);
list.insertAtHead(6);
list.insertAtHead(7);
list.insertAtHead(8);
// console.log(list.getAllDataInOrder(list.head));
