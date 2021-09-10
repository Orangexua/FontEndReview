var str = 'sdfasdfqwerfrfsda'
// function MoreArr(str) {
//     var strArr = str.split('');
//     var obj = {};
//     for(var i = 0 ; i < strArr.length ; i++){
//         if(obj[strArr[i]]){
//             obj[strArr[i]]++;
//         }else{
//             obj[strArr[i]] = 1;
//         }
//     }
//     var keys = Object.keys(obj);
//     var values = Object.values(obj);
//     console.log(keys,values);
//     var maxValue = Math.max(...values);
//     console.log(keys[values.indexOf(maxValue)],maxValue)
// }
// console.log(MoreArr(str));

//reduce方法
// function FoundMaxChar(str){
//     var obj = {};
//     for(var i = 0 ; i < str.length ; i ++){
//         var char = str.charAt(i)
//         if(obj[char]){
//             obj[char]++;
//         }else{
//             obj[char] = 1;
//         }
//     }
//     return obj;
// }

function reduceMoreArr(str){
    var arr = str.split('');
    var result = arr.reduce(function(prev, next){
        if(next in prev){
            prev[next]++;
        }else{
            prev[next] = 1;
        }
        return prev;
    },{})
    var keys = Object.keys(result);
    var values = Object.values(result);
    var max = Math.max(...values);
    console.log(keys[values.indexOf(max)],max);
}
console.log(reduceMoreArr(str));