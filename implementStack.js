var Stack = function() {
    this.storage = [];
    this.storage2 = [];
};

Stack.prototype.push = function(x) {
    
    this.storage.push(x);
};

Stack.prototype.pop = function() {
    while (this.storage.length > 1) {
        this.storage2.push(this.storage.shift());
     }
     if(this.storage.length == 1) {
         return this.storage.shift();
     }
     
     while(this.storage2.length > 1) {
         this.storage.push(this.storage2.shift());
     }
     if (this.storage2.length == 1) return this.storage2.shift();
     return null;
};

Stack.prototype.top = function() {
    if (this.storage.length > 0) return this.storage[this.storage.length-1];
    if (this.storage2.length > 0) return this.storage2[this.storage2.length-1];
    return null;
};

Stack.prototype.empty = function() {
    return this.storage.length + this.storage2.length == 0
};