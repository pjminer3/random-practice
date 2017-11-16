/* You may use a whiteboard or paper to sketch things out, but please write your code in an IDE so you can write tests to demonstrate that your code works, and you can paste that code into a Github Gist upon solution submission.

You may only use the Internet to remind yourself of syntax (e.g., on the MDN site), not to look up anything specifically about this problem. Be reasonable -- stay within the bounds of what would be permissible in a live industry interview.

Tree has path to target sum?

You are given a binary tree whose nodes all have integer values (both positive and negative).

Given some target sum (say, 14), return true if there is any path starting from the root and ending in a leaf, such that adding up all the values along the path equals the given sum.

const hasPathToSum = function(node, targetSum) {
  // your code here
}; */


class Tree {
  constructor (val) {
    this.value = val;
    this.left = null;
    this.right = null;
  } 

  addChild(tree) {
    if (tree.value > this.value) {
      if (this.right === null) {
        this.addRight(tree);
      } else {
        this.right.addChild(tree);
      }
    } else {
      if (this.left === null) {
        this.addLeft(tree);
      } else {
        this.left.addChild(tree);
      }
    }
  }

  addRight(tree) {
    this.right = tree;
  }

  addLeft(tree) {
    this.left = tree;
  }
}

const hasPathToSum = function(node, targetSum) {
  let isPath = false;

  function makePath(node, targetSum, currentSum) {
    currentSum = currentSum || 0;
    // add node's value to current sum
    currentSum += node.value;
    // check for no children
    if (!node.left && !node.right) {
      // if no children
      if (currentSum === targetSum) {
        isPath = true;
      }
      return;
    }

    // check if there are any children to the left
    if (node.left) {
      // if so, call makePath(node.left, targetSum, CurrentSum)
      makePath(node.left, targetSum, currentSum);
    }

    // if check if there are any children to the right
    if (node.right) {
      // if so, call makePath(node.right, targetSum, CurrentSum);
      makePath(node.right, targetSum, currentSum);
    }
  }

  makePath(node, targetSum);

  return isPath;
};

let tree = new Tree(6);
let tree2 = new Tree(9);
let tree3 = new Tree (2);
let tree4 = new Tree(1);
let tree5 = new Tree(5);
let tree6 = new Tree (7);
tree.addChild(tree2);
tree.addChild(tree3);
tree.addChild(tree4);
tree.addChild(tree5);
tree.addChild(tree6);

console.log(tree); // We got a working tree!
console.log(hasPathToSum(tree, 9)); // true
console.log(hasPathToSum(tree, 22)); // true
console.log(hasPathToSum(tree, 13)); // true
console.log(hasPathToSum(tree, 14)); // false