/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for (var i = 0; i < 9; i++) {
        var row = {}, col = {};
        for (var j = 0; j < 9; j++) {
            if(board[i][j] != "." && row[board[i][j]]) return false;
            row[board[i][j]] = true;
            if(board[j][i] != "." && col[board[j][i]]) return false;
            col[board[j][i]] = true;
        }
    }
    
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            var block = {};
            for (var m = 0; m < 3; m++) {
                for (var n = 0; n < 3; n++) {
                    if(board[i*3+m][j*3+n] != "." && block[board[i*3+m][j*3+n]]) return false;
                    block[board[i*3+m][j*3+n]] = true;
                }
            }
        }
    }
    return true;
};
