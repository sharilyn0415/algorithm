/**
 * @param {[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    strs.sort();
    var hash = [];
    for (var i = 0; i < strs.length; i++) {
        var str = strs[i];
        var key = str.split("").sort().join("");
        if (hash[key] == undefined) {
            hash[key] = [str];
        } else {
            hash[key].push(str);
        }
    }
    var res = [];
    for (var x in hash) {
        res.push(hash[x]);
    }
    return res;
};

