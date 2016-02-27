/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var hash ={};
    var res = str.split(" ");
    if(res.length != pattern.length) return false;
    for(var i = 0; i < pattern.length; i++) {
        if(!hash[pattern[i]] ) hash[pattern[i]] = res[i];
         if(!hash['a'+res[i]]) hash['a'+res[i]] = pattern[i];
        if(hash[pattern[i]] != res[i]) return false;
        if(hash['a'+res[i]] != pattern[i]) return false;
    }
    return true;
};