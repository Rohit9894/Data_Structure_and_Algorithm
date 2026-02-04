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
    return this.head;
  }
}
let l1 = new LinkedList();
l1.insertAtHead(5);
console.log(l1.insertAtHead(6));
