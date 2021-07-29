function debounce (func , delay){
    var _this = this;
    var _argument = arguments;
    var timer = null;
    return function () {
        if(timer === null){
            timer = setTimeout(function() {
                func.apply(_this,_argument);
                timer = null
            },delay)
        }
    }
}

