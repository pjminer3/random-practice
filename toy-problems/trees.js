  Tree.prototype.map = function(mappingFunc) {
    var newTree = new Tree(mappingFunc(this.value));
    
    this.children.forEach(function(child) {
      newTree.children.push(child.map(mappingFunc));
    });
    
    return newTree;
  }