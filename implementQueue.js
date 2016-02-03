
var Queue = function() {
    this.s1 = [];
    this.s2 = [];
};

Queue.prototype.push = function(x) {
    this.s1.push(x);
};

Queue.prototype.pop = function() {
    if(this.s2.length > 0) return this.s2.pop();
    while(this.s1.length > 1) {
            this.s2.push(this.s1.pop());
        }
    if(this.s1.length == 1) return this.s1.pop();
    return null;
};

Queue.prototype.peek = function() {
    if (this.s2.length > 0) return this.s2[this.s2.length-1];
    if (this.s1.length > 0) return this.s1[0]
    return null;
};

Queue.prototype.empty = function() {
    return this.s1.length + this.s2.length == 0;
};