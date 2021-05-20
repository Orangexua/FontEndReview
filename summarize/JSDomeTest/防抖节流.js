var debounce = function (func,delay){
    var timer = null;
    return function (){
        var content = this;
        var args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function(){
            func.apply(content,args);
        },delay);
    }
}

var throttle1 = function(func, delay){
    var perv = new Date.now();
    return function(){
        var content = this;
        var args = arguments;
        var now = new Date.now();
        if(perv - now >= delay){
            func.apply(content,args);
            perv = new Date.now();
        }
    }
}

var throttle2 = function (func,delay){
    var timer = null;
    return function(){
        var content = this;
        var args = arguments;
        if(!timer){
            timer = setTimeout(function(){
                func.apply(content,args);
                timer = null;
            },delay);
        }
    }
}