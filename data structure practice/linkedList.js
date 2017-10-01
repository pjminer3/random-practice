

// create the node class and constructor (has 2 properties; next & data)
class Node {
  constructor(data) {
    this.next;
    this.data = data;
  } 
}

class LinkedList {
  constructor(data) {
    this.head = new Node(data);
    this.next;
  }

  // Add append(data) method to the Node class to add nodes to the end of the linked list
  append (data) {
    if (this.head === undefined) {
      this.head = new Node(data);
    }
    let current = this.head;
    while (current.next !== undefined) {
      current = current.next;
    }
    current.next = new Node(data);
  }

    // Add prepend(data) method to LinkedList class to add nodes to the beginning of Linked List
  prepend(data) {
    let newHead = new Node(data);
    newHead.next = this.head;
    this.head = newHead;
  }

  // add delete(data) method to linkedList class to take nodes out of the linkedlist
  delete(data) {
    if (this.head === undefined) {
      // if there is no head, and no nodes, return out
      return;
    } else if (this.head.data === data) {
      // if the head node is the node you want to 'delete'
      this.head = this.head.next;
    }

    // if the node you want to delete is in the middle of the linkedList
    let current = this.head;
    while (current.next !== undefined) {
      // Add the while statment to ensure we do not keep looking once we run out of nodes
      if (current.next.data === data) {
        current.next = current.next.next;
        return
      }
      current = current.next;
    }
  }
}

const familyTree = new LinkedList('Grandpa Garriup');
familyTree.append('Grandma Zatorski');
familyTree.append('Carol Zatorski');
familyTree.append('Patrick Miner');
familyTree.append('Little Patty Miner the 2nd');
// console.log('This is where we\'re at with the family tree before the prepends()');
// console.log(familyTree);
// console.log('And this is the .head.data of the above:')
// console.log(familyTree.head.data);
// console.log('=============================');
// console.log(familyTree.head);
familyTree.prepend('Grandpa Garriup the First (true OG)');
familyTree.prepend('Grandpa Garriup the 0th, so he\'s more legend than real person');
familyTree.prepend('easy first delete');
console.log(familyTree);

// console.log('end of file');

