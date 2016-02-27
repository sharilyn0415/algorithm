function Node(data) {
    this.data = data;
    this.next = null;
}

function SinglyList() {
    this.length = 0;
    this.head = null;
}

SinglyList.prototype = {
	add: function(value) {
	    var node = new Node(value);
	    var currentNode = this.head;

	    if (!currentNode) {
	        this.head = node;
	        this.length++; 
	        return node;
	    }
	    while (currentNode.next) {
	        currentNode = currentNode.next;
	    }
	    currentNode.next = node;
	    this._length++;
	     
	    return node;
	},
	remove: function(position) {
		var p = this.head;
		var c = this.head;
		for(var i = 0; i < position; i++) {
			p = c;
			c = c.next;
		}
		p.next = c.next;
		this.length--;
		return c.data;
};




