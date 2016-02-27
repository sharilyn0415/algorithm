/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var i = 0, j = nums.length-1;
    while(i < j) {
        var mid = Math.floor((i+j)/2);
        if(nums[i] < nums[j]) return nums[i];
        if(nums[mid] > nums[j]) {
            i = mid+1;
        } else {
            j = mid;
        }
    }
    return nums[i];
};