var str = 'qwertyuiopoiuytrewq';

function panduan (str){
    var j = str.length - 1;
    var i = 0 ;
    while(i < j ){
        if (str[i] !== str[j]){
            return false;
        }
        i ++;
        j --;
    }
    return true;
}
console.log(panduan(str));