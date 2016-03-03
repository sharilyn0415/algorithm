/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    if (matrix == null) return;
    var n = matrix.length;
    var low = 0, high = n-1;
    while(low < high){
        var temp = matrix[low];
        matrix[low] = matrix[high];
        matrix[high] = temp;
        low++;
        high--;
    }
    for(var i = 0; i < n; i++){
        for(var j = 0; j < i; j++){
            var temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
};