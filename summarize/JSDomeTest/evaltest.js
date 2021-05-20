var jsonstr = "{name:'test',age:18}";

console.log(eval("("+jsonstr+")"))//拼接过程
console.log(eval("{}")) // return undefined
console.log(eval("({})")) // return object[Object]
var josnobj = eval("("+jsonstr+")");
console.log(josnobj);