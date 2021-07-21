const arr = [1,-3,4, -1, 1, 2, -5]
function getMax (arr) {
    var sum = 0;
    var max = arr[i];
    var first = 0;
    var end = 0;
    for (var i = 0 ; i < arr.length ; i ++){
        if (sum < 0){
            sum = arr[i];
            first = i
        }else{
            sum += arr[i]
        }
        if ( max < sum) {
          max = sum;
          end = i
        }
    }
    return `${first} -- ${end} : ${max}`;
  }

console.log(getMax(arr))

// function getMax(arr){
//     var max = arr[0];
//     var memo = [];
//     memo[0] = arr[0];
//     for (var i = 1 ; i < arr.length ; i ++){
//         memo[i] = Math.max(memo[i - 1] + arr[i], arr[i]);
//         max = Math.max(memo[i],max);
//     }
//     return max;
// }