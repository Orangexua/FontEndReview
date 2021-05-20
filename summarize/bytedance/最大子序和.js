const arr = [1,-3,4, -1, 1, 2, -5]
function getMax (arr) {
    var sum = 0;
    var max = 0;
    for (var i = 0 ; i < arr.length ; i ++){
        if (sum < 0){
            sum = arr[i];
        }else{
            sum += arr[i]
        }
        max = Math.max(max,sum);
    }
    return max;
}
// function getMax(arr) {
//     const memo = []
//     memo[0] = arr[0]
//     let max = arr[0]
//     for(let i = 1;i<arr.length;i++) {
//         memo[i] = Math.max(arr[i] + memo[i  -1], arr[i])
//         max = Math.max(max, memo[i])
//     }
//     return max
// }

console.log(getMax(arr))

function getMax(arr){
    var max = arr[0];
    var memo = [];
    memo[0] = arr[0];
    for (var i = 1 ; i < arr.length ; i ++){
        memo[i] = Math.max(memo[i - 1] + arr[i], arr[i]);
        max = Math.max(memo[i],max);
    }
    return max;
}