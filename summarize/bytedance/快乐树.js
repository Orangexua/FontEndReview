function HappyTree (n) {
  var str = n.toString();
  var arr = str.split('')
  var index = 0;
  for ( var i = 0 ; i < arr.length ; i ++ ) {
    index += parseInt(arr[i]) * parseInt(arr[i])
  }
  return index;
}

function doWhile (n) {
  var arr = []
  var item = HappyTree(n)
  while ( arr.indexOf(item) === -1 && item !== 1) {
    arr.push(item)
    item = HappyTree(item)
    if ( item === 1) {
      return true
    }
    if ( arr.indexOf(item) > -1) {
      return false
    }
  }
  return true
}

console.log( doWhile(19))

