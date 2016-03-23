/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    // solution1
    var m = matrix.length, n = matrix[0].length;
    for(var i = 0; i < m; i++) {
        for(var j = 0; j < n; j++) {
            if(matrix[i][j] == 0) {
               var x = m-1, y = n-1;
               while(x >= 0) {
                   if(matrix[x][j] != 0) matrix[x][j] = 'x';
                   x--;
               }
               while(y >= 0) {
                   if(matrix[i][y] != 0) matrix[i][y] = 'x';
                   y--;
               }
            }
        }
    }
    for(var i = 0; i < m; i++) {
        for(var j = 0; j < n; j++) {
            if(matrix[i][j] == 'x') 
                matrix[i][j] = 0;
        }
    }

    // solution 2
    // var row = false, col = false;
    // for(var i = 0; i < matrix.length; i++) {
    //     for(var j = 0; j < matrix[0].length; j++) {
    //         if(matrix[i][j] == 0) {
    //             if(i == 0) row = true;
    //             if(j == 0) col = true;
    //             matrix[0][j] = 0;
    //             matrix[i][0] = 0;
    //         }
    //     }
    // }
    // for(var i = 1; i < matrix.length; i++) {
    //     for(var j = 1; j < matrix[0].length; j++) {
    //         if(matrix[i][0] == 0 || matrix[0][j] == 0) {
    //             matrix[i][j] = 0;
    //         }
    //     }
    // }
    // if(row) {
    //     for(var j = 0; j < matrix[0].length; j++) {
    //         matrix[0][j] = 0;
    //     }
    // }
    // if(col) {
    //     for(var i = 0; i < matrix.length; i++) {
    //         matrix[i][0] = 0;
    //     }
    // }

    // solution3
    // var solution = [];
    // for(var i=0; i<matrix.length; i++){ 
    //     for(var j=0; j<matrix[i].length; j++){
    //         if(matrix[i][j]===0){
    //             solution.push(i);
    //             solution.push(j);
    //         }
    //     }
    // }
    // for(var x=0; x<solution.length; x++){ 
    //     for(j=0; j<matrix[solution[x]].length; j++){
    //         matrix[solution[x]][j] = 0;
    //     }
    //     for(i=0; i<matrix.length; i++){
    //         matrix[i][solution[x+1]] = 0;
    //     }
    //     x++;
    // }
    
};