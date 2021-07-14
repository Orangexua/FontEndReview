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

