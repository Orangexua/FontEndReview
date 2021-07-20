var findMedianSortedArrays = function(nums1, nums2) {
  var nums = nums1.concat(nums2).sort(( a, b) => a - b)
  let result = nums.length%2 == 0 ?
      (nums[nums.length/2] + nums[nums.length/2 - 1])/2 : nums[ Math.floor(nums.length/2)]
  return result
};

console.log(findMedianSortedArrays([1,2,3,4,5,123,12,3,55,23,23], [7,8,9,10,11,23,123]))