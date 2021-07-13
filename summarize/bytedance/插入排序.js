function Charu(arr){
    for(var i = 1 ; i < arr.length; i ++){
        var perIndex = i - 1;
        var current = arr[i];
        while(perIndex >= 0 && arr[perIndex]> current){
            arr[perIndex + 1] = arr[perIndex];
            perIndex--
        }
        arr[perIndex + 1] = current;
    }
    return arr;
}
var a = [1,9,2,8,3,7,3,6,4,5,10,34,1,2,34,12,32];
console.log(Charu(a));
// function PaiXu(arr) {
//   for ( var i = 1 ; i < arr.length ; i ++) {
//     var PerIndex = i - 1;
//     var current = arr[i];
//     while ( PerIndex >= 0 && arr[PerIndex] > current) {
//       arr[PerIndex + 1] = arr[PerIndex];
//       PerIndex--
//     }
//     arr[PerIndex + 1] = current;
//   }
//   return arr;
// }

// console.log(PaiXu(a))