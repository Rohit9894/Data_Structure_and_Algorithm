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

  getAllData(list) {
    let current = list;
    let result = "";

    while (current) {
      result += current.data + " ";
      current = current.next;
    }
    return result;
  }
  insertAtTail(data) {
    let newNode = new LinkedListNode(data);
    if (this.head == null) {
      newNode.next = this.head;
      this.head = newNode;
      return this.head;
    }
    let curr = this.head;
    while (curr.next != null) {
      curr = curr.next;
    }
    curr.next = newNode;
    return this.head;
  }
  arrayToList(arr) {
    arr.forEach((element) => {
      this.insertAtTail(element);
    });
    return this.head;
  }
  createCycle(head, pos) {
    if (pos < 0) return head; 
    let current = head;
    let cycleNode = null;
    let index = 0;

    while (current.next !== null) {
      if (index === pos) cycleNode = current; // Mark the node where the cycle starts
      current = current.next;
      index++;
    }
    current.next = cycleNode; // Link the last node to the cycle node
    return head;
  }
}
const linkedList = new LinkedList();
const createNode = (data) => {
  return new LinkedListNode(data);
};
module.exports = { linkedList, createNode };
