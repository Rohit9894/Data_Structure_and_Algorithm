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
  insertData(data) {
    let newNode = new LinkedListNode(data);
    newNode.next = this.head;
    this.head = newNode;
    console.log(this.head);
  }
}
let list = new LinkedList();
list.insertData(5);
list.insertData(6);
console.log(list);
