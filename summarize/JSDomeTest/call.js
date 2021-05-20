Function.prototype.Mycall = function(context){
    context = context || window;
    context.fn = this;
    var args = []
    for (i = 1 ; i < arguments.length; i ++){
        args.push('arguments[' + i +']');
    }
    var result = eval('context.fn(' + args + ')');
    delete context.fn;
    return result
}
var foo = {
    value: 1
};

function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value);
}