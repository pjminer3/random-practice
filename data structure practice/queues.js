console.log('*** All systems go ***');
// Create a class Queue
  // create inner clase Node(data) that has two properties; data & next
// Queue has 2 properties; head & tail
   // this are added to the tail and removed from the head
// Queue has 4 methods; 
  // isEmpty(), 
    // return true if a queue is empty
  //peek(), 
    // returns the data of the head
  //add(data), 
    // adds a node to the tail
    // make current tail.next point to new node
    // reassign/update the tail pointer
    // if the queue is empty make sure that both the head and tail are assigned to the added node
  //remove();
    // reassign the head pointer to the next node
    // if you run out of nodes make sure the tail is assigned appropirately too
    // return the data of the node you deleted

class Node {
  constructor(data) {
    this.data = data;
    this.next;
  }
}

class Queue {
  constructor() {
    this.head; // where nodes will be removed
    this.tail; // where nodes will be added
  }

  isEmpty() {
    return this.head === undefined;
  }

  peek() {
    return this.head.data;
  }

  add(data) {
    let node = new Node(data);
    if (this.head === undefined) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  remove() {
    let deleted = this.head
    this.head = this.head.next;
    if (this.head === undefined) {
      this.tail = undefined;
    }
    return deleted.data;
  }
}

let movieLine = new Queue;

// add Patrick to the front of the movie line
movieLine.add('Patrick');
// add Forbes behind Patrick
movieLine.add('Forbes');
// add Kevin behind Forbes
movieLine.add('Kevin')
/* Right now:
  movieLine.head => 'Patrick'
  movieLine.head.next => 'Forbes;
  movieLine.head.next.next => 'Kevin'
  movieLine.tail => 'Kevin'
*/
console.log(movieLine);

// // Let patrick enter
// movieLine.remove();
// // let forbes enter
// movieLine.remove();
// /* right now: 
//   movieLine.head/.tail => 'Kevin'
// */
// console.log(movieLine);