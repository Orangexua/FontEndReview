function fib(n){
    if(n === 0){
        return 0
    }
    if(n === 1){
        return 1
    }
    var a = 0 ,b = 1,result;
    for(var i = 0 ; i < n ; i ++){
        result = a + b;
        a = b;
        b = result;
    }
    return result;
}
console.log(Fib(10));