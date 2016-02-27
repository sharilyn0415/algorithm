/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length == 0) {
        return 0;
    }
    var i = 0, j = 1;
    while (j < nums.length) {
        if (nums[i] != nums[j]) {
            i += 1;
            nums[i] = nums[j];
        }
        j += 1;
    }
    return i + 1;
};