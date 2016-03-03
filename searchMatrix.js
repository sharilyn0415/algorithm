/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var start = 0;
    var rows = matrix.length, 
        cols = matrix[0].length;
    var end = rows * cols - 1;
    while (start <= end) {
        var mid = Math.floor((start + end) / 2);
        if (matrix[Math.floor(mid/cols)][mid%cols] == target) {
            return true;
        } 
        if (matrix[Math.floor(mid/cols)][mid % cols] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return false;
    
    // var i = 0, j = matrix[0].length - 1;
    // while (i < matrix.length && j >= 0) {
    //     if (matrix[i][j] == target) {
    //         return true;
    //     } else if (matrix[i][j] > target) {
    //         j--;
    //     } else {
    //         i++;
    //     }
    // }
    // return false;
};