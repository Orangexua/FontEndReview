/** 根据参数的类型，推断出返回值的类型也是 number */
function add1(a, b) {
    return a + b;
}
var x1 = add1(1, 1); // 推断出 x1 的类型也是 number
/* 推断参数 b 的类型是数字或者 undefined，返回值的类型也是数字 */
function add2(a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
}
var x2 = add2(1);
var x3 = add2(1, 1); // ts(2345) Argument of type '"1"' is not assignable to parameter of type 'number | undefined
