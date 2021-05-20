//快排1
function fullter (arr) {
    var result = [];
    for (let i = 0 ; i < arr.length ; i ++){
        if(Array.isArray(arr[i])){
            result = result.concat(fullter(arr[i]));
        }else{
            result.push(arr[i]);
        }
    }
    return result;
}
let arr = [12,2,2,[11,[1,2,3,[12,3,2,3]],22],3,23];
//快排2
function fullter (arr) {
    var result = [];
    var len = arr.length;
    for (var i = 0 ; i < len ; i ++){
        if ( Array.isArray(arr[i])){
            result.push(fullter(arr[i]));
        }else{
            result.push(arr[i]);
        }
    }
    return result;
}
