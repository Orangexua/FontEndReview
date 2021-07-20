var threeSum = function ( arr ) {
  var len = arr.length;
  var res = []
  var Arr = arr.sort( ( a , b ) =>  a - b)
  if ( len < 3 || Arr[0] > 0 || arr == null ) return [];
  for ( var i = 0 ; i < len ; i ++) {
    if ( i > 0 && Arr[i] == Arr[ i - 1]) continue;
    let L = i + 1;
    let R = len - 1;
    while ( L < R) {
      if ( (Arr[i] + Arr[L] + Arr[R]) === 0 ) {
        res.push([Arr[i],Arr[L],Arr[R]])
        while (L < R && Arr[L] == Arr[L + 1]) L ++;
        while (L < R && Arr[R] == Arr[R - 1]) R --;
        L ++;
        R --;
      }
      else if ( (Arr[i] + Arr[L] + Arr[R]) > 0) R--;
      else if ( (Arr[i] + Arr[L] + Arr[R]) < 0) L++;
    }
  }
  return res;
}

console.log(threeSum([-1,0,1,2,-1,-4]))