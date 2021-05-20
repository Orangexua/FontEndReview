function Multiplicity(arr){
    var obj = {};
    for(var i = 0 ; i < arr.length; i ++){
        if(obj[arr[i]]){
            obj[arr[i]]++
        }else{
            obj[arr[i]] = 1;
        }
    }
    var keys = Object.keys(obj);
    var values = Object.values(obj);
    var Max = Math.max(...values);
    console.log('众数为' + keys[values.indexOf(Max)],'重数为' + Max);
}
Multiplicity([1,2,3,2,3,2,4,3,4,5,4,3,32,3,2,32,3,1,2,1,23,123]);