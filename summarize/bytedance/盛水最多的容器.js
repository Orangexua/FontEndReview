var maxArea = function(height) {
  var i = 0 , j = height.length -1, res = 0;
  while ( i < j) {
      res = Math.max( res , Math.min(height[i] , height[j])*(j - i))
      console.log( res);
      if ( height[i] < height[j]) {
          i++
      }else {
          j--
      }
  }
  return res
};

console.log( maxArea([1,8,6,2,5,4,8,3,7]));