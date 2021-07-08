var a = [1,2,1,3,5,3,7,9,6,4,6,9,0,5,3,2,4,7,89,4,2,2,65,8,6,4,34,2,3,123,5]

function fuc (arr) {
  if(arr.length <= 1){
    return arr
  }
  var quickItem  = Math.floor(arr.length/2);
  var quickValue = arr.splice(quickItem,1)[0];
  let left = [];
  let right = [];
  for ( var i = 0 ; i < arr.length ; i ++){
    if (arr[i] < quickValue){
      left.push(arr[i]);
    }else{
      right.push(arr[i]);
    }
  }
  return fuc(left).concat(quickValue , fuc(right))
}

function FundMore (arr) {
  var test = fuc(arr);
  var result = [];
  for (var i = 0 ; i < test.length ; i ++) {
    if (result.indexOf(test[i]) < 0) {
      result.push(test[i])
    }
  }
  var difference = result.filter( x => test.indexOf(x) != -1)
  return difference;
}
// console.log(FundMore(a));


arr1 = [1, 2, 4, 556, 77, 89, 9];
arr2 = [12, 12, 3, 4, 5, 6, 7, 87];
let difference = arr1.filter(x => arr2.indexOf(x) != -1).concat(arr2.filter(x => arr1.indexOf(x) != -1));
// console.log(difference)

//数组中重复的数字
function FundOne (arr) {
  var test = fuc(arr);
  var b = [];
  for (var i = 0 ; i < test.length ; i ++) {
    if (test[i] === test[i - 1]) {
      b.push(test[i])
    }
  }
  return [... new Set(b)]
}

console.log(FundOne(a));

  // var difference = result.filter( x => test.indexOf(x) != -1)
