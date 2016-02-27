/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var res = new Array(nums.length);
    var temp = 1;
    for(var i = 0; i < nums.length; i++) {
        res[i] = temp;
        temp = res[i]*nums[i];
    }
    temp = 1;
    for(var j = nums.length-1; j >= 0; j-- ) {
        res[j] *= temp;
        temp *= nums[j];
    }
    return res;
    
    // var left = new Array(nums.length);
    // left[0] = 1;
    // for (var i = 1; i < left.length; i++) {
    //     left[i] = left[i-1]*nums[i-1];
    // }
    
    // var right = new Array(nums.length);
    // right[right.length-1] = 1;
    // for (var i = right.length-2; i >= 0; i--) {
    //     right[i] = right[i+1]*nums[i+1];
    // }
    
    // for (var i = 0; i < right.length; i++) {
    //     right[i] *= left[i];
    // }
    // return right;
    
    // var res = [];
    // for (var i = 0; i < nums.length; i++) {
    //     res[i] = 1;
    //     var left = i-1, right = i+1;
    //     while(left >= 0) {
    //         res[i] *= nums[left];
    //         left--;
    //     }
    //     while(right < nums.length) {
    //         res[i] *= nums[right];
    //         right++;
    //     }
    // }
    // return res;
};