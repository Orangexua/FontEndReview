function NewFunction (){
    var obj = {};
    constructor = [].shift.call(arguments);
    obj.__proto__ = constructor.prototype;
    constructor.apply(obj,arguments);
    return obj;
}

Function.prototype.Mycall = function (content) {
    content = Object(content) || window;
    content.fn = this;
    var args = [];
    for (var i = 0 ; i < arguments.lenght ; i ++){
        args.push('arguments[' + i + ']')
    }
    var result = eval('content.fn(' + args +')');
    delete content.fn;
    return result;
}

