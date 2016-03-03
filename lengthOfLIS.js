/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if(nums.length == 0) return 0;
    var res = new Array(nums.length);
    for(var i = 0; i < nums.length; i++) {
        res[i] = 1;
        for(var j = 0; j < i; j++) {
            if(nums[j] < nums[i]) {
                res[i] = Math.max(res[i], res[j] + 1);
            }
        }
    }
    var length = 0;
    for(var i = 0; i < nums.length; i++) {
        length = Math.max(length, res[i]);
    }
    return length;
};