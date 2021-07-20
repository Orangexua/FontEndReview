var isPalindrome = function (n) {
  var str = n.toString();
  var str1 = n.toString().split('').reverse().join('');
  if ( str === str1) {
    return true
  }
  return false
}

for ( var i = 0 ; i < 10000 + 1 ; i ++) {
  if ( isPalindrome(i)) {
    console.log( i + ':' +isPalindrome(i));
  }
}
