var arr =[1,7,6,4,3,1]

function Optimization (arr){
    var max = 0;
    for (var i = 1 ; i < arr.length ; i ++){
        var min = Math.min(arr[0], arr[i]);
        max = Math.max(max, arr[i] - min);
    }
    return max;
}

console.log(Optimization(arr));