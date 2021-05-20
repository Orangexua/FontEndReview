var str = 'asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasd';
 
// function WeRemove(str){
//     var item = [...new Set(str.split(""))];
//     console.log(item);
// }
WeRemove(str);

// function Ruching(str){
//     var strArr = str.split('');
//     var newStr = '';
//     for(var i = 0; i < strArr.length; i++){
//         if(newStr.indexOf(strArr[i]) == -1){
//             newStr += strArr[i];
//         }
//     }
//     return strArr.toString();
// }
// console.log(Quchong(str));
// // 简化版
// function Quchong (str){
//     var newStr = '';
//     for(var i in str){
//         if(newStr.indexOf(str[i]) == -1){
//             newStr += str[i];
//         }
//     }
//     return newStr;
// }

function WeRemove(str){
    var newStr = '';
    for(var i in str){
        if(newStr.indexOf(str[i]) == -1){
            newStr += str[i];
        }
    }
    console.log(newStr);
}