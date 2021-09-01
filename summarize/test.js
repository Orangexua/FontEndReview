function curry(fn,len = fn.length) {
  function _curry(fn,len,...args) {
    return function (...params) {
        let _args = [...args,...params];
        if(_args.length >= len){
            return fn.apply(this,_args);
        }else{
            return _curry.call(this,fn,len,..._args)
        }
    }
  }
  return _curry.call(this,fn,len)
}

let _fn = curry(function(name, age, fruit){
  console.log(`我叫 ${name},我 ${age} 岁了, 我喜欢吃 ${fruit}`);
});

_fn('小哀',20,'西瓜');     // print: 1,2,3,4,5
_fn('小哀')(20)('西瓜');   // print: 1,2,3,4,5
// _fn(1,2)(3,4)(5);   // print: 1,2,3,4,5
// _fn(1)(2)(3)(4)(5); // print: 1,2,3,4,5