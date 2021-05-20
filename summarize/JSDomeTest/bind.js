Function.prototype.Mybind = function (context){
    if (typeof context !== 'function'){
        console.error('please input function!!!!');
    }
    var self = this;
    var args = Array.prototype.slice(arguments,1);
    var fnself = function(){};
    var fnone = function (){
        self.apply(this instanceof self ? this : context,args.concat(arguments));
    }
    fnself.prototype = this.prototype;
    fnone.prototype = new fnself();
    return fnone; 
}

Function.prototype.bind=function () {
    var _this=this;
    var context=arguments[0];
    var arg=[].slice.call(arguments,1);
    return function(){
    arg=[].concat.apply(arg,arguments);
    _this.apply(context,arg);
    }
    };

Function.prototype.Mybind = function () {
    var _this = this;
    var content = arguments[0];
    var args = [].shift.call(arguments,1);
    return {
        function () {
            args = [].concat.apply(content,args);
            _this.apply(content,args);
        }
    }
}