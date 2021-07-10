//节点定义
function Node (val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
//一棵二叉树可以由根节点通过左右指针连接起来形成一个树

function BinaryTree () {
  let Node = function (val) {
    this.val = val
    this.left = null
    this.right = null
  }
  let root = null
}

// 2. 数组存储法（适用于完全二叉树）
// 下图就是一棵完全二叉树，

// 如果我们把根节点存放在位置 i=1 的位置，则它的左子节点位置为 2i = 2 ，右子节点位置为 2i+1 = 3 。

// 如果我们选取 B 节点 i=2 ，则它父节点为 i/2 = 1 ，左子节点 2i=4 ，右子节点 2i+1=5 。

// 以此类推，我们发现所有的节点都满足这三种关系：

// 位置为 i 的节点，它的父节点位置为 i/2
// 它的左子节点 2i
// 它的右子节点 2i+1


// 数组存储法相对于链式存储法不需要为每个节点创建它的左右指针，更为节省内存。

function BinarySearchTree() {
  let Node = function (key) {
    this.key = key
    this.left = null
    this.right = null
  }
  let root = null
  
  // 插入
  this.insert = function(key){
    // 创建新节点
    let newNode = new Node(key)
    // 判断是否为空树
    if(root === null) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }

  // 将 insertNode 插入到 node 子树上
  function insertNode(node, newNode) {
    if(newNode.key < node.key) {
      // 插入 node 左子树
      if(node.left === null) {
        node.left = newNode
      } else {
        insertNode(node.left, newNode)
      }
    } else {
      // 插入 node 右子树
      if(node.right === null) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode)
      }
    }
  }

  // 查找
  this.search = function(key){
    return searchNode(root, key)
  }
  
  function searchNode(node, key) {
    if(node === null) 
      return false
    if(key < node.key) {
      return searchNode(node.left, key)
    } else if(key > node.key) {
      return searchNode(node.right, key)
    } else {
      return true
    }
  }
  // 删除
  this.remove = function(key){
    root = removeNode(root, key)
  }

  function removeNode(node, key) {
    if(node === null) 
      return null
    if(key < node.key) {
      return removeNode(node.left, key)
    } else if(key > node.key) {
      return removeNode(node.right, key)
    } else {
      // key = node.key 删除
      //叶子节点
      if(node.left === null && node.right === null) {
        node = null
        return node
      }
      // 只有一个子节点
      if(node.left === null) {
        node = node.right
        return node
      }
      if(node.right === null) {
        node = node.left
        return node
      }
      // 有两个子节点
      // 获取右子树的最小值替换当前节点
      let minRight = findMinNode(node.right)
      node.key = minRight.key
      node.right = removeNode(node.right, minRight.key)
      return node
    }
  }
  
  // 最小值
  this.min = function(){
    let node = root
    if(node) {
      while(node && node.left !== null) {
        node = node.left
      }
      return node.key
    }
    return null
  }
  
  // 最大值
  this.max = function(){
    let node = root
    if(node) {
      while(node && node.right !== null) {
        node = node.right
      }
      return node.key
    }
    return null
  }
  
  // 中序遍历
  this.inOrderTraverse = function(){
    function inOrderTraverse(callback) {
      inOrderTraverseNode(root, callback)
    }
    
    function inOrderTraverseNode(node, callback) {
      if(node !== null) {
        // 先遍历左子树
        inOrderTraverseNode(node.left, callback)
        // 然后根节点
        callback(node.key)
        // 再遍历右子树
        inOrderTraverseNode(node.right, callback)
      }
    }
    
    // callback 每次将遍历到的结果打印到控制台
    function callback(key) {
      console.log(key)
    }
  }
  
  // 先序遍历
  this.preOrderTraverse = function(){
    function preOrderTraverse() {
      preOrderTraverseNode(root, callback)
    }
    
    function preOrderTraverseNode(node, callback) {
      if(node !== null) {
        // 先根节点
        callback(node.key)
        // 然后遍历左子树
        preOrderTraverseNode(node.left, callback)
        // 再遍历右子树
        preOrderTraverseNode(node.right, callback)
      }
    }
    
    // callback 每次将遍历到的结果打印到控制台
    function callback(key) {
      console.log(key)
    }
  }
  
  // 后序遍历
  this.postOrderTraverse = function(){
    function postOrderTraverse() {
      postOrderTraverseNode(root, callback)
    }
    
    function postOrderTraverseNode(node, callback) {
      if(node !== null) {
        // 先遍历左子树
        postOrderTraverseNode(node.left, callback)
        // 然后遍历右子树
        postOrderTraverseNode(node.right, callback)
        // 最后根节点
        callback(node.key)
      }
    }
    
    // callback 每次将遍历到的结果打印到控制台
    function callback(key) {
      console.log(key)
    }
  }
}