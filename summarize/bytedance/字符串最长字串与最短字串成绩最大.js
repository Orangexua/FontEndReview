function getMaxSubstrLenProd(inputStr) {
  var res = 0;
  var len = inputStr.length;
  for (var i = 0 ; i < len ; i ++) {
      for ( var j = i + 1 ; j < len ; j ++) {
          n = k = j;
          s1 = inputStr.slice(i,j);
          s2 = [];
          while( k < len) {
              if ( s1.indexOf(inputStr.charAt(n)) != -1) {
                  n += 1;
                  k = n;
              }else {
                  if ( s1.indexOf(inputStr.charAt(k)) != -1) {
                      res = res>s1.length*s2.length ? res : s1.length * s2.length;
                      s2 = [];
                      n = k + 1;
                      k = n;
                  } else {
                      s2 = s2 + inputStr.charAt(k);
                      k += 1;
                  }
              }
          }
          res = res > (s1.length * s2.length) ? res : s1.length * s2.length
      }
  }
  return res;
}

console.log(getMaxSubstrLenProd("adcbadcbedbadedcbacbcadbc"));