//递归
function DeepTraversal (node , NodeList ) {
    if (node) {
        NodeList.push(node);
        let child = node.child;
        for ( var i = 0 ; i < child.length ; i ++ ){
            DeepTraversal(child[i], NodeList);
        }
    }
    return NodeList;
}

var a = document.getElementById('root')

DeepTraversal(a, NodeList=[] )()

//非递归
function DeepTraversalNotRecortion (node ) {
    var nodelist = [];
    if (node){
        var starck = [];
        starck.push(node);
        while(starck.length != 0){
            var childitem = starck.pop();
            nodelist.push(childitem);
            childlist = childitem.child;
            for (var i = 0 ; i < childlist.length ; i ++){
                starck.push(childlist[i]);
            }
        }
    }
    return nodelist;
}

//深度遍历  首先声明一个存储遍历节点的总数组  再声明一个存储操作节点的数组  利用pop函数每次导出strack(操作数组)最后一个节点
//（也就是深度遍历一直沿着子节点查找，是否还有孙节点）有的话继续push进starck数组，循环判断starck是否还有数组，有的话继续pop
//最后一个节点
function DeepRuntree (node ){
    var nodelist = [];
    if (node){
        var strack = [];
        starck.push(node);
        while ( starck.length != 0 ){
            var childitem = strack.pop();
            childlist = childitem.child;
            nodelist.push(childitem);
            for (var i = 0 ; i < childlist.length ; i ++){
                strack.push(childlist[i]);
            }
        }
    }
    return nodelist;
}