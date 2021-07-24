function Node(key) {
  this.key = key // 这里简单的实现key为数字的，也可以保存为key-value的键值对
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  // 节点元素
  this.insert = insert;
  //初始化根节点
  this.root = null;
}

function insert(key) {
  // 1. 创建节点元素
  const newNode = new Node(key);
  // 2. 判断是否有root根节点
  if(this.root === null) {
    this.root = newNode
  }else {
    insertNode(this.root, newNode)
  }
}

// 插入递归操作
function insertNode(oldNode, newNode) {
  // 1. 判断是在左节点还是在右节点
  if( newNode.key < oldNode.key) {
    // 2. 判断左节点是否为null
    if(oldNode.left === null) {
      // 为null时，直接添加在后面
      oldNode.left = newNode;
    }else {
      // 不为null，则需要重新递归
      insertNode(oldNode.left, newNode)
    }
  }else {
    // 同上
    if(oldNode.right === null) {
      oldNode.right = newNode;
    }else {
      insertNode(oldNode.right, newNode)
    }
  }
}



// 测试插入代码
const bsts = new BinarySearchTree();
bsts.insert(11)
bsts.insert(7)
bsts.insert(15)
bsts.insert(5)
bsts.insert(9)
bsts.insert(13)
bsts.insert(20)
bsts.insert(3)
bsts.insert(8)
bsts.insert(10)
bsts.insert(12)
bsts.insert(14)
bsts.insert(18)
bsts.insert(25)
bsts.insert(19)

BinarySearchTree.prototype.preOrder = function(cb) {
  _preOrderNode(this.root, cb)
}
BinarySearchTree.prototype.midOrder = function(cb) {
  _midOrderNode(this.root, cb)
}
BinarySearchTree.prototype.lastOrder = function(cb) {
  _lastOrderNode(this.root, cb)
}
BinarySearchTree.prototype.levelOrder = function() {
  _levelOrder(this.root)
}
// 先序遍历递归函数
function _preOrderNode(node, cb) {
  // 如果在处理过程中，左右子树都为null后，则停止递归
  if(node !== null) {
    // 1处理key，将node.key通过callback函数进行累加
    cb(node.key);
    // 2处理经过的左子树
    _preOrderNode(node.left, cb)
    // 3处理经过的右子树
    _preOrderNode(node.right, cb)

  }
}
// 中序遍历递归函数
function _midOrderNode(node, cb) {
  // 如果在处理过程中，左右子树都为null后，则停止递归
  if(node !== null) {
    // 2处理经过的左子树
    _midOrderNode(node.left, cb)
    // 1处理key，将node.key通过callback函数进行累加
    cb(node.key);
    // 3处理经过的右子树
    _midOrderNode(node.right, cb)

  }
}

// 后序遍历递归函数
function _lastOrderNode(node, cb) {
  // 如果在处理过程中，左右子树都为null后，则停止递归
  if(node !== null) {
    // 1处理key，将node.key通过callback函数进行累加
    // 2处理经过的左子树
    _lastOrderNode(node.left, cb)
    // 3处理经过的右子树
    _lastOrderNode(node.right, cb)
    cb(node.key);
  }
}
//层次遍历
function _levelOrder(node) {
  const ret = [];
  if (!node) {
      return ret;
  }

  const q = [];
  q.push(node);
  while (q.length !== 0) {
      const currentLevelSize = q.length;
      ret.push([]);
      for (let i = 1; i <= currentLevelSize; ++i) {
          const node = q.shift();
          ret[ret.length - 1].push(node.val);
          if (node.left) q.push(node.left);
          if (node.right) q.push(node.right);
      }
  }
      
  return ret;
};
let pre = ""
bsts.preOrder((key) => {
  pre += key + " "
})
console.log("先序遍历测试" + pre)
let mid = ""
bsts.midOrder((key) => {
  mid += key + " "
})
console.log("中序遍历测试" + mid)
let last = ""
bsts.lastOrder((key) => {
  last += key + " "
})
console.log("后序遍历测试" + last)

console.log(bsts.levelOrder())