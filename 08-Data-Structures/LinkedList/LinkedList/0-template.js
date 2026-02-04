
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

}

let list = new LinkedList();
list.insertAtHead(5);
list.insertAtHead(6);
list.insertAtHead(7);
list.insertAtHead(8);
console.log(list.getAllData(list.head));
