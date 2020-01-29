const BinarySearchTree = require('./bstClass')

const bst = new BinarySearchTree();

  bst.insert(25)
  bst.insert(15)
  bst.insert(50)
  bst.insert(10)
  bst.insert(24)
  bst.insert(35)
  bst.insert(70)
  bst.insert(18)
  bst.insert(44)
  bst.insert(22)
  bst.insert(90)
  bst.insert(4)
  bst.insert(12)
  bst.insert(31)
  bst.insert(66)
  
function inOrder(t) {
  let acc = [];

  function traverseTree (bst){
    if(!bst) {
      return 'Tree is empty'
    }
    traverseTree(bst.left);
    acc.push(bst.key);
    traverseTree(bst.right)
  }
  traverseTree(t)
  return acc;
}
console.log(inOrder(bst))


function preOrder (t) {
  let acc = [];

  function traverseTree (bst) {
    if(!bst) {
      return 'Tree is empty'
    }
    acc.push(bst.key)
    traverseTree(bst.left)
    traverseTree(bst.right)
  }
  traverseTree(t)
  return acc;
}

console.log(preOrder(bst))

function postOrder(t) {
  let acc = [];

  function traverseTree(bst) {
    if(!bst) {
      return 'Tree is empty'
    }
    traverseTree(bst.left)
    traverseTree(bst.right)
    acc.push(bst.key)
  }
  traverseTree(t)
  return acc;
}

console.log(postOrder(bst))

