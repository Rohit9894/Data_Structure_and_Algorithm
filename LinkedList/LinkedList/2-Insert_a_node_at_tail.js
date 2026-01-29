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

  insertAtTail(data) {
 
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
    
  }
}

// Test the LinkedList
let list = new LinkedList();
list.insertAtTail(5);
list.insertAtTail(6);
console.log(list);
