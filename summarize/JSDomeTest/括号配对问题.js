function Pipei(str){
    var item = 0;
    var obj = {
        '[' : ']',
        '{' : '}',
        '<' : '>',
        '(' : ')'
    }
    var keys = Object.keys(obj).toString();
    var values = Object.values(obj).toString();
    var strArr = str.split('');
    for(var i = 0 ; i < strArr.length; i ++){
        if(keys.indexOf(strArr[i]) != -1){
            item ++
        }
        if(values.indexOf(strArr[i]) != -1){
            item--
        }
    }
    if(item != 0){
        console.log('false');
    }else{
        console.log('true');
    }
}

Pipei('{<>(){{}}}{}{}');