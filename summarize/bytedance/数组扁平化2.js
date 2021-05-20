var arr = [1,2,3,4,54,[1,2,3,4,{name : 'chenzxiu', age : 'hahah'},2,[1,2,4,[12,3,234,234,4]],3,4,5]]
function flatten(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}
console.log(flatten(arr))