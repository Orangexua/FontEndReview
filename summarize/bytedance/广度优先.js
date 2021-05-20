function WideTravesal ( node ){
    var nodelist = [];
    if ( node ) {
        var arr = [];
        arr.unshift(node);
        while ( arr.length != 0){
            childitem = arr.shift();
            nodelist.push(childitem);
            child = childitem.child
            for ( var i = 0 ; i < child.length ; i ++){
                arr.unshift(child[i]);
            }
        }
    } 
    return nodelist;
}