var MinStack = function() {
    this.s1 = [];
    this.min = [];
};


MinStack.prototype.push = function(x) {
    this.s1.push(x);
    if(this.min.length == 0) {
        this.min.push(x);
    } else {
        if( x <= this.min[this.min.length-1]) {
            this.min.push(x);
        }
    } 
};

MinStack.prototype.pop = function() {
    if(this.s1.length > 0) {
        if(this.s1[this.s1.length-1] == this.min[this.min.length-1]) {
            this.min.pop();
        }
        return this.s1.pop();
    }
     return null;
};


MinStack.prototype.top = function() {
    return this.s1[this.s1.length-1];
};


MinStack.prototype.getMin = function() {
    return this.min[this.min.length-1];
};