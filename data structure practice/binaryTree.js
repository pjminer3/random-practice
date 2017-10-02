console.log('All systems go for BINARY TREES');

// create the binaryTreeNode class
  // properties; data, left right
// create the methods:
  // .insert(value) inserts a value node into the appropraite location on the tree
    // take a value and look to the left and to the right to determine where to insert it
      // if value <== left
    // it a value exists where you want it to go, check where it should go compared to that node
  // .contains(value) checks to see if a tree contains a value node
    // checks left and right side (depending on value) calling itself recursively
    // if it finds value return true
    // if it finds undefined return false
  
    // NOTE: BELOW METHOD IS FOR in-order TRAVERSAL.  FOR pre-order AND post-order CHANGE ORDER OF CONSOLE.LOGS
    // .printInOrder() prints all the values in the tree; left node, root node, then right node
    // checks the left node to see if it has a left node... recursively calls this down to last left node
      // prints value
    // prints the root node
    // checks if there's a right node and recursively calls to the last node
      // logs value

class BinaryTreeNode {
  constructor(data) {
    this.left;
    this.right;
    this.data = data;
  }

  insert(value) {
    if (typeof value !== 'number') {
      return 'Not valid number entry'
    }
    
    let node = new BinaryTreeNode(value);
    if (node.data <= this.data) {
      if (this.left === undefined) {
        this.left = node;
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === undefined) {
        this.right = node;
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(value) {
    // check to see if the node value is the one we're looking for
    if (this.data === value) {
      return true;
    }

    // check child nodes
    if (value <= this.data) {
      // go left
      if (this.left === undefined) {
        return false
      } else {
        return this.left.contains(value);
      }
    } else {
      // go right
      if (this.right === undefined) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
  }

    // NOTE: BELOW METHOD IS FOR in-order TRAVERSAL.  FOR pre-order AND post-order CHANGE ORDER OF CONSOLE.LOGS
    // .printInOrder() prints all the values in the tree; left node, root node, then right node
    // checks the left node to see if it has a left node... recursively calls this down to last left node
      // prints value
    // prints the root node
    // checks if there's a right node and recursively calls to the last node
      // logs value

  printInOrder() {
    // print the left node
    if (this.left !== undefined) {
      this.left.printInOrder();
    }
    // prints the root node
    console.log(this.data);
    if (this.right !== undefined) {
      this.right.printInOrder();
    }
  }
}

console.log('The below should be a node with a data property, and thats it')
let ex = new BinaryTreeNode(10);
console.log(ex);
printLines();
ex.insert(5);
ex.insert(20);
console.log('The below should be a node with: data (10), left (node w/ data 5), right (node w/ data 20)');
console.log(ex);
printLines();
ex.insert(2);
ex.insert(9);
ex.insert(15);
ex.insert(25);
console.log('The below should be a node with: 2 children and 4 grandchildren')
console.log(ex);



function printLines() {
  console.log('----------------');
  console.log('----------------');
  console.log('----------------');
}

