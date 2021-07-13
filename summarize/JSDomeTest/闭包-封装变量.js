var mult = (function () {
  var cache = {}
  return function () {
    var arg = Array.prototype.join.call(arguments , ',');
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

var mult = (function () {
  var cache = {}
  var calculate = function () {
    var a = 1;
    for (var i = 1 ; i < arguments.length ; i ++) {
      a = a * arguments[i]
    }
    return a
  }

  return function () {
    var args = Array.prototype.join.call(arguments , ',');
    if ( cache[args] ) {
      return cache[args]
    }
    return cache[args] = calculate.apply( null , arguments);
  }
})()