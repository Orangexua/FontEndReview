// var a = {
//     name : 'chenzixu',
//     age : 18,
//     home : '杨凌'
// }
// var b = {
//     app : function () {
//         return this.name + " " + this.age + this.home
//     }
// }

// var c = b.app.apply(a);
// console.log(c);

function a1 (name , age , home){
    this.name = name;
    this.age = age;
    this.home = home;
}

function b1 (a,b,c){
    return this.name + " " + this.age + " " + this.home + "陈子旭" + a + b + c
}
var c = b1.apply(a1('xuannan',18,'jia'),['chenzixu',18,'家乡']);
console.log(c);