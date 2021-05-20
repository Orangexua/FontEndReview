var a = '000000123434523462345123412';//'123434523462345123412'
var b = '243564657354645323453523452';//'243564657354645323453523452'
// function BigNumAdd (str1,str2){
//     var max = Math.max(str1.length,str2.length)
//     var str1Arr = str1.split('')
//     var str2Arr = str2.split('')
//     var instance = str1.length - str2.length;
//     if(instance > 0){
//         for (var i = 0 ; i < instance; i ++){
//             str2Arr.unshift('0');
//         }

//     }else if(instance < 0){
//         for(var i = 0 ; i < Math.abs(instance); i ++){
//             str1Arr.unshift('0')
//         }
//     }
//     var sum = "";
//     var ten = 0;
//     var item = 0;
//     for (var j = max - 1 ; j >= 0 ; j --){
//         item = parseInt(str1Arr[j]) + parseInt(str2Arr[j]) + ten;
//         ten = Math.floor(item / 10);
//         sum = (item % 10) + sum;
//     }
//     if(ten == 1){
//         sum = "1" + sum;
//     }
//     return sum;
// }

function BigNumAdd(str1, str2){
    var max = Math.max(str1.length,str2.length);
    var num = str1.length - str2.length;
    if(num > 0 ){
        for(var i = 0 ; i < num; i ++){
            str2.unshift('0');
        }
    }else{
        for(var i = 0; i < Math.abs(num); i ++){
            str1.unshift('0')
        }
    }
    var str1Arr = str1.split('');
    var str2Arr = str2.split('');
    var sum = '';
    var item = 0;
    var ten = 0;
    for (var j = max - 1 ; j >= 0 ; j --){
        item = parseInt(str1Arr[j]) + parseInt(str2Arr[j]) + ten;
        ten = Math.floor(item / 10);
        sum = item % 10 + sum
    }
    return sum;
}
console.log(BigNumAdd(a,b))