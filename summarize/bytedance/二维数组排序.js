function Erwei (arr) {
    var res = arr[0];
    for (var i = 1; i < arr.length; i ++){
        const pre = res;
        res = [];
        pre.forEach( item => {
            arr[i].forEach( cur => {
                res.push(item + cur);
            })
        });
    }
    console.log(res);
}
var arr = [[1,2,3,4],['A','B','C'],['a','b','c','d','e']];
Erwei(arr);
