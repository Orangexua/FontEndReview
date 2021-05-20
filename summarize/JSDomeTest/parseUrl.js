function parseUrl (str){
    var obj = {
        protocol : '',
        host : '',
        path : '',
        params : {
            id : '',
            sort : ''
        },
        hash : ''
    }
    var key = ['://','/','?','id','sort','#']
    var arr = [];
    for (item of key){
        var run = str.split(item);
        arr.push(str.split(item)[0]);
        run.splice(0,1);
        str = run.toString()
    }
    let i = 0;
    for (key in obj){
        obj[key] = arr[i];
        i++;
    }
    console.log(obj);
}
var str = 'http://www.qq.com/product/list?id=123456&sort=discount#title';
parseUrl(str);