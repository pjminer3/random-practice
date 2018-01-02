/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
};

var kthSmallest = function(root, k) {
  let values = [];

  function checkNodes(node) {
    values.push(node.val);
    if (node.left) {
      checkNodes(node.left);
    } 
    if (node.right) {
      checkNodes(node.right);
    }
  }

  checkNodes(root);

  values = values.sort((a, b) => {
    return a - b;
  });

  return values[k - 1];
};

let root = new TreeNode(3);
root.left = new TreeNode(1);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(2);
root.right = new TreeNode(5);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(6);

console.log(kthSmallest(root, 1)); // 0
console.log(kthSmallest(root, 3)); // 2
