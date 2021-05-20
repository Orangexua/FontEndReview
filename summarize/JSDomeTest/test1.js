function Maxarr(arr){
    var max = 1,
        item = 0;
    for(var i = 0; i < arr.length; i ++){
        if(arr[i] < arr[i + 1]){
            item += 1;
        }else {
            item = 1;
        }
        max = Math.max(item,max);
    }
    return max;
}
var iii = [101,19,12,51,32,7,103,8];
console.log(Maxarr(iii));