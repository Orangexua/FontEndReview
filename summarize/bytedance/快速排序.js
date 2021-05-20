// function quickSort(array, left, right) {
//     // 　　console.time('1.快速排序耗时');
//     　　if (left < right) {
//     　　　　var x = array[right], i = left - 1, temp;
//     　　　　for (var j = left; j <= right; j++) {
//     　　　　　　if (array[j] <= x) {
//     　　　　　　　　i++;
//     　　　　　　　　temp = array[i];
//     　　　　　　　　array[i] = array[j];
//     　　　　　　　　array[j] = temp;
//     　　　　　　}
//     　　　　}
//     // 　　　　console.log(array) ;
//     // 　　　　console.log(left,i) ;
//     　　　　quickSort(array, left, i - 1);
//     // 　　　　console.log(array)
//     // 　　　　console.log(i,right)
//     　　　　quickSort(array, i + 1, right);
//     　　}
//     // 　　console.timeEnd('1.快速排序耗时');
//     // 　　console.log(array)
//     　　return array;
//     }

// //快速排序  1

var arr=[1,9,2,6,4,3,8,6,5,7];
// function quickSort1 (arr) {
//     if(arr.length <= 1){
//         return arr;
//     }
//     var quickindex = Math.floor(arr.length / 2);
//     var quicevalue = arr.splice(quickindex,1)[0];
//     var left = [];
//     var right = [];
//     for (var i = 0 ; i < arr.length; i ++){
//         if(arr[i] < quicevalue){
//             left.push(arr[i]);
//         }else{
//             right.push(arr[i]);
//         }
//     }
//     return quickSort1(left).concat([quicevalue],quickSort1(right));
// }

// console.log(quickSort1(arr))
// 快速排序

function quicksort (arr){
    if(arr.length <= 1){
        return arr
    }
    var quickitem = Math.floor(arr.length/2);
    var quickvalue = arr.splice(quickitem,1)[0];
    var left = [];
    var right = [];
    for(var i = 0 ; i < arr.length ; i ++){
        if (arr[i] < quickvalue){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quicksort(left).concat([quickvalue] , quicksort(right));
}

console.log(quicksort(arr));