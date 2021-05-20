function bubbling() {
    var item;
    var arr = [1,3,2,7,4,6,5,9,10,8];
    for(var i = 0 ; i < arr.length ; i ++){
        for(var j = 0 ; j < arr.length - i - 1; j ++){
            if(arr[j] > arr[j + 1]){
                item = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = item;
            }
        }
    }
    return arr;
}
console.log(bubbling());