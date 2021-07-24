//前序递归；
var preOrderTraver = (root) =>  {
    let list = [];
    const preOrder = (node) => {
        if (node != null){
            list.push(node.val);
            preOrder(node.left);
            preOrder(node.right);
        }
    }
    perOrder(root);
    return list;
}

//前序非递归

function preOrderTraver ( root ){
    let list = [];
    let strack = [root];
    while (strack !== 0){
        const curnode = strack.pop();
        list.push(curnode.val);
        if (curnode.right !== null){
            strack.push(curnode.left);
        }
        if (curnode.left !== null){
            strack.push(curnode.right);
        }
    }
    return list;
}
// 后序遍历
const postorderTraversal = (root) => {
    const list = [];
    const stack = [];
    
    // 当根节点不为空的时候，将根节点入栈
    if(root) stack.push(root)
    while(stack.length > 0) {
        const node = stack.pop()
        // 根左右=>右左根
        list.unshift(node.val)
        
        // 先进栈左子树后右子树
        // 出栈的顺序就变更为先右后左
        // 右先头插法入list
        // 左再头插法入list
        // 实现右左根=>左右根
        if(node.left !== null) {
            stack.push(node.left)
        }
        if(node.right !== null) {
            stack.push(node.right)
        }
    }
    return list
}
// 中序非递归
function midOrderTraserval (node) {
    let list = [];
    let stack = [];
    while(stack.length || node) { 
        if(node) {
            stack.push(node);
            node = node.left;
        } else {
            node = stack.pop();
            list.push(node.value);
            node = node.right; // 如果没有右子树 会再次向栈中取一个结点即双亲结点
        }
    }
    return list;
}

//层序遍历
var levelOrder = function(root) {
  const ret = [];
  if (!root) {
      return ret;
  }
  const q = [];
  q.push(root);
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



