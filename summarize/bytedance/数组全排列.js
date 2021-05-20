// var a=[1,2,3];
// //swap用来交换数组a中的两个元素
// function swap(a,j,k){
//     var t=a[j];
//     a[j]=a[k];
//     a[k]=t;
// }
// //全排列函数pai，在数组a中，对p位置到q位置之间的元素进行全排列
// function pai( a, j, k){
//     if( j==k ){
//         console.log(a);
//     }//一个数的全排列就是自己，输出自己
//     else{
//         for(var i = j; i < k; i++){
//             swap(a,i,j);//把 a 中的每个元素都作一次头元素
//             pai(a,j+1,k);//对头元素后的数据再次递归实现全排列
//             swap(a,i,j);//排完之后要换回来，防止重复排列
//         }
//     }
// }
var arr = [1,2,3,4];
function swap (a , j , k){
    var item = a[j];
    a[j] = a[k];
    a[k] = item;
}
function pailie(arr , j , k){
    if ( j === k){
        console.log(arr);
    }else{
        for (var i = j ; i < k ; i ++){
            swap(arr , i , j );
            pailie(arr, j + 1, k);
            swap(arr , i , j);
        }
    }
}
pailie(arr,0,arr.length);