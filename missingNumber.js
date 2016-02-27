/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // var res = 0;
    // for(var i = 0; i < nums.length; i ++) {
    //     res += nums[i] - i ;
    // }
    // return nums.length-res;
    var sum = 0;
    for(var i = 0; i < nums.length; i ++) {
        sum += nums[i];
    }
    var expected = (0+nums.length)*(nums.length+1)/2;
    return expected-sum;
};