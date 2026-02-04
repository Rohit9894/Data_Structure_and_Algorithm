/**
 * A stack is a data structure that follows the Last In, First Out (LIFO) principle, meaning the last
 * element added is the first one to be removed. You can implement a stack in JavaScript in various
 * ways. Here's how:
 */

class Stack {
    constructor() {
      this.items = [];
    }
    push(item) {
      this.items.push(item);
    }
    // Remove and return the top item from the stack
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items.pop();
    }
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
    isEmpty() {
      return this.items.length === 0;
    }
    size() {
      return this.items.length;
    }
    clear() {
      this.items.clear();
    }
  }
  
  
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  console.log(stack.peek()); // Output: 30
  console.log(stack.pop());  // Output: 30
  console.log(stack.size()); // Output: 2