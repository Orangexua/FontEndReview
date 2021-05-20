const twoSum = function (nums,target){
    let map = new Map();
    for(let i = 0 ; i < nums.length ; i ++){
        if (map.has(target - nums[i])){
            return [map.get(target - nums[i]),i]
        }
        map.set(nums[i],i);
    }
    return [];
}

var arr = [2,4,6,8,10,1,4,16];
var target = 16;
console.log(twoSum(arr,target));