Function.prototype.Myapply = function (context, arr){
    var context = Object(context) || window;
    context.fn = this;
    var result;
    if(!arr){
        result = context.fn();
    }else{
        var agrs = [];
        for (var i = 0; i < arr.length; i ++){
            agrs.push('arr['+ i +']');
        }
        result = eval('context.fn('+ agrs +')')
    }
    delete context.fn;
    return result;
}
var foo = {
    value: 1
};

function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value);
}

bar.Myapply(foo, [20, 17]); 


Function.prototype.Mybind = function () {
    var _this = this;
    var content = [].shift.call(arguments);
    return {
        function () {
            
        }
    }
}