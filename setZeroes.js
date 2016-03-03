/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var row = false, col = false;
    for(var i = 0; i < matrix.length; i++) {
        for(var j = 0; j < matrix[0].length; j++) {
            if(matrix[i][j] == 0) {
                if(i == 0) row = true;
                if(j == 0) col = true;
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }
    for(var i = 1; i < matrix.length; i++) {
        for(var j = 1; j < matrix[0].length; j++) {
            if(matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0;
            }
        }
    }
    if(row) {
        for(var j = 0; j < matrix[0].length; j++) {
            matrix[0][j] = 0;
        }
    }
    if(col) {
        for(var i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0;
        }
    }

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