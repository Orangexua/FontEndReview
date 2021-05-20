function ChoiceSort(arr){
    for(var i = 0 ; i < arr.length; i ++){
        var minIndex = i
        for(var j = i + 1; j < arr.length; j ++){
            if(arr[minIndex] > arr[j]){
                minIndex = j;
            }
        }
        item = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = item;
    }
    return arr;
}
var a = [1,9,2,8,3,7,4,6,5,10];
console.log(ChoiceSort(a));