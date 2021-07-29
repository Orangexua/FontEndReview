function NewFunction (){
    var obj = {};
    constructor = [].shift.call(arguments);
    console.log(constructor);
    obj.__proto__ = constructor.prototype;
    constructor.apply(obj,arguments);
    return obj;
}

function arr () {
    this.name = 'chenzixu';
    this.age = 22;
}

arr.prototype.study = function () {
    console.log('study js')
}
arr.prototype.getUp = function () {
    console.log('6:20')
} 

console.log(NewFunction(arr));


Function.prototype.myCall = function (content) {
  var content = Object.create(window) || content;
      content.fn = this;
  var args = [];
  for ( var i = 0 ; i < arguments.length ; i ++) {
    args.push('arguments[' + i + ']' );
  }
  var result = eval('content.fn(' + args + ')');
  delete content.fn;
  return result;
}
