function debounce ( func , delay ) {
    var timer = null;
    return function () {
        var content = this;
        var args = arguments;
        clearTimeout(timer);
        timer = setTimeout( function () {
            func.apply( content , args )
        }, delay )
    }
}


function throttle ( func , delay) {
    var perv = new Date.now();
    return function () {
        var content = this;
        var args = arguments;
        if ((new Date.now() - perv) > delay){
            func.apply(content, args);
            perv = new Date.now();
        }
    }
}