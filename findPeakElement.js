var findPeakElement = function(nums) {
    var left = 0;
    var right = nums.length - 1;
    while (left < right) {
        var mid = Math.floor((left + right + 1)/2);
        if (nums[mid] > nums[mid-1]) {
            left = mid;
        } else {
            right = mid-1;
        }
    }
    return left;
};