Promise.prototype.all = function ( promises ){
    var results = [];
    var index = 0;
    var len = promises.length;
    return new Promise ( function (resolve , reject){
        for (let val of promises){
            Promise.resolve(val).then(function (res){
                index ++;
                results[index - 1] = res;
                console.log(val);
                if (index === len){
                    return resolve(results);
                }
            },function(err){
                return reject(err);
            })
        }
    })
}

let promise1 = new Promise(function(resolve) {
  resolve(1);
});
let promise2 = new Promise(function(resolve) {
  resolve(2);
});
let promise3 = new Promise(function(resolve) {
  resolve(3);
});
  
let promiseAll = Promise.prototype.all([promise1, promise2, promise3]);
promiseAll.then(function(res) {
  console.log(res);
});