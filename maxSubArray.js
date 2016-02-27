/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var max = nums[0];
    var temp = 0;
    for(var i = 0; i < nums.length; i++) {
        temp += nums[i];
        if(temp > max) max = temp;
        if(temp < 0) temp = 0;
    }
    return max;
};