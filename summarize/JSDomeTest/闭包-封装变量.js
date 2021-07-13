var mult = (function () {
  var cache = {}
  return function () {
    var arg = Array.prototype.join.call(arguments);
    if ( cache[arg]) {
      return cache[arg]
    }
    var a = 1;
    for ( var i = 0 ; i < arguments.length ; i ++) {
      a = a * arg[i]
    }
    return cache[arg] = a;
  }
})()