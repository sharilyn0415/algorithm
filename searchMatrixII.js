/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var j = matrix[0].length-1;
    var i = 0;
    while(j >= 0 && i <= matrix.length-1) {
        if(target == matrix[i][j]) {
            return true;
        } else if(target < matrix[i][j]) {
            j--;
        } else if(target > matrix[i][j]) {
            i++;
        }
    }
    return false;
};