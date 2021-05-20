Array.prototype.unique = function(){
    let map = new Map();
    this.map( item => {
        if(!map.has(item.name)){
            map.set(item.name,item.name)
        }
    })
    var arr = [];
    map.forEach((item) => arr.push(item));
    console.log(this);
    return arr
}
const users = [
    {id:1, name:"a"},
    {id:2, name:"a"},
    {id:3, name:"b"},
    {id:4, name:"b"}
  ]
console.log(users.unique());