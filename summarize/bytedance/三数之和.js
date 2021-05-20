function moreAdd (nums){
    let len = nums.length;
    const result = [];
    if (len < 3){
        return result;
    }   
    nums.sort((a,b) => a - b);
    for (var i = 0 ; i < nums.length -2; i ++){
        if(nums[i] > 0){
            break
        }
        // 避免掉重复的情况
        if(i && nums[i] === nums[i - 1]){
            continue
        }
        let left = i;
        let right = len - 1;
        while ( left < right){
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0){
                result.push([nums[i],nums[left++],nums[right--]]);
                while(nums[left] === nums[left - 1]){
                    left ++
                }
                while(nums[right] === nums[right + 1]){
                    right --
                }
            }else if(sum > 0){
                right --
            }else{
                left ++
            }
        }
    }
    return result;
}
console.log(moreAdd(nums));