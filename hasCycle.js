/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var p = head;
    var c = head;
    while(c != null && c.next != null) {
        p = p.next;
        c = c.next.next;
        if(p == c) return true;
    }
    return false;
    
    // solution 2
    // var p = null;
    // var c = head;
    // while(c != null){
    //     var next = c.next;
    //     c.next = p;
    //     p = c;
    //     c = next;
    // }
    // if(p == head && head != null && head.next != null) return true;
    // return false;
};