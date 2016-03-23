/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // Solution1
    var row = matrix.length-1;
    var col = matrix[0].length-1;
    var i = 0, j = 0;
    while (i <= row) {
        mid = Math.floor((i + row) / 2);
        if (matrix[mid][0] == target) return true;
        if (matrix[mid][0] > target) row = mid - 1;
        if (matrix[mid][0] < target) i = mid + 1;
    }
    if (i == 0) return false;
    while (j <= col) {
        var mid = Math.floor((j + col) / 2);
        if (matrix[row][mid] == target) return true;
        if (matrix[row][mid] > target) col = mid - 1;
        if (matrix[row][mid] < target)j = mid + 1;
    }
    return false;
    
    // Solution2
    // var start = 0;
    // var rows = matrix.length, 
    //     cols = matrix[0].length;
    // var end = rows * cols - 1;
    // while (start <= end) {
    //     var mid = Math.floor((start + end) / 2);
    //     if (matrix[Math.floor(mid/cols)][mid%cols] == target) {
    //         return true;
    //     } 
    //     if (matrix[Math.floor(mid/cols)][mid % cols] < target) {
    //         start = mid + 1;
    //     } else {
    //         end = mid - 1;
    //     }
    // }
    // return false;
    
    // Solution3
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