console.log('All systems go for STACKS');

class Node {
  constructor(data) {
    this.data = data;
    this.next;
  }
}

class Stack {
  constructor() {
    this.top; // for stacks only need 'top', not head/tail.  With stacks we both add and remove nodes to the 'top'
  }

  isEmpty() {
    return this.top === undefined;
  }

  peek() {
    if (this.top === undefined) {
      // if stack is empty
      console.log('The stack is empty.');
    } else {
      // if there's elements in the stack
      return this.top.data;
    }

  }

  push(data) {
    let node = new Node(data);
    if (this.top === undefined) {
      // if the stack is empty
      this.top = node;
    } else {
      // if there are nodes in the stack
      node.next = this.top;
      this.top = node;
    }
  }

  pop() {
    if (this.top == undefined) {
      // if stack is empty
      console.log('The stack is empty.');
    } else {
      let data = this.top.data;
      this.top = this.top.next;
      return data;
    }
  }
}