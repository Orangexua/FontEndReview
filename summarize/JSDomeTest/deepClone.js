function deepClone (obj){
    var item = typeof (obj) === 'Object' ? {} : [];
    for (var key in obj ){
        if(typeof(obj[key]) === 'Object'){
            deepClone(obj[key]);
        }else{
            item[key] = obj[key];
        }
    }
    return item;
}
var obj1 = {name: "kitty", sex: "female", age: 18, favorite: ["football", "sing", "dancing"]};
console.log(deepClone(obj1))