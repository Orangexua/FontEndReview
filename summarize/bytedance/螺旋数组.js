var generateMatrix = function(n) {
  // new Array(n).fill(new Array(n))
  // 使用fill --> 填充的是同一个数组地址
  const res = Array.from({length: n}).map(() => new Array(n));
  let loop = n >> 1, i = 0, //循环次数
      count = 1,
      startX = startY = 0; // 起始位置 
  while(++i <= loop) {
      // 定义行列
      let row = startX, column = startY;
      // [ startY, n - i)
      while(column < n - i) {
          res[row][column++] = count++;
      }
      // [ startX, n - i)
      while(row < n - i) {
          res[row++][column] = count++;
      }
      // [n - i ,  startY)
      while(column > startY) {
          res[row][column--] = count++; 
      }
      // [n - i ,  startX)
      while(row > startX) {
          res[row--][column] = count++;
      }
      startX = ++startY;
  }
  if(n & 1) {
      res[startX][startY] = count;
  }
  return res;
};

console.log(generateMatrix(6));